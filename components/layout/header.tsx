'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Home', 
      href: '#home',
      description: 'Welcome to Baat Shala'
    },
    { 
      name: 'About Shailesh', 
      href: '#about',
      description: 'Media Professional & Traffic Expert'
    },
    { 
      name: 'Success Stories', 
      href: '#impact',
      description: 'Real Life Communication Success'
    },
    { 
      name: 'Common Problems', 
      href: '#barriers',
      description: 'Communication Challenges'
    },
    { 
      name: 'Benefits', 
      href: '#power',
      description: 'Power of Good Communication'
    },
    { 
      name: 'Transform', 
      href: '#magic',
      description: 'Life-Changing Communication Skills'
    },
    { 
      name: 'Reviews', 
      href: '#testimonials',
      description: 'Student Experiences'
    }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href.replace('#', ''));
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-20">
          {/* Mobile Menu Button */}
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 p-2 text-gray-600 hover:text-yellow-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>

          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-start md:ml-4">
            <motion.div 
              className="w-[150px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/" className="flex items-center">
                <div className="relative w-[150px] h-[130px]">
                  <Image
                    src="/images/logo.png"
                    alt="Baat Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 px-4">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={`block px-2 py-1.5 transition-all ${
                      activeSection === item.href.replace('#', '')
                      ? 'text-yellow-600 font-medium'
                      : 'text-black hover:text-yellow-600'
                    }`}
                  >
                    <span className="text-[15px] font-medium whitespace-nowrap">{item.name}</span>
                  </Link>
                  {/* Active Indicator */}
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform origin-left transition-transform duration-200 ${
                    activeSection === item.href.replace('#', '')
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </motion.div>
              ))}
            </div>
          </nav>

          {/* Join Now Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:block flex-shrink-0"
          >
            <button onClick={() => window.location.href = '#book-session'} className="bg-yellow-500 text-white px-6 py-2 rounded-md text-[15px] font-medium hover:bg-yellow-600 transition-colors whitespace-nowrap">
              Join Now
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t overflow-hidden bg-white"
            >
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className={`block px-4 py-2.5 transition-all ${
                        activeSection === item.href.replace('#', '')
                        ? 'text-yellow-600 bg-yellow-50 font-medium'
                        : 'text-gray-600 hover:text-yellow-600 hover:bg-yellow-50'
                      }`}
                    >
                      <span className="text-[15px] font-medium">{item.name}</span>
                      <span className="block text-sm text-gray-500 mt-0.5">{item.description}</span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  className="px-4 pt-2"
                >
                  <button onClick={() => window.location.href = '#book-session'} className="w-full bg-yellow-500 text-white px-6 py-3 rounded-md text-[15px] font-medium hover:bg-yellow-600 transition-colors">
                    Join Now
                  </button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header; 