'use client';

import { 
  FaRoad, 
  FaFilm, 
  FaUserTie,
  FaChartLine,
  FaTrophy,
  FaUsers,
  FaQuoteLeft,
  FaComments
} from 'react-icons/fa6';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface CountingNumberProps {
  value: string;
  duration?: number;
}

const CountingNumber = ({ value, duration = 2000 }: CountingNumberProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace('+', ''));
      const incrementTime = duration / end;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return (
    <motion.div 
      ref={ref}
      className="text-4xl font-bold text-yellow-400 mb-3"
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {count}+
    </motion.div>
  );
};

const AboutSection = () => {
  const keyAchievements = [
    {
      number: "25+",
      label: "Years Experience",
      description: "In Traffic Management"
    },
    {
      number: "1200+",
      label: "Media Appearances",
      description: "As Traffic Expert"
    },
    {
      number: "118+",
      label: "Projects Completed",
      description: "Across Industries"
    },
    {
      number: "58+",
      label: "Awards Received",
      description: "For Excellence"
    }
  ];

  const expertise = [
    {
      icon: <FaUserTie className="w-8 h-8" />,
      title: "Media Professional",
      points: [
        "Radio Jockey & Voice Over Artist",
        "Regular Appearances on Aajtak, NDTV, CNN News 18, Zee News, Republic TV, News 24, Times Now, India TV, ABP News, etc.",
        "Consultant & Speaker on National Issues"
      ]
    },
    {
      icon: <FaComments className="w-8 h-8" />,
      title: "Communication Coach",
      points: [
        "Expert Coaching & Media Training",
        "One-on-One & Group Sessions",
        "Public Speaking & Presentation Skills",
        "25+ Years Experience | Diverse Clientele"
      ]
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Business & Social Leadership",
      points: [
        "Strategic Advisor to Organizations",
        "NGO Founder - The Traffic People Foundation",
        "Public Orientation Advocate & Road Safety Education",
        "Impactful Community Initiatives"
      ]
    }
  ];

  const achievements = [
    {
      category: "Sports Excellence",
      icon: <FaTrophy className="w-6 h-6" />,
      items: [
        "National Level Cricketer - Delhi Under 16 & 19",
        "Celebrity Cricket League (2014) Player - Bhojpuri Dabanggs owned by Salman Khan",
        "Maruti Suzuki Autocross National Racing Champion 2007-8"
      ]
    },
    {
      category: "Entertainment",
      icon: <FaFilm className="w-6 h-6" />,
      items: [
        "Lead Actor in Regional Films",
        "Parallel Lead with Manoj Tiwari Ji, Ravi Kishan Ji, Kesari Lal Yadav Ji, and many more",
        "Television Host and Presenter"
      ]
    },
    {
      category: "Social Impact",
      icon: <FaUsers className="w-6 h-6" />,
      items: [
        "Road Safety Education Programs",
        "Traffic Awareness Campaigns",
        "Community Safety Initiatives",
        "Environmental Conservation Initiatives"
      ]
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const slideIn = (direction: 'left' | 'right') => ({
    initial: { x: direction === 'left' ? -50 : 50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, type: "spring", bounce: 0.4 }
  });

  return (
    <section className="py-20 bg-gradient-to-b from-black/5 via-white to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-500/10"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-yellow-600 font-medium">Know More About</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Meet <span className="text-yellow-400">Shailesh Sinha</span>
          </h2>
        </motion.div>

        {/* Profile Section with animations */}
        <motion.div 
          className="mb-20 rounded-2xl p-8 bg-gradient-to-br from-gray-50 to-yellow-50/50 border border-yellow-100"
          {...scaleIn}
        >
          <div className="space-y-12">
            {/* First Row - Bio and Image */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="text-yellow-500 mb-6">
                  <FaQuoteLeft className="w-10 h-10 opacity-30" />
                </div>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg">
                    An Economics Graduate from the prestigious Hansraj College, Delhi University, Shailesh Sinha has carved a unique path combining his passion for communication, traffic management, and social impact.
                  </p>
                  <p className="text-lg">
                    Known as the "Traffic Guru," he pioneered the Traffic News System in India and has been a prominent voice in road safety for over 24 years. His innovative approach to traffic management and road safety has earned him recognition across national media channels and many other platforms.
                  </p>
                  <p className="text-lg">
                    Beyond his professional achievements, Shailesh is a multifaceted personality excelling in sports as a National Level Cricketer and Maruti Suzuki Autocross Car Racing National Champion. His entertainment career includes notable roles in regional films alongside Manoj Tiwari Ji.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br backgroundI order-1 md:order-2">
                <img 
                  src="/images/ImageMain.jpg"
                  alt="Shailesh Sinha"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Second Row - Professional Excellence and Media Background */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border border-yellow-100">
                <h4 className="text-2xl font-semibold text-gray-900 mb-6">Professional Excellence</h4>
                <p className="text-lg text-gray-600 mb-8">
                  With over 25 years of experience in the field of communication, working with Top Media Houses like The Times Of India, TV Today Group, Aajtak, Mid Day Multimedia and many more, Shailesh Sinha has established himself as a trusted expert in helping individuals and organizations achieve their goals through effective communication and presentation.
                </p>
                <div className="space-y-6">
                  <div className="bg-white/80 p-6 rounded-xl border border-yellow-100 shadow-sm hover:shadow-md transition-shadow">
                    <h5 className="text-yellow-600 font-semibold mb-4 text-lg">Expertise & Services</h5>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Communication Coaching & Media Training</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>One-on-One & Group Training Sessions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Media Interview Preparation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Public Speaking & Presentation Skills</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  A Thorough Media Professional, providing his services to Top Media Channels and Houses as a Consultant and Speaker on Various National Issues for the last 18+ years. His Professional Career in the Field of Road Safety & social welfare is also impacting India positively through meaningful presentations and deep communication.
                </p>
                <div className="bg-white/80 p-6 rounded-xl border border-yellow-100 shadow-sm hover:shadow-md transition-shadow mt-8">
                  <h5 className="text-yellow-600 font-semibold mb-4 text-lg">Key Strengths</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>25+ Years of Industry Experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>Diverse Corporate & Government Clientele</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>Expert in Communication Strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>Proven Track Record of Success</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Achievements with animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {keyAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-yellow-50/50 rounded-2xl p-8 text-center border border-yellow-100 hover:border-yellow-300 transition-all hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <CountingNumber 
                value={achievement.number} 
                duration={2000 + (index * 500)} 
              />
              <div className="font-semibold text-gray-900 mb-2">{achievement.label}</div>
              <div className="text-gray-600">{achievement.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Areas of Expertise with animations */}
        <motion.div className="mb-20" {...fadeInUp}>
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-500/10">
              <span className="text-yellow-600 font-medium">What I Do Best</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Areas of Expertise</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {expertise.map((area, index) => (
              <motion.div
                key={index} 
                className="group bg-gradient-to-br from-gray-50 to-yellow-50/50 rounded-2xl p-8 border border-yellow-100 hover:border-yellow-300 transition-all hover:shadow-md h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-yellow-500 mr-4 group-hover:scale-110 transition-transform">
                    {area.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">{area.title}</h4>
                </div>
                <ul className="space-y-3">
                  {area.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Achievements Timeline */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-500/10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-yellow-600 font-medium">My Journey</span>
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-900">
              Remarkable <span className="text-yellow-400">Achievements</span>
            </h3>
          </motion.div>
          
          {/* Timeline Style Achievements */}
          <div className="relative max-w-5xl mx-auto">
            {/* Animated Vertical Line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-yellow-400"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
            
            {/* Achievement Items */}
            <div className="space-y-24">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative">
                  {/* Timeline Node */}
                  <motion.div 
                    className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div className="w-6 h-6 bg-yellow-400 rounded-full border-4 border-white shadow-md">
                      <div className="w-full h-full rounded-full bg-yellow-400 animate-ping opacity-20" />
                    </div>
                  </motion.div>

                  {/* Content Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Content Side */}
                    <motion.div 
                      className={index % 2 === 0 ? 'md:pr-16' : 'md:col-start-2 md:pl-16'}
                      {...slideIn(index % 2 === 0 ? 'left' : 'right')}
                    >
                      {/* Achievement Card */}
                      <motion.div 
                        className="bg-white rounded-2xl p-8 shadow-sm border border-yellow-100 hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      >
                        {/* Title and Icon */}
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="text-2xl font-bold text-gray-900">{achievement.category}</h4>
                          <motion.div 
                            className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <div className="text-yellow-400">
                              {achievement.icon}
                            </div>
                          </motion.div>
                        </div>

                        {/* Achievement List */}
                        <ul className="space-y-4">
                          {achievement.items.map((item, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.2, duration: 0.5 }}
                            >
                              <span className="text-yellow-400 mr-3 text-lg">•</span>
                              <span className="text-gray-600 text-lg">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      {/* Year Tag */}
                      <motion.div 
                        className="mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <div className="inline-flex items-center px-4 py-1 bg-yellow-50 rounded-full border border-yellow-100">
                          <span className="text-yellow-600 font-medium text-lg">
                            {index === 0 ? '2007-2008' : index === 1 ? '2008-Present' : 'Ongoing'}
                          </span>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 