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
      content: "I have done a superhit film parallel hero with Shailesh bhai, he is a simple and stylish person and he has devoted his life for Society good.  I wish him all luck in his endeavor.",
      rating: 5
    },
    {
      name: "Dinesh Lal Yadav 'Nirahua",
      role: "Actor & MP",
      image: "/images/test3.jpg",
      content: "Shailesh Sinha is like a brother to me, A very genuine human and always ready for India with his Social work and is a very powerful Speaker and influencer.",
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
      role: "Singer & Member of Parliament",
      image: "/images/test5.jpg",
      content: "One of the most talented person I know and is fit into many roles ,  A good cricketer , brilliant actor and is a very powerful speaker debater, you can catch him on TV channels often and now he is training all. Good wishes to his Baatshala.",
      rating: 5
    },
    {
      name: "Gagan Malik",
      role: "International Influencer, Actor ( Bhagwan Budha, Shri Ram)",
      image: "/images/test6.jpg",
      content: "Shailesh is my very dear friend , A great Anchor a magical speaker , who has the power to enhance any conversation to Top level, Baatshala is great platform,where he will enlighten society through Communication power.",
      rating: 5
    },
    {
      name: "Akash Chopra",
      role: "( Cricket Commentator and Former India Test Player)",
      image: "/images/test7.jpg",
      content: "Shailesh Sinha is my childhood mate, We played for Delhi cricket team together, he is a Seasoned media professional and an impactful speaker trainer, who is ready to serve society at best.",
      rating: 5
    },
    {
      name: "Deep Dasgupta",
      role: "( Cricket Commentator and Former India Wicketkeeper and Batsman)",
      image: "/images/test8.jpg",
      content: "We have spent childhood together in cricket grounds of Delhi, spent moments of struggle,inspiration and style together. He is a complete media guy with loads of experience to share to society for good.",
      rating: 5
    },
    {
      name: "Paramjeet Sehrawat",
      role:"Sports Commentator and Singer",
      image: "/images/test9.jpg",
      content: "A Very dignified person with a majestic appeal, he looks good, speaks good and loves giving back to society. He is a Brilliant Orator and country will benefit great from his experience.",
      rating: 5
    },
    {
      name: "Pratik Trivedi",
      role: "TV Anchor ( Bhaiyaji Kahin)",
      image: "/images/test10.jpg",
      content: "I know Shailesh Sinha for the last 20 years, A Thorough professional and impactful Speaker who is always available for Society.",
      rating: 5
    },
    {
      name: "Chelliah Sellamuthu",
      role: "Director ( NDMC)",
      image: "/images/test11.jpg",
      content: "Shailesh is magic when he speaks, he has so much to give to society in the field of communication,  he is an institute in himself of impactful talks. A great trainer and a Brilliant human being.",
      rating: 5
    },
    {
      name: "Anuj Dayal",
      role: "Delhi Metro Rail Corporation",
      image: "/images/test12.jpg",
      content: "I know Shailesh since 2003 his RED FM days, he is a social person and a prolific speaker, talking on the subject related to traffic safety and management on top Media Channels of India. Wishing him good luck for baatshala.",
      rating: 5
    },
    {
      name: "Anil Chaudhary",
      role: "International Cricket Umpire",
      image: "/images/test13.jpg",
      content: "Shailesh is a Brilliant Speaker and his actual power is his communication skills and he is going to give great to society with his knowledge of communication through trainings and art of talks delivery.",
      rating: 5
    },
    {
      name: "Satyaprakash Krishna",
      role: "( Commentator and Sattu Bhaiya of MS Dhoni)",
      image: "/images/test14.jpg",
      content: "One sweetest and most courteous person I know is Shailesh Bhaiya. A Fabulous charismatic human ,who talks brilliant and is always ready to do good to society.",
      rating: 5
    },
    {
      name: "Akshara Singh",
      role: "Regionals Films Actor",
      image: "/images/test15.jpg",
      content: "Shailesh Sinha is doing great to society through his Organization,  I wish him all the best for his future endeavours.",
      rating: 5
    },
    {
      name: "M.P. Singh",
      role: "( Cricket Coach MS Dhoni)",
      image: "/images/test16.jpg",
      content: "He is a Sportsman,  an Activist and a superb Orator, who is always ready with infectious  energy of sophistication and powerful communication. He has loads to give to people in the field of Art of Talking.",
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