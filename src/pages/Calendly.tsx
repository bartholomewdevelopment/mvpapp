import React, { useEffect } from 'react';

const Calendly: React.FC = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Book Your Discovery Call
            </h1>
            <p className="text-lg text-gray-600">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/joseph-bartholomewdevelopment/discovery-strategy-meeting"
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Having trouble with the calendar? 
              <a href="mailto:joseph@bartholomewdevelopment.com" className="text-[#fd6a62] hover:underline ml-1">
                Contact us directly
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendly;