'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUserTie, 
  FaHandshake, 
  FaChartLine,
  FaComments,
  FaTimes,
  FaRegSadTear,
  FaRegSmile
} from 'react-icons/fa';

const ImageConsultancy = () => {
  const imageBarriers = [
    {
      icon: <FaRegSadTear className="w-5 h-5" />,
      title: "Poor First Impressions",
      description: "Making negative first impressions due to inappropriate attire or grooming"
    },
    {
      icon: <FaTimes className="w-5 h-5" />,
      title: "Misaligned Self-Presentation",
      description: "Projecting an image that doesn't match your role or professional goals"
    },
    {
      icon: <FaRegSadTear className="w-5 h-5" />,
      title: "Lack of Confidence",
      description: "Feeling insecure about your appearance affecting your overall performance"
    },
    {
      icon: <FaTimes className="w-5 h-5" />,
      title: "Missed Opportunities",
      description: "Losing professional and personal opportunities due to poor image management"
    }
  ];

  const imageTransformation = [
    {
      icon: <FaUserTie className="w-5 h-5" />,
      title: "Professional Success",
      description: "Achieve career advancement through a polished, professional image"
    },
    {
      icon: <FaHandshake className="w-5 h-5" />,
      title: "Enhanced Credibility",
      description: "Build trust and credibility with clients, colleagues, and superiors"
    },
    {
      icon: <FaRegSmile className="w-5 h-5" />,
      title: "Boosted Confidence",
      description: "Feel more confident and comfortable in all personal and professional settings"
    },
    {
      icon: <FaChartLine className="w-5 h-5" />,
      title: "Increased Influence",
      description: "Enhance your ability to influence and persuade through visual communication"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
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
          <span className="text-yellow-600 font-medium">Professional Image Management</span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Image <span className="text-yellow-400">Consultancy</span>
        </h2>
      </motion.div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-8 rounded-lg mb-16 shadow-xl"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">India's Top Image Consultancy</h3>
          <p className="text-lg mb-6">
            With over 25+ years of experience in Radio, TV, Film, and Print industries, 
            Baatshala stands as India's premier image consultancy firm with certified image consultants.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = '/book-session';
            }}
            className="inline-block border-2 border-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-yellow-600 transition duration-300 cursor-pointer"
          >
            Transform Your Image Today
          </motion.div>
        </div>
      </motion.div>

      {/* A-B-C Approach */}
      <div className="mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.div 
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-500/10"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-yellow-600 font-medium">Our Unique Methodology</span>
          </motion.div>
          <h3 className="text-3xl font-bold mb-4 text-gray-900">The Baatshala <span className="text-yellow-500">A-B-C</span> Approach</h3>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            At Baatshala, we believe in a complete transformation through our unique A-B-C approach:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-yellow-500"
          >
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500 mx-auto mb-4">
              <FaUserTie className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-gray-800 text-center">A for Appearance</h4>
            <p className="text-gray-600 text-center">
              Enhance your visual impact through personalized styling, wardrobe management, and grooming techniques that align with your personality and professional goals.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-yellow-500"
          >
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500 mx-auto mb-4">
              <FaHandshake className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-gray-800 text-center">B for Behaviour</h4>
            <p className="text-gray-600 text-center">
              Develop impeccable etiquette, body language, and social skills that leave a lasting impression in both professional and personal settings.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-yellow-500"
          >
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500 mx-auto mb-4">
              <FaComments className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-gray-800 text-center">C for Communication</h4>
            <p className="text-gray-600 text-center">
              Master the art of effective verbal and non-verbal communication to express yourself confidently and connect meaningfully with others.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Image Barriers Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <motion.div 
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-500/10"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-yellow-600 font-medium">Image Challenges</span>
          </motion.div>
          <h3 className="text-3xl font-bold mb-4 text-gray-900">Common <span className="text-yellow-500">Image Barriers</span></h3>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Many professionals face these image-related challenges that can hinder their success:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {imageBarriers.map((barrier, index) => (
            <motion.div
              key={barrier.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start p-5 bg-white rounded-lg shadow-md border-l-4 border-red-400"
            >
              <div className="mr-4 p-2 bg-red-100 rounded-full text-red-500">
                {barrier.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">{barrier.title}</h4>
                <p className="text-gray-600 text-sm">{barrier.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Image Transformation Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <motion.div 
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-500/10"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-yellow-600 font-medium">Image Benefits</span>
          </motion.div>
          <h3 className="text-3xl font-bold mb-4 text-gray-900">The <span className="text-yellow-500">Transformation</span></h3>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience these powerful benefits with Baatshala's image consultancy services:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {imageTransformation.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start p-5 bg-white rounded-lg shadow-md border-l-4 border-green-400"
            >
              <div className="mr-4 p-2 bg-green-100 rounded-full text-green-500">
                {benefit.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <motion.div 
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-500/10"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-yellow-600 font-medium">What We Offer</span>
          </motion.div>
          <h3 className="text-3xl font-bold mb-4 text-gray-900">Our <span className="text-yellow-500">Image Consultancy</span> Services</h3>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your personal and professional presence with our specialized services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 h-28 w-28 bg-yellow-100 rounded-bl-full -mr-10 -mt-10 z-0 group-hover:bg-yellow-200 transition-colors duration-300"></div>
            <div className="flex items-start gap-5 relative z-10">
              <div className="flex-shrink-0 bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-xl shadow-md text-white transform transition-transform group-hover:rotate-6 group-hover:scale-110 duration-300">
                <FaUserTie className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-yellow-600 transition-colors">Personal Image Enhancement</h3>
                <p className="text-gray-600 mb-4">
                  We offer comprehensive image consultancy services to help you project a positive and professional image. Our team of experts will work with you to create a tailored image strategy that aligns with your personal and professional goals.
                </p>
                <div className="flex items-center text-yellow-600 font-semibold">
                  <span className="mr-2">Learn more</span>
                  <span className="transform transition-transform group-hover:translate-x-2">→</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 h-28 w-28 bg-yellow-100 rounded-bl-full -mr-10 -mt-10 z-0 group-hover:bg-yellow-200 transition-colors duration-300"></div>
            <div className="flex items-start gap-5 relative z-10">
              <div className="flex-shrink-0 bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-xl shadow-md text-white transform transition-transform group-hover:rotate-6 group-hover:scale-110 duration-300">
                <FaHandshake className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-yellow-600 transition-colors">Corporate Image Training</h3>
                <p className="text-gray-600 mb-4">
                  Elevate your team's professional presence with our specialized corporate image workshops. We help organizations establish a consistent and powerful brand image through their employees' appearance, behavior, and communication.
                </p>
                <div className="flex items-center text-yellow-600 font-semibold">
                  <span className="mr-2">Learn more</span>
                  <span className="transform transition-transform group-hover:translate-x-2">→</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 h-28 w-28 bg-yellow-100 rounded-bl-full -mr-10 -mt-10 z-0 group-hover:bg-yellow-200 transition-colors duration-300"></div>
            <div className="flex items-start gap-5 relative z-10">
              <div className="flex-shrink-0 bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-xl shadow-md text-white transform transition-transform group-hover:rotate-6 group-hover:scale-110 duration-300">
                <FaRegSmile className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-yellow-600 transition-colors">Personal Styling</h3>
                <p className="text-gray-600 mb-4">
                  Transform your wardrobe with personalized styling sessions that enhance your natural features and reflect your authentic personality. Learn to dress for success in every situation with confidence.
                </p>
                <div className="flex items-center text-yellow-600 font-semibold">
                  <span className="mr-2">Learn more</span>
                  <span className="transform transition-transform group-hover:translate-x-2">→</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 h-28 w-28 bg-yellow-100 rounded-bl-full -mr-10 -mt-10 z-0 group-hover:bg-yellow-200 transition-colors duration-300"></div>
            <div className="flex items-start gap-5 relative z-10">
              <div className="flex-shrink-0 bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-xl shadow-md text-white transform transition-transform group-hover:rotate-6 group-hover:scale-110 duration-300">
                <FaComments className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-yellow-600 transition-colors">Communication Mastery</h3>
                <p className="text-gray-600 mb-4">
                  Develop powerful communication skills that captivate audiences and build meaningful connections. Our expert coaches will help you refine your verbal and non-verbal communication for maximum impact.
                </p>
                <div className="flex items-center text-yellow-600 font-semibold">
                  <span className="mr-2">Learn more</span>
                  <span className="transform transition-transform group-hover:translate-x-2">→</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-center mt-16"
      >
        <div className="bg-yellow-50 max-w-5xl mx-auto p-8 rounded-xl border border-yellow-200 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Image?</h3>
          <p className="text-lg font-medium text-gray-800 mb-5">
            Join Baatshala's community and begin your path to <span className="text-yellow-600 font-bold">professional excellence!</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = '/book-session';
            }}
            className="px-8 py-3 bg-yellow-500 text-white font-medium rounded-full shadow-lg"
          >
            Book a Consultation
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageConsultancy;
