'use client';

import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Pawan Singh",
      role: "Superstar, Bhojpuri Cinema",
      image: "/images/test1.jpeg",
      content: "The professionalism and sincerity I've seen here is unmatched. It's rare to witness such clarity in execution.",
      rating: 5
    },
    {
      name: "Khesari Lal Yadav",
      role: "Singer & Actor",
      image: "/images/test2.jpg",
      content: "This platform brings a new kind of energy to the rental scene. It's bold, fresh, and exactly what people need.",
      rating: 5
    },
    {
      name: "Dinesh Lal Yadav 'Nirahua",
      role: "Actor & MP",
      image: "/images/test3.jpg",
      content: "From design to delivery, every detail has been thought through. You can feel the mission behind it.",
      rating: 5
    },
    {
      name: "Ravi Kishan",
      role: "Actor & Politician",
      image: "/images/test4.jpg",
      content: "Rarely do you see such purpose-driven execution. This is more than a project—it's a movement.",
      rating: 5
    },
    {
      name: "Manoj Tiwari",
      role: "Singer & Politician",
      image: "/images/test5.jpg",
      content: "The sense of belonging and trust it builds is something special. You feel valued instantly.",
      rating: 5
    },
    {
      name: "Gagan Malik",
      role: "Indian Actor",
      image: "/images/test6.jpg",
      content: "Not just smooth to use, but emotionally satisfying too. You feel it's made with passion.",
      rating: 5
    },
    {
      name: "Akash Chopra",
      role: "Cricket commentator and YouTuber",
      image: "/images/test7.jpg",
      content: "Every process, from browsing to booking, feels seamless. That's real user-centric thinking.",
      rating: 5
    },
    {
      name: "Deepdas Gupta",
      role: "Indian Cricketer",
      image: "/images/test8.jpg",
      content: "The first time I used it, I knew it was different. Everything feels personal and thoughtful.",
      rating: 5
    },
    {
      name: "Padamjeet Sherawat",
      role: "Singer",
      image: "/images/test9.jpg",
      content: "A much-needed platform that finally understands local needs. It's built with the community in mind.",
      rating: 5
    },
    {
      name: "Prateek Trivedi",
      role: "Anchor",
      image: "/images/test10.jpg",
      content: "Top-notch experience, and the support team truly listens. That's rare in today's digital space.",
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
    { src: '/images/media1.jpeg', alt: 'Media Partner 1' },
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
    { src: '/images/media15.webp', alt: 'Media Partner 15' },
    { src: '/images/media16.jpg', alt: 'Media Partner 16' },
    { src: '/images/media17.jpg', alt: 'Media Partner 17' },
    { src: '/images/media18.jpg', alt: 'Media Partner 18' },
    { src: '/images/media19.jpg', alt: 'Media Partner 19' },
    { src: '/images/media20.jpg', alt: 'Media Partner 20' },
    { src: '/images/media21.jpg', alt: 'Media Partner 21' }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-2xl font-semibold text-gray-700 mb-4">
          As Featured On
        </h3>
        <p className="text-center text-gray-600 text-lg mb-10">
          Recognized by leading national media houses for insights and expertise.
        </p>
        <div className="testimonials-container p-10 w-full h-full">
          <div className="smooth-scroll w-full h-full">
            {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex items-center justify-center px-8 w-full h-full">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-24"
                  />
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const CombinedSection = () => {
  return (
    <>
      <MediaLogos />
      <TestimonialsSection />
    </>
  );
}

export default CombinedSection; 