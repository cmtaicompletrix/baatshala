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
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

  const packages = [
    {
      id: 'basic',
      name: 'Basic Consultation',
      price: 1999,
      description: 'One-on-one 60-minute session focused on image assessment',
      features: ['Personal image analysis', 'Basic styling tips', 'Follow-up email support']
    },
    {
      id: 'standard',
      name: 'Standard Package',
      price: 4999,
      description: 'Comprehensive image transformation with 2 sessions',
      features: ['In-depth image consultation', 'Personalized style guide', '30-day email support', 'One follow-up session']
    },
    {
      id: 'premium',
      name: 'Premium Transformation',
      price: 9999,
      description: 'Complete image makeover with ongoing support',
      features: ['Complete image overhaul', 'Personalized wardrobe planning', '3 in-person sessions', '90-day support', 'Digital style lookbook']
    }
  ];

  useEffect(() => {
    if (window.Razorpay) {
      setIsRazorpayLoaded(true);
    }
  }, []);

  const handleRazorpayScriptLoad = () => {
    setIsRazorpayLoaded(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPackage) {
      alert('Please select a package before proceeding');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call to prepare order
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Get selected package details
    const packageDetails = packages.find(pkg => pkg.id === selectedPackage);
    
    if (packageDetails && isRazorpayLoaded) {
      initiatePayment(packageDetails);
    } else {
      alert('Payment gateway is not loaded. Please try again.');
      setIsSubmitting(false);
    }
  };

  const initiatePayment = (packageDetails: typeof packages[0]) => {
    setPaymentProcessing(true);
    
    // Create a new Razorpay instance
    const options = {
      key: 'rzp_test_yourkeyhere', // Replace with your actual Razorpay key
      amount: packageDetails.price * 100, // Amount in paise
      currency: 'INR',
      name: 'Baatshala Image Consultancy',
      description: `Booking for ${packageDetails.name}`,
      image: '/logo.png', // Add your logo URL
      handler: function(response: any) {
        // Handle successful payment
        console.log('Payment successful:', response);
        handlePaymentSuccess(response);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone
      },
      notes: {
        sessionType: formData.sessionType,
        preferredDate: formData.preferredDate,
        message: formData.message,
        packageId: packageDetails.id
      },
      theme: {
        color: '#EAB308' // Yellow color matching your theme
      },
      modal: {
        ondismiss: function() {
          setPaymentProcessing(false);
          setIsSubmitting(false);
        }
      }
    };

    try {
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Error initiating Razorpay:', error);
      alert('Could not initiate payment. Please try again.');
      setPaymentProcessing(false);
      setIsSubmitting(false);
    }
  };

  const handlePaymentSuccess = (response: any) => {
    // Here you would typically make an API call to your backend
    // to verify the payment and save the booking details
    
    console.log('Booking data:', {
      ...formData,
      paymentId: response.razorpay_payment_id,
      packageSelected: selectedPackage
    });
    
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

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
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
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={handleRazorpayScriptLoad}
      />
      
      <section id="book-session" className="py-20 bg-gradient-to-b from-black/5 via-white to-white">
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
              Start Your <span className="text-yellow-400">Image Transformation</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Choose your preferred package and let us help you transform your professional image.
            </p>
          </motion.div>

          {/* Package Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Select Your Package</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`bg-white rounded-xl shadow-lg p-6 border-2 transition-all cursor-pointer ${
                    selectedPackage === pkg.id 
                      ? 'border-yellow-400 transform scale-105' 
                      : 'border-transparent hover:border-yellow-200'
                  }`}
                  onClick={() => handlePackageSelect(pkg.id)}
                >
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{pkg.name}</h4>
                    <div className="flex items-center justify-center mt-2">
                      <FaRupeeSign className="text-yellow-500" />
                      <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">{pkg.description}</p>
                  </div>
                  
                  <ul className="mt-4 space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-yellow-500 mr-2">✓</span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {selectedPackage === pkg.id && (
                    <div className="mt-4 text-center">
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
                        Selected
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
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
                disabled={isSubmitting || !selectedPackage}
                className={`w-full py-3 rounded-lg font-medium text-lg transition-all flex items-center justify-center gap-2 ${
                  isSubmitting || !selectedPackage
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {paymentProcessing ? 'Processing Payment...' : 'Processing...'}
                  </>
                ) : (
                  <>
                    Pay & Book Session
                    {selectedPackage && (
                      <span className="ml-1">
                        (₹{packages.find(pkg => pkg.id === selectedPackage)?.price})
                      </span>
                    )}
                  </>
                )}
              </button>
              
              {!selectedPackage && (
                <p className="text-center text-yellow-600 mt-3 text-sm">
                  Please select a package above to proceed
                </p>
              )}
              
              <div className="flex items-center justify-center mt-6">
                <img src="/razorpay-logo.png" alt="Razorpay" className="h-6 opacity-70" />
                <span className="text-xs text-gray-500 ml-2">Secure payments by Razorpay</span>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookSession;
