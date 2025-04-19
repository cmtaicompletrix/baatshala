'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';

export default function SocialFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="w-6 h-6" />,
      link: 'https://wa.me/+919876543210', // Replace with actual WhatsApp number
      color: 'bg-green-500 hover:bg-green-600',
      delay: 0.4
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-6 h-6" />,
      link: 'https://instagram.com/baatshala', // Replace with actual Instagram handle
      color: 'bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-700 hover:from-yellow-600 hover:via-pink-700 hover:to-purple-800',
      delay: 0.3
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      link: 'https://linkedin.com/company/baatshala', // Replace with actual LinkedIn page
      color: 'bg-blue-600 hover:bg-blue-700',
      delay: 0.2
    },
    {
      name: 'Facebook',
      icon: <FaFacebook className="w-6 h-6" />,
      link: 'https://facebook.com/baatshala', // Replace with actual Facebook page
      color: 'bg-blue-500 hover:bg-blue-600',
      delay: 0.1
    }
  ];

  const buttonVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.5
    },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        y: { type: "spring", stiffness: 300, damping: 24 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
        delay: delay
      }
    }),
    hover: {
      scale: 1.15,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col gap-3 mb-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 rounded-full ${social.color} text-white flex items-center justify-center shadow-lg`}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
                whileTap="tap"
                custom={social.delay}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white flex items-center justify-center shadow-lg"
        whileHover={{ 
          scale: 1.15,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? { 
          rotate: [0, 45, 0],
          transition: { duration: 0.5 }
        } : { rotate: 0 }}
      >
        <FaEnvelope className="w-6 h-6" />
      </motion.button>
    </div>
  );
} 