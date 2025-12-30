import emailjs from "@emailjs/browser";

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

// ============================================================
// EmailJS Configuration - YOU NEED TO UPDATE THESE VALUES
// ============================================================
//
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail, Outlook, etc.) - this is where emails will be sent FROM
// 3. Create an email template (see instructions below)
// 4. Copy your Service ID, Template ID, and Public Key below
//
// FREE TIER: 200 emails/month - should be plenty for lead capture!
// ============================================================

const EMAILJS_CONFIG = {
  serviceId: "service_mvp_app", // e.g., 'service_abc123' - from EmailJS dashboard
  templateId: "template_mvp_app", // Template ID from EmailJS
  publicKey: "-FGqvzXuTYnZckP4F", // From EmailJS dashboard > Account > API Keys
};

// Your email address where you want to receive form submissions
const YOUR_EMAIL = "joseph@bartholomewdevelopment.com"; // Change this to your email

/**
 * Sends form data to you via EmailJS
 * No database needed - just emails!
 *
 * @param data - The form data collected from the user
 * @param type - 'initial' (just email) or 'progress' (full form data)
 */
export const sendEmailNotification = async (
  data: EmailData,
  type: "initial" | "progress"
) => {
  // Check if EmailJS is configured
  if (EMAILJS_CONFIG.serviceId === "YOUR_SERVICE_ID") {
    console.warn("⚠️ EmailJS not configured yet!");
    console.log("Form data that would be sent:", data);
    console.log(
      "Set up EmailJS and update the config in src/lib/emailService.ts"
    );

    // Still return success so the form flow continues during development
    return {
      success: true,
      result: "EmailJS not configured - check console for form data",
    };
  }

  try {
    // Build a nicely formatted message for the email
    const formattedMessage =
      type === "initial"
        ? `🎯 New Lead Captured!\n\nEmail: ${data.user_email}\n\nThis person just started the intake form.`
        : `
🚀 New MVP Inquiry - Complete Form Submission
==============================================

📧 Contact Information:
   • Email: ${data.user_email}
   • Name: ${data.user_name || "Not provided"}
   • Phone: ${data.user_phone || "Not provided"}

📋 Project Details:
   • Planning Stage: ${data.planning_stage || "Not provided"}
   • Funding Status: ${data.funding_status || "Not provided"}
   • Active Users: ${data.active_users || "Not provided"}
   • Budget: ${data.budget || "Not provided"}
   • Main Goal: ${data.main_goal || "Not provided"}
   • Role: ${data.role || "Not provided"}
   • Timeline: ${data.timeline || "Not provided"}

📅 Submitted: ${new Date().toLocaleString()}

---
This lead completed the full intake form and booked a discovery call.
      `.trim();

    // Template parameters - these match your EmailJS template variables
    const templateParams = {
      // Where to send
      to_email: YOUR_EMAIL,

      // Reply-to the lead's email
      reply_to: data.user_email,
      from_name: data.user_name || "MVP Applications Lead",

      // Subject line info
      subject:
        type === "initial"
          ? `🎯 New Lead: ${data.user_email}`
          : `🚀 Complete Inquiry: ${data.user_name || data.user_email}`,

      // The formatted message
      message: formattedMessage,

      // Individual fields (in case your template uses them separately)
      user_email: data.user_email,
      user_name: data.user_name || "Not provided",
      user_phone: data.user_phone || "Not provided",
      planning_stage: data.planning_stage || "Not provided",
      funding_status: data.funding_status || "Not provided",
      active_users: data.active_users || "Not provided",
      budget: data.budget || "Not provided",
      main_goal: data.main_goal || "Not provided",
      role: data.role || "Not provided",
      timeline: data.timeline || "Not provided",
    };

    // Send the email!
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log("✅ Email sent successfully:", result);
    return { success: true, result };
  } catch (error) {
    console.error("❌ Failed to send email:", error);

    // Log the data so you don't lose the lead even if email fails
    console.log("📝 Form data (backup):", JSON.stringify(data, null, 2));

    return { success: false, error };
  }
};
