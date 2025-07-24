'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaEnvelope, FaPhoneAlt, FaRupeeSign } from 'react-icons/fa';
import Script from 'next/script';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const BookSession = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: 'individual',
    preferredDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPackage) {
      alert('Please select a package before proceeding');
      return;
    }

    setIsSubmitting(true);

    console.log(formData);
    
    // Simulate API call
    setTimeout(() => {
      setPaymentProcessing(false);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[60vh] flex items-center justify-center"
      >
        <div className="text-center p-8">
          <div className="text-6xl mb-6">🎉</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h3>
          <p className="text-gray-600 mb-8">Your payment was successful and your session has been booked. We'll send you a confirmation email with all the details.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
          >
            Book Another Session
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black/5 via-white to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-500/10"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-yellow-600 font-medium">Book Your Session</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Start Your <span className="text-yellow-400">Communication Journey</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Choose your preferred session type and let us help you transform your communication skills.
          </p>
        </motion.div>

        {/* Responsive 2-column layout */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/3 bg-white rounded-2xl shadow-lg p-8 mb-8 md:mb-0 border border-yellow-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Details</h3>
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 bg-yellow-100 text-yellow-600 rounded-full">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-700 font-medium">Email</p>
                <a href="mailto:Sinhashailesh999@gmail.com" className="text-gray-900 hover:text-yellow-600 transition-colors text-sm font-semibold">Sinhashailesh999@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 bg-yellow-100 text-yellow-600 rounded-full">
                <FaPhoneAlt className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-700 font-medium">Phone</p>
                <a href="tel:+919911055197" className="text-gray-900 hover:text-yellow-600 transition-colors text-sm font-semibold">+91 99110 55197</a>
              </div>
            </div>
            <div className="mt-8 text-gray-600 text-sm">
              <p>Have questions? Reach out to us directly and our team will assist you promptly.</p>
            </div>
          </motion.div>

            {/* Booking Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-2/3 bg-white rounded-2xl p-8 shadow-lg"
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="preferredDate">
                    Preferred Date
                  </label>
                  <input
                    required
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                  Additional Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all resize-none"
                  placeholder="Tell us about your goals or any specific requirements..."
                />
              </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg font-medium text-lg transition-all ${
                isSubmitting
                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Book Session'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default BookSession;
