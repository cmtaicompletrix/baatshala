'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaYoutube, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default function Gallery() {
  const [currentTab, setCurrentTab] = useState('photos');

  const photos = [
    {
      src: 'https://dummyimage.com/600x400/ffd700/ffffff.jpg&text=Speaking+Event',
      alt: 'Shailesh Sinha Speaking at Conference',
      caption: 'Speaking at Communication Summit 2023'
    },
    {
      src: 'https://dummyimage.com/600x400/ffd700/ffffff.jpg&text=Workshop+Session',
      alt: 'Workshop Session',
      caption: 'Interactive Workshop with Students'
    },
    {
      src: 'https://dummyimage.com/600x400/ffd700/ffffff.jpg&text=Corporate+Training',
      alt: 'Corporate Training',
      caption: 'Corporate Communication Training'
    },
    {
      src: 'https://dummyimage.com/600x400/ffd700/ffffff.jpg&text=Media+Interview',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: 'https://dummyimage.com/600x400/ffd700/ffffff.jpg&text=Award+Ceremony',
      alt: 'Award Ceremony',
      caption: 'Receiving Excellence Award'
    },
    {
      src: 'https://dummyimage.com/600x400/ffd700/ffffff.jpg&text=Mentoring',
      alt: 'Mentoring Session',
      caption: 'One-on-One Mentoring'
    }
  ];

  const videos = [
    {
      thumbnail: 'https://dummyimage.com/600x400/ffd700/ffffff.jpg&text=Public+Speaking+Video',
      title: 'Master the Art of Public Speaking',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '15:24',
      link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      thumbnail: 'https://dummyimage.com/600x400/ffd700/ffffff.jpg&text=Communication+Skills+Video',
      title: 'Communication Skills for Success',
      youtubeId: 'jNQXAC9IVRw',
      duration: '12:45',
      link: 'https://www.youtube.com/watch?v=jNQXAC9IVRw'
    },
    {
      thumbnail: 'https://dummyimage.com/600x400/ffd700/ffffff.jpg&text=Body+Language+Video',
      title: 'Body Language Secrets',
      youtubeId: 'Y8Wp3dafaMQ',
      duration: '18:30',
      link: 'https://www.youtube.com/watch?v=Y8Wp3dafaMQ'
    }
  ];

  const tabVariants = {
    inactive: { opacity: 0.6, scale: 0.95 },
    active: { opacity: 1, scale: 1 }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600">Glimpses of Transformative Moments</p>
        </motion.div>

        <div className="flex justify-center gap-8 mb-12">
          <motion.button
            variants={tabVariants}
            animate={currentTab === 'photos' ? 'active' : 'inactive'}
            onClick={() => setCurrentTab('photos')}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-colors ${
              currentTab === 'photos'
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Photos
          </motion.button>
          <motion.button
            variants={tabVariants}
            animate={currentTab === 'videos' ? 'active' : 'inactive'}
            onClick={() => setCurrentTab('videos')}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-colors ${
              currentTab === 'videos'
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Videos
          </motion.button>
        </div>

        {currentTab === 'photos' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9 relative h-[250px]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    unoptimized
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-lg font-medium">{photo.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {currentTab === 'videos' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {videos.map((video, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => window.open(video.link, '_blank')}
              >
                <div className="aspect-w-16 aspect-h-9 relative h-[250px]">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaYoutube className="w-16 h-16 text-red-600 opacity-90 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white text-lg font-medium mb-1">{video.title}</h3>
                    <p className="text-white/80 text-sm">{video.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
} 