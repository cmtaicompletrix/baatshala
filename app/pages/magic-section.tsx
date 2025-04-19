'use client';

import { motion } from 'framer-motion';
import { 
  FaLightbulb,
  FaHandshake,
  FaChartLine,
} from 'react-icons/fa6';

const MagicSection = () => {
  const magicPoints = [
    {
      title: "Clarity & Connection",
      icon: <FaLightbulb className="w-8 h-8" />,
      description: "Express yourself with crystal clarity and build meaningful connections",
      points: [
        "Clear and concise expression",
        "Active listening skills",
        "Emotional intelligence"
      ]
    },
    {
      title: "Growth & Success",
      icon: <FaChartLine className="w-8 h-8" />,
      description: "Accelerate your personal and professional growth through effective communication",
      points: [
        "Career advancement",
        "Leadership development",
        "Goal achievement"
      ]
    },
    {
      title: "Impact & Influence",
      icon: <FaHandshake className="w-8 h-8" />,
      description: "Create lasting impact and positive influence in your relationships",
      points: [
        "Persuasive communication",
        "Conflict resolution",
        "Team collaboration"
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
            <span className="text-yellow-600 font-medium">Transform Your Communication</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            The Magic of{" "}
            <span className="text-yellow-400">Communication</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Discover how mastering communication can transform your life and create lasting positive change.
          </p>
        </motion.div>

        {/* Magic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {magicPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 12 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 bg-yellow-400 rounded-xl text-white shadow-lg mb-6 inline-block"
                >
                  {point.icon}
                </motion.div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{point.title}</h3>
                <p className="text-gray-600 mb-6">{point.description}</p>

                {/* Points */}
                <div className="space-y-4">
                  {point.points.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 }}
                      className="flex items-center gap-3 group/item"
                    >
                      <div className="h-2 w-2 rounded-full bg-yellow-400" />
                      <p className="text-gray-700 group-hover/item:text-gray-900 transition-colors">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MagicSection; 