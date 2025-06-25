'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden pb-16">
      {/* Yellow background - extends to half of the video */}
      <div className="absolute top-0 left-0 right-0 h-[85%] bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 -left-20 w-60 h-60 bg-yellow-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        
        {/* Wave curve at the bottom of yellow background */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1140 420" className="w-full">
            <path fill="white" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,170.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* White background for the bottom part */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-white z-0"></div>

      {/* Content - in the top half */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="flex flex-col items-center justify-center text-center text-gray-900">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-gray-800/30 bg-gray-900/10 text-gray-800 text-sm font-medium mb-6">
              Transform Your Communication Skills
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
              Master the Art of <span className="text-white">Communication</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
              Years of experience crunched into easy and risk-free courses designed to elevate your communication skills
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <button 
              onClick={() => window.location.href = '#courses'} 
              className="bg-gray-900 hover:bg-gray-800 text-yellow-400 px-8 py-3.5 rounded-full text-base font-medium transition-all transform hover:scale-105 shadow-lg shadow-gray-800/20"
            >
              Get Started
            </button>
            <button 
              onClick={() => window.location.href = '#about'} 
              className="border-2 border-gray-800 hover:border-gray-900 text-gray-900 px-8 py-3.5 rounded-full text-base font-medium transition-all hover:bg-gray-900/10"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Video section - positioned to overlap the wave */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="container mx-auto px-4 mt-12 md:mt-16 mb-10 flex justify-center relative z-20"
      >
        <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
          <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-2xl overflow-hidden">
            {/* Video element */}
            <video 
              ref={videoRef}
              className="w-full h-full object-cover cursor-pointer"
              poster="/images/poster.png"
              preload="metadata"
              autoPlay
              loop
              playsInline
              controls
            >
              <source src="/baatshala.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 