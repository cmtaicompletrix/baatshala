'use client';

import { motion } from 'framer-motion';
import { 
  FaUserGear, 
  FaPeopleArrows, 
  FaEarthAmericas, 
  FaGraduationCap,
  FaBrain,
  FaHeartCrack,
  FaComments,
  FaHandshakeSimpleSlash,
  FaEyeLowVision,
  FaVolumeHigh,
  FaGlobe,
  FaMicrochip,
  FaEarListen,
  FaCommentSlash,
  FaCircleXmark
} from 'react-icons/fa6';

const BarriersSection = () => {
  const barriers = [
    {
      category: "Personal Barriers",
      icon: <FaUserGear className="w-8 h-8" />,
      description: "Individual challenges that affect communication ability",
      items: [
        {
          icon: <FaBrain className="w-5 h-5" />,
          title: "Lack of self-awareness",
          description: "Not understanding one's own emotions, needs, and motivations."
        },
        {
          icon: <FaHeartCrack className="w-5 h-5" />,
          title: "Emotional baggage",
          description: "Unresolved emotions, biases, or past experiences that can affect communication."
        },
        {
          icon: <FaComments className="w-5 h-5" />,
          title: "Different communication styles",
          description: "Variations in personality, temperament, and communication preferences."
        }
      ]
    },
    {
      category: "Interpersonal Barriers",
      icon: <FaPeopleArrows className="w-8 h-8" />,
      description: "Challenges that arise between people during communication",
      items: [
        {
          icon: <FaHandshakeSimpleSlash className="w-5 h-5" />,
          title: "Lack of empathy",
          description: "Difficulty understanding and relating to others' perspectives and emotions."
        },
        {
          icon: <FaEyeLowVision className="w-5 h-5" />,
          title: "Different perspectives",
          description: "Variations in experiences, values, and beliefs that can lead to misunderstandings."
        },
        {
          icon: <FaCircleXmark className="w-5 h-5" />,
          title: "Power dynamics",
          description: "Imbalances in power, authority, or status that can affect communication."
        }
      ]
    },
    {
      category: "Environmental Barriers",
      icon: <FaEarthAmericas className="w-8 h-8" />,
      description: "External factors that hinder effective communication",
      items: [
        {
          icon: <FaVolumeHigh className="w-5 h-5" />,
          title: "Noise and distractions",
          description: "Physical or environmental factors that can disrupt communication."
        },
        {
          icon: <FaGlobe className="w-5 h-5" />,
          title: "Cultural differences",
          description: "Variations in cultural norms, values, and communication styles."
        },
        {
          icon: <FaMicrochip className="w-5 h-5" />,
          title: "Technology issues",
          description: "Problems with communication technology, such as poor internet connectivity."
        }
      ]
    },
    {
      category: "Skill-Based Barriers",
      icon: <FaGraduationCap className="w-8 h-8" />,
      description: "Lack of essential communication skills and abilities",
      items: [
        {
          icon: <FaEarListen className="w-5 h-5" />,
          title: "Lack of active listening",
          description: "Not fully engaging with the speaker or message."
        },
        {
          icon: <FaCommentSlash className="w-5 h-5" />,
          title: "Poor articulation",
          description: "Difficulty expressing thoughts, ideas, or needs clearly."
        },
        {
          icon: <FaCircleXmark className="w-5 h-5" />,
          title: "Inadequate feedback",
          description: "Not providing or receiving constructive feedback."
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
            <span className="text-yellow-600 font-medium">Communication Challenges</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Why People Can't{" "}
            <span className="text-yellow-400">Communicate Properly</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            There are many reasons why people may struggle to communicate effectively. Understanding these barriers is the first step to overcoming them.
          </p>
        </motion.div>

        {/* Barriers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {barriers.map((barrier, index) => (
            <motion.div
              key={barrier.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 12 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-3 bg-yellow-400 rounded-xl text-white"
                >
                  {barrier.icon}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{barrier.category}</h3>
                  <p className="text-gray-600 text-sm mt-1">{barrier.description}</p>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-6 pl-4 border-l-2 border-yellow-200">
                {barrier.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.1 }}
                    className="group relative pl-6"
                  >
                    <div className="absolute left-[-1.6rem] top-3 w-3 h-3 rounded-full bg-yellow-400 group-hover:scale-150 transition-transform duration-300" />
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-yellow-500">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BarriersSection; 