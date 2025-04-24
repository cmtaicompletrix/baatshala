'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';

export default function Gallery() {
  const [currentTab, setCurrentTab] = useState('photos');

  const photos = [
    {
      src: '/images/Image1.jpeg',
      alt: 'Shailesh Sinha Speaking at Conference',
      caption: 'Speaking at Communication Summit'
    },
    {
      src: '/images/Image2.jpeg',
      alt: 'Workshop Session',
      caption: 'Interactive Workshop with Students'
    },
    {
      src: '/images/Image3.jpeg',
      alt: 'Corporate Training',
      caption: 'Corporate Communication Training'
    },
    {
      src: '/images/Image4.jpeg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image5.jpg',
      alt: 'Award Ceremony',
      caption: 'Receiving Excellence Award'
    },
    {
      src: '/images/Image6.jpg',
      alt: 'Mentoring Session',
      caption: 'One-on-One Mentoring'
    },
    {
      src: '/images/Image7.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image8.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image9.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image10.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image11.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image12.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image13.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image14.jpg', 
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image15.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image16.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image17.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image18.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image19.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image20.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image21.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image22.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image23.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image24.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image25.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image26.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image27.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image31.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image32.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image33.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image34.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image28.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image35.jpeg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
    {
      src: '/images/Image30.jpg',
      alt: 'Media Interview',
      caption: 'Media Interaction Session'
    },
  ];

  const videos = [
    // YouTube Videos
    {
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/taWHxDGQ0sc/maxresdefault.jpg',
      title: 'Traffic Expert of India',
      videoId: 'taWHxDGQ0sc',
      link: 'https://youtu.be/taWHxDGQ0sc'
    },
    {
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/jYcn7zVdPMg/maxresdefault.jpg',
      title: 'Traffic Management Tips',
      videoId: 'jYcn7zVdPMg',
      link: 'https://youtu.be/jYcn7zVdPMg'
    },
    {
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/ERBQJGAbUF8/maxresdefault.jpg',
      title: 'Road Safety Awareness',
      videoId: 'ERBQJGAbUF8',
      link: 'https://youtu.be/ERBQJGAbUF8'
    },
    {
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/xHIJuk4Zbsc/maxresdefault.jpg',
      title: 'Traffic Solutions',
      videoId: 'xHIJuk4Zbsc',
      link: 'https://youtu.be/xHIJuk4Zbsc'
    },
    {
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/lKPo784qviI/maxresdefault.jpg',
      title: 'Traffic Expert Interview',
      videoId: 'lKPo784qviI',
      link: 'https://youtu.be/lKPo784qviI'
    },
    {
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/NlVdpxSqz2I/maxresdefault.jpg',
      title: 'Traffic Management Insights',
      videoId: 'NlVdpxSqz2I',
      link: 'https://www.youtube.com/watch?v=NlVdpxSqz2I'
    },
    {
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/b-_7-yky5pw/maxresdefault.jpg',
      title: 'Road Safety Discussion',
      videoId: 'b-_7-yky5pw',
      link: 'https://www.youtube.com/watch?v=b-_7-yky5pw'
    },
    {
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/N7svXcggZ6w/maxresdefault.jpg',
      title: 'Traffic Solutions Expert',
      videoId: 'N7svXcggZ6w',
      link: 'https://youtu.be/N7svXcggZ6w'
    },
    {
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/cxjBnJ0c4x4/maxresdefault.jpg',
      title: 'Media Appearance',
      videoId: 'cxjBnJ0c4x4',
      link: 'https://youtu.be/cxjBnJ0c4x4'
    },
    {
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/7dwWQdL69Sw/maxresdefault.jpg',
      title: 'Traffic Management Session',
      videoId: '7dwWQdL69Sw',
      link: 'https://youtu.be/7dwWQdL69Sw'
    },
    {
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/IUKhvioxVyA/maxresdefault.jpg',
      title: 'Expert Talk',
      videoId: 'IUKhvioxVyA',
      link: 'https://youtu.be/IUKhvioxVyA'
    },
    {
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/L9uMG7FO0_A/maxresdefault.jpg',
      title: 'Traffic Safety Tips',
      videoId: 'L9uMG7FO0_A',
      link: 'https://youtu.be/L9uMG7FO0_A'
    },
    {
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/4_DJ5-sNkGc/maxresdefault.jpg',
      title: 'Road Safety Expert',
      videoId: '4_DJ5-sNkGc',
      link: 'https://youtu.be/4_DJ5-sNkGc'
    },
    {
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/HavI_sa5ZY8/maxresdefault.jpg',
      title: 'Traffic Management Expertise',
      videoId: 'HavI_sa5ZY8',
      link: 'https://youtu.be/HavI_sa5ZY8'
    },
    {
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/W8ej6DmMG3w/maxresdefault.jpg',
      title: 'Traffic Safety Interview',
      videoId: 'W8ej6DmMG3w',
      link: 'https://youtu.be/W8ej6DmMG3w'
    },
    {
      type: 'youtube',
      thumbnail: 'https://img.youtube.com/vi/k0IFuuSy7c8/maxresdefault.jpg',
      title: 'Road Safety Discussion',
      videoId: 'k0IFuuSy7c8',
      link: 'https://youtu.be/k0IFuuSy7c8'
    },
    // Local Videos
    {
      type: 'local',
      thumbnail: '/images/video-thumb.jpg',
      title: 'Traffic Management Expertise',
      src: '/videos/Video1.mp4'
    },
    {
      type: 'local',
      thumbnail: '/images/video-thumb.jpg',
      title: 'Public Safety Awareness',
      src: '/videos/Video3.mp4'
    },
    {
      type: 'local',
      thumbnail: '/images/video-thumb.jpg',
      title: 'Traffic Solutions Implementation',
      src: '/videos/Video4.mp4'
    },
    {
      type: 'local',
      thumbnail: '/images/video-thumb.jpg',
      title: 'Community Safety Programs',
      src: '/videos/Video5.mp4'
    },
    {
      type: 'local',
      thumbnail: '/images/video-thumb.jpg',
      title: 'Traffic Management Solutions',
      src: '/videos/Video7.mp4'
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
                className="group relative overflow-hidden rounded-xl shadow-lg h-full"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    unoptimized
                  />
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
              >
                <div className="aspect-w-16 aspect-h-9 relative h-[250px]">
                  {video.type === 'youtube' ? (
                    <>
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                        unoptimized
                        onClick={() => window.open(video.link, '_blank')}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <FaYoutube className="w-16 h-16 text-red-600 opacity-90 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full relative group">
                      <video
                        src={video.src}
                        className="w-full h-full object-cover cursor-pointer hover:controls-visible"
                        controls
                        preload="metadata"
                        playsInline
                      >
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-10">
                        <h3 className="text-white text-lg font-medium mb-1">{video.title}</h3>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
} 