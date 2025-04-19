'use client';

import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      content: "The communication training transformed our team dynamics. We've seen a 40% increase in project completion rates.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Team Lead, InnovateCo",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      content: "Incredible impact on our client relationships. The strategies are practical and effective.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "HR Director, GlobalCorp",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      content: "Best investment in our team's development. The results were immediate and lasting.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Marketing Manager",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      content: "The communication framework has revolutionized how we approach client presentations.",
      rating: 5
    },
    {
      name: "Lisa Zhang",
      role: "Product Owner",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      content: "Our team collaboration improved dramatically after implementing these techniques.",
      rating: 5
    },
    {
      name: "David Brown",
      role: "Sales Director",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      content: "The ROI on this training has been exceptional. Our sales team's performance is up 45%.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black/5 via-white to-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div 
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-500/10"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-yellow-600 font-medium">What People Say</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Trusted by <span className="text-yellow-400">Industry Leaders</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            See how our communication strategies have transformed businesses and careers across industries.
          </p>
        </motion.div>

        {/* Testimonials Smooth Scroll */}
        <div className="testimonials-container p-10">
          <div className="smooth-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[320px] bg-white rounded-xl p-4 shadow-md mx-3"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-base text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">{testimonial.content}</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 