'use client';

import { motion } from 'framer-motion';

const PowerSection = () => {
  const impacts = [
    {
      category: 'Personal Impact',
      icon: '💪',
      color: 'from-purple-50 to-white',
      items: [
        {
          title: 'Increased Confidence',
          description: 'Boost self-esteem and personal confidence through effective communication'
        },
        {
          title: 'Improved Relationships',
          description: 'Build deeper, more meaningful connections with others'
        },
        {
          title: 'Enhanced Career Prospects',
          description: 'Advance professionally through powerful communication skills'
        }
      ]
    },
    {
      category: 'Team Impact',
      icon: '🤝',
      color: 'from-blue-50 to-white',
      items: [
        {
          title: 'Improved Collaboration',
          description: 'Foster teamwork, creativity, and effective problem-solving'
        },
        {
          title: 'Increased Productivity',
          description: 'Work more efficiently through clear and effective communication'
        },
        {
          title: 'Better Decision-Making',
          description: 'Make informed decisions through powerful communication'
        }
      ]
    },
    {
      category: 'Organizational Impact',
      icon: '🏢',
      color: 'from-green-50 to-white',
      items: [
        {
          title: 'Enhanced Reputation',
          description: 'Build trust and credibility with stakeholders'
        },
        {
          title: 'Customer Satisfaction',
          description: 'Improve service quality and customer relationships'
        },
        {
          title: 'Strong Brand Image',
          description: 'Develop a powerful and consistent brand identity'
        }
      ]
    },
    {
      category: 'Societal Impact',
      icon: '🌍',
      color: 'from-rose-50 to-white',
      items: [
        {
          title: 'Drive Social Change',
          description: 'Inspire positive change and promote social justice'
        },
        {
          title: 'Education & Awareness',
          description: 'Spread knowledge and raise awareness on important issues'
        },
        {
          title: 'Community Building',
          description: 'Create stronger, more connected communities'
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

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
          {/* Section Header */}
          <motion.div 
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-500/10"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-yellow-600 font-medium">Power of Communication</span>
          </motion.div>
          <motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            The Impact of{" "}
            <span className="text-yellow-400">Powerful Communication</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Discover how mastering communication can transform every aspect of your life and create lasting positive change.
          </p>
        </motion.div>
        

          {/* Impact Grid */}
          <div className="space-y-2">
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.category}
                variants={itemVariants}
                className={`bg-gradient-to-r ${impact.color} rounded-2xl p-6 md:p-8 transform hover:scale-[1.02] transition-transform`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-2xl">{impact.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{impact.category}</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {impact.items.map((item) => (
                    <div
                      key={item.title}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                    >
                      <h4 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default PowerSection; 