'use client';

import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Pawan Singh Ji",
      role: "Superstar, Bhojpuri Cinema",
      image: "/images/test1.jpeg",
      content: "Rarely do you come across someone who works with such honesty and dedication. Truly impressive.",
      rating: 5
    },
    {
      name: "Khesari Lal Yadav Ji",
      role: "Singer & Actor",
      image: "/images/test2.jpg",
      content: "The kind of innovative thinking here is absolutely next level. Everything feels fresh and well-thought-out.",
      rating: 5
    },
    {
      name: "Dinesh Lal Yadav 'Nirahua' Ji",
      role: "Actor & MP",
      image: "/images/test3.jpg",
      content: "When you see the level of effort and detail, you just know something big is being built.",
      rating: 5
    },
    {
      name: "Ravi Kishan Ji",
      role: "Actor & Politician",
      image: "/images/test4.jpg",
      content: "Honesty, hard work, and vision – it's a rare combination, and it's all here.",
      rating: 5
    },
    {
      name: "Manoj Tiwari Ji",
      role: "Singer & Politician",
      image: "/images/test5.jpg",
      content: "Feels less like a professional connection and more like working with family. That's the vibe.",
      rating: 5
    },
    {
      name: "Ritesh Pandey Ji",
      role: "Playback Singer",
      image: "/images/test6.jpg",
      content: "You can tell it's done with heart. There's a special kind of warmth in everything here.",
      rating: 5
    },
    {
      name: "Pradeep Pandey 'Chintu' Ji",
      role: "Actor",
      image: "/images/test7.jpg",
      content: "There's a perfect balance in everything—timing, quality, and professionalism. Really admirable.",
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

const MediaLogos = () => {
  const logos = [
    { src: '/images/media1.jpeg', alt: 'Media Partner 1' }, // Assuming media1 is jpeg
    { src: '/images/media2.jpeg', alt: 'Media Partner 2' },
    { src: '/images/media3.jpeg', alt: 'Media Partner 3' },
    { src: '/images/media4.jpeg', alt: 'Media Partner 4' },
    { src: '/images/media5.png', alt: 'Media Partner 5' },
    { src: '/images/media6.jpg', alt: 'Media Partner 6' },
    { src: '/images/media7.png', alt: 'Media Partner 7' },
    { src: '/images/media8.png', alt: 'Media Partner 8' },
    { src: '/images/media9.jpg', alt: 'Media Partner 9' },
    { src: '/images/media10.png', alt: 'Media Partner 10' },
    { src: '/images/media11.webp', alt: 'Media Partner 11' },
    { src: '/images/media12.png', alt: 'Media Partner 12' },
    { src: '/images/media13.png', alt: 'Media Partner 13' },
    { src: '/images/media14.jpg', alt: 'Media Partner 14' },
    
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-2xl font-semibold text-gray-700 mb-4">
          As Featured On
        </h3>
        <p className="text-center text-gray-600 text-lg mb-10">
          Recognized by leading national media outlets for insights and expertise.
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="mx-8 flex-shrink-0">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-12 md:h-16 object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CombinedSection = () => {
  return (
    <>
      <MediaLogos />
      <TestimonialsSection />
    </>
  );
}

export default CombinedSection; 