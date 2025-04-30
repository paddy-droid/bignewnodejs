"use client";
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean | null, message: string | null }>({ success: null, message: null });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: null });

    // Execute reCAPTCHA v3
    if (typeof grecaptcha === 'undefined' || typeof grecaptcha.enterprise === 'undefined') {
      console.error('reCAPTCHA script not loaded');
      setSubmitStatus({ success: false, message: 'reCAPTCHA not loaded. Please try again later.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const recaptchaToken = await grecaptcha.enterprise.execute('6LdeGSorAAAAAOq7uNlqF85IHFNHRu02gjk6kwmk', { action: 'contact_form_submit' });

      // Send form data and reCAPTCHA token to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          message,
          recaptchaToken,
        }),
      });

      const result = await response.json();

      // Handle API response and update submitStatus
      if (response.ok) {
        if (result.success) {
          setSubmitStatus({ success: true, message: 'Nachricht erfolgreich gesendet!' });
          setName('');
          setPhone('');
          setMessage('');
        } else {
          setSubmitStatus({ success: false, message: result.error || 'Fehler beim Senden der Nachricht.' });
        }
      } else {
        setSubmitStatus({ success: false, message: result.error || 'Serverfehler beim Senden der Nachricht.' });
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ success: false, message: 'Ein unerwarteter Fehler ist aufgetreten.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Senden Sie uns eine Nachricht</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
            Telefonnummer:
          </label>
          <input
            type="tel"
            id="phone"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Nachricht:
          </label>
          <textarea
            id="message"
            rows={4}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-brand hover:bg-brand-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
            disabled={isSubmitting}
            style={{ backgroundColor: '#0A3D62' }}
          >
            {isSubmitting ? 'Senden...' : 'Nachricht senden'}
          </button>
        </div>
        {submitStatus.message && (
          <p className={`text-center mt-4 ${submitStatus.success ? 'text-green-500' : 'text-red-500'}`}>
            {submitStatus.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;