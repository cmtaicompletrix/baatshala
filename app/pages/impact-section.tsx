'use client';

import { motion } from 'framer-motion';
import { 
  FaUserShield, 
  FaBriefcase, 
  FaHeart,
  FaChartLine,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaComments,
  FaGears,
  FaStar,
  FaRocket,
  FaBrain
} from 'react-icons/fa6';

const ImpactSection = () => {
  const impacts = [
    {
      category: "Personal Life",
      icon: <FaUserShield className="w-8 h-8" />,
      description: "Transform your personal relationships and self-growth",
      points: [
        {
          icon: <FaHeart />,
          title: "Better Relationships",
          description: "Build stronger connections with family and friends"
        },
        {
          icon: <FaBrain />,
          title: "Self Development",
          description: "Enhance emotional intelligence and personal growth"
        },
        {
          icon: <FaLightbulb />,
          title: "Clear Expression",
          description: "Express your thoughts and feelings effectively"
        }
      ]
    },
    {
      category: "Professional Life",
      icon: <FaBriefcase className="w-8 h-8" />,
      description: "Accelerate your career growth and leadership",
      points: [
        {
          icon: <FaRocket />,
          title: "Career Growth",
          description: "Fast-track your professional development"
        },
        {
          icon: <FaUsers />,
          title: "Team Leadership",
          description: "Lead and inspire teams effectively"
        },
        {
          icon: <FaChartLine />,
          title: "Performance",
          description: "Improve workplace productivity and success"
        }
      ]
    },
    {
      category: "Social Life",
      icon: <FaHandshake className="w-8 h-8" />,
      description: "Enhance your social connections and influence",
      points: [
        {
          icon: <FaComments />,
          title: "Social Skills",
          description: "Navigate social situations with confidence"
        },
        {
          icon: <FaGears />,
          title: "Networking",
          description: "Build and maintain valuable connections"
        },
        {
          icon: <FaStar />,
          title: "Social Impact",
          description: "Make a positive difference in your community"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50/50 via-white to-yellow-50/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-block mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="bg-yellow-400/10 text-yellow-600 font-semibold px-6 py-2 rounded-full border-2 border-yellow-400/20 shadow-sm">
              Life-Changing Impact
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-yellow-600 to-gray-900 bg-clip-text text-transparent">
            Transform Your Life Journey
          </h2>
          <p className="text-gray-600 text-xl max-w-4xl mx-auto">
            Discover how powerful communication skills can revolutionize every aspect of your life.
          </p>
        </motion.div>

        {/* Impact Cards - New Layout */}
        <div className="relative">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 }}
              className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Category Card */}
              <div className="w-full md:w-1/3">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-yellow-100 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/50 via-yellow-50/30 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl text-white shadow-lg">
                        {impact.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {impact.category}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {impact.description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Points Grid */}
              <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {impact.points.map((point, pointIndex) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pointIndex * 0.2 }}
                    className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-yellow-50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-xl text-yellow-600 group-hover:bg-yellow-400 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                        {point.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                          {point.title}
                        </h4>
                        <p className="text-gray-600 text-sm mt-1">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-20"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-400/10 via-yellow-50 to-white rounded-3xl p-10  border-yellow-200">
            <div className="absolute inset-0 bg-yellow-100/20 rounded-3xl blur-2xl transform -rotate-3" />
            <div className="relative">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Overall Impact on Your Life
              </h3>
              <p className="text-gray-700 text-lg text-center leading-relaxed">
                Master the art of communication and unlock your full potential in every aspect of life. 
                From building meaningful relationships to achieving professional success, 
                your journey to becoming an effective communicator starts here.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;