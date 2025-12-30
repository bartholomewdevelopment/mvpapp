import emailjs from '@emailjs/browser';

interface EmailData {
  user_email: string;
  planning_stage?: string;
  funding_status?: string;
  active_users?: string;
  budget?: string;
  main_goal?: string;
  role?: string;
  timeline?: string;
  user_name?: string;
  user_phone?: string;
}

// Store responses locally and in Supabase
const storeResponse = async (data: EmailData, type: 'initial' | 'progress') => {
  const responseData = {
    ...data,
    submission_type: type,
    created_at: new Date().toISOString()
  };

  // Store locally as backup
  try {
    const responses = JSON.parse(localStorage.getItem('formResponses') || '[]');
    responses.push(responseData);
    localStorage.setItem('formResponses', JSON.stringify(responses));
    console.log('Response stored locally');
  } catch (error) {
    console.error('Failed to store locally:', error);
  }

  // Store in Supabase using existing function
  try {
    await fetch('https://rydzuvdycnipgpgbfzgy.supabase.co/functions/v1/c8006416-b74e-4c1a-aa80-e30609c84e8b', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'store_response', data: responseData })
    });
    console.log('Response stored in Supabase');
  } catch (error) {
    console.error('Failed to store in Supabase:', error);
  }
};

export const sendEmailNotification = async (data: EmailData, type: 'initial' | 'progress') => {
  try {
    // Store the response
    await storeResponse(data, type);

    // Send email using EmailJS
    const templateParams = {
      user_email: data.user_email,
      user_name: data.user_name || 'Not provided',
      user_phone: data.user_phone || 'Not provided',
      planning_stage: data.planning_stage || 'Not provided',
      funding_status: data.funding_status || 'Not provided',
      active_users: data.active_users || 'Not provided',
      budget: data.budget || 'Not provided',
      main_goal: data.main_goal || 'Not provided',
      role: data.role || 'Not provided',
      timeline: data.timeline || 'Not provided',
      submission_type: type
    };

    const result = await emailjs.send(
      'service_your_service_id',
      type === 'initial' ? 'template_initial_id' : 'template_complete_id',
      templateParams,
      'your_public_key'
    );

    console.log('Email sent successfully:', result);
    return { success: true, result };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
};