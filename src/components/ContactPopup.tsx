"use client";

import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPopup() {
  // Start with null to avoid hydration mismatch
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '2BHK',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Format the message to include all information
    const messageText = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Interest: ${formData.interest}

Message:
${formData.message}
    `;

    // Create template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      to_name: "blueroofindia",
      message: messageText,
      subject: `New Adani Website Inquiry from ${formData.name} (Popup Form)`,
      sender_email: "pranaynair05@gmail.com"
    };

    emailjs.send(
      'service_idjo5fi', // Replace with your EmailJS service ID
      'template_l9ryln9', // Replace with your EmailJS template ID
      templateParams,
      'u5ddgkR4T81FgjY1r' // Replace with your EmailJS public key
    )
      .then((result) => {
        console.log('Email sent successfully:', result);
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your interest! Our team will contact you shortly.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: '2BHK',
          message: ''
        });
        
        // Close popup after successful submission
        setTimeout(() => {
          setIsOpen(false);
          // Save to localStorage only after form submission
          localStorage.setItem('hasSeenContactPopup', 'true');
        }, 3000); // Close after 3 seconds so user can see success message
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setSubmitStatus({
          type: 'error',
          message: `Sorry, something went wrong. Please try again later.`
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const closePopup = () => {
    setIsOpen(false);
    // Save to localStorage only when manually closed
    localStorage.setItem('hasSeenContactPopup', 'true');
  };

  // Always show popup on initial render - client side only
  useEffect(() => {
    // Set to true to always show the popup when the site is opened/reloaded
    setIsOpen(true);
  }, []);

  // Don't render anything during SSR
  if (isOpen === null) return null;
  
  // Don't render if popup should be closed
  if (isOpen === false) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-24 md:pt-28 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto mx-4">
        <button 
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors bg-white rounded-full p-1"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h3>
          <p className="text-gray-600 mb-6">
            Interested in Adani? Fill out this form to get more information or schedule a site visit.
          </p>
          
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            {/* Hidden fields for email configuration */}
            <input type="hidden" name="to_email" value="pranaynair05@gmail.com" />
            
            <div>
              <label htmlFor="popup-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                id="popup-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            
            <div>
              <label htmlFor="popup-email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                id="popup-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            
            <div>
              <label htmlFor="popup-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                id="popup-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            
            <div>
              <label htmlFor="popup-interest" className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
              <select
                id="popup-interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="2BHK">2 BHK</option>
                <option value="3BHK">3 BHK</option>
                <option value="4BHK">4 BHK</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="popup-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="popup-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            
            {submitStatus.message && (
              <div className={`rounded-md p-4 ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 text-green-800' 
                  : 'bg-red-50 text-red-800'
              }`}>
                <p>{submitStatus.message}</p>
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
              style={{ backgroundColor: '#2d7d2d' }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : 'Submit Enquiry'}
            </button>
            
            <p className="text-xs text-gray-500 mt-2">
              By submitting this form, you agree to our privacy policy and consent to be contacted regarding Adani.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
