'use client';

import { motion } from 'framer-motion';
import { 
  FaChild, 
  FaGraduationCap, 
  FaUserTie, 
  FaUserCog,
  FaHome,
  FaRocket,
  FaLightbulb,
  FaChartLine,
  FaBriefcase,
  FaHandshake,
  FaUserFriends,
  FaStar,
  FaComments,
  FaGem,
  FaAward
} from 'react-icons/fa';

const BenefitSection = () => {
  const beneficiaries = [
    {
      category: "Kids",
      icon: <FaChild className="w-8 h-8" />,
      description: "Developing essential life skills and confidence",
      items: [
        {
          icon: <FaLightbulb className="w-5 h-5" />,
          title: "Creative potential",
          description: "Unlock creativity and imagination for academic excellence."
        },
        {
          icon: <FaComments className="w-5 h-5" />,
          title: "Communication skills",
          description: "Learn to express thoughts and ideas clearly and confidently."
        },
        {
          icon: <FaStar className="w-5 h-5" />,
          title: "Self-confidence",
          description: "Build a strong foundation of self-esteem and positive self-image."
        }
      ]
    },
    {
      category: "Young Adults",
      icon: <FaGraduationCap className="w-8 h-8" />,
      description: "Enhancing employability and career prospects",
      items: [
        {
          icon: <FaBriefcase className="w-5 h-5" />,
          title: "Industry-relevant skills",
          description: "Develop practical skills that employers are actively seeking."
        },
        {
          icon: <FaHandshake className="w-5 h-5" />,
          title: "Networking abilities",
          description: "Learn to build professional relationships that open doors to opportunities."
        },
        {
          icon: <FaChartLine className="w-5 h-5" />,
          title: "Competitive edge",
          description: "Stand out in the job market with exceptional communication abilities."
        }
      ]
    },
    {
      category: "Job Seekers",
      icon: <FaUserTie className="w-8 h-8" />,
      description: "Acquiring skills to land dream jobs",
      items: [
        {
          icon: <FaAward className="w-5 h-5" />,
          title: "Interview mastery",
          description: "Excel in job interviews with confident and articulate communication."
        },
        {
          icon: <FaUserFriends className="w-5 h-5" />,
          title: "Network building",
          description: "Create valuable connections that lead to hidden job opportunities."
        },
        {
          icon: <FaGem className="w-5 h-5" />,
          title: "Personal branding",
          description: "Learn to showcase your unique value proposition to potential employers."
        }
      ]
    },
    {
      category: "Professionals",
      icon: <FaUserCog className="w-8 h-8" />,
      description: "Developing leadership and management skills",
      items: [
        {
          icon: <FaChartLine className="w-5 h-5" />,
          title: "Leadership development",
          description: "Enhance your ability to inspire and guide teams effectively."
        },
        {
          icon: <FaHandshake className="w-5 h-5" />,
          title: "Team management",
          description: "Master the art of clear communication for better team coordination."
        },
        {
          icon: <FaRocket className="w-5 h-5" />,
          title: "Career advancement",
          description: "Accelerate professional growth and unlock new opportunities."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black/5 via-white to-white">
      <div className="container mx-auto px-4 max-w-7xl">
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
            <span className="text-yellow-600 font-medium">Unlock Your Potential</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Who Can{" "}
            <span className="text-yellow-400">Benefit</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            BaatShala's transformative programs are designed to empower individuals from all walks of life, helping them unlock their full potential and achieve their goals.
          </p>
        </motion.div>

        {/* Main content area with alternating layout */}
        <div className="space-y-16">
          {beneficiaries.map((beneficiary, index) => (
            <motion.div 
              key={beneficiary.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Left/Right Icon Area */}
              <div className="w-full md:w-1/3 flex justify-center">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-yellow-400 rounded-3xl blur-xl opacity-20 transform -rotate-6"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-yellow-200">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-3 bg-yellow-400 rounded-xl text-white">
                        {beneficiary.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{beneficiary.category}</h3>
                    </div>
                    <p className="text-gray-600 mb-2">{beneficiary.description}</p>
                  </div>
                </motion.div>
              </div>

              {/* Right/Left Content Area */}
              <div className="w-full md:w-2/3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {beneficiary.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (itemIndex * 0.1) }}
                      whileHover={{ y: -5, scale: 1.03 }}
                      className="bg-white p-5 rounded-lg shadow-md border-t-4 border-yellow-400"
                    >
                      <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500">
                          {item.icon}
                        </div>
                      </div>
                      <h4 className="text-center font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm text-center">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-yellow-50 max-w-3xl mx-auto p-8 rounded-xl border border-yellow-200 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Your Journey Today</h3>
            <p className="text-lg font-medium text-gray-800 mb-5">
              Join BaatShala's community and begin your path to <span className="text-yellow-600 font-bold">Bigger success!</span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-yellow-500 text-white font-medium rounded-full shadow-lg"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitSection; 