"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "Horizon Towers",
      location: "Miami, FL",
      image: "/images/project1.jpg"
    },
    {
      title: "The Arboretum",
      location: "Portland, OR",
      image: "/images/project2.jpg"
    },
    {
      title: "Marina Lofts",
      location: "Chicago, IL",
      image: "/images/project3.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <motion.section
      className="h-screen relative overflow-hidden bg-stone-900"
    >
      {/* Animated Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={projects[currentSlide].image}
              alt={projects[currentSlide].title}
              fill
              className="object-cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Architectural Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-amber-400/30"
            initial={{
              opacity: 0,
              rotate: Math.random() * 360,
              scale: 0.8
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              transition: {
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-end pb-20 md:pb-32 lg:items-center lg:pb-0">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <span className="block">Umason</span>
                <span className="block">Studio</span>
              </motion.h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="h-px bg-amber-400 mb-6"
              />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <p className="text-xl text-stone-300 mb-8">
                  Spatial Alchemist | Since 2015
                </p>
                <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-all duration-300 flex items-center group">
                  View Portfolio
                  <svg 
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>

            {/* Project Indicator */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="max-w-md ml-auto bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <div className="flex items-center mb-4">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full mx-1 transition-all ${currentSlide === index ? "bg-amber-400 w-6" : "bg-white/30"}`}
                    />
                  ))}
                </div>
                <motion.h3 
                  key={`title-${currentSlide}`}
                  className="text-2xl text-white mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {projects[currentSlide].title}
                </motion.h3>
                <motion.p
                  key={`location-${currentSlide}`}
                  className="text-stone-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {projects[currentSlide].location}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Prompt */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut"
            }}
          >
            <svg width="30" height="50" viewBox="0 0 30 50">
              <path
                d="M15 1V15M15 15L20 10M15 15L10 10"
                stroke="#f59e0b"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <motion.path
                d="M15 25V35M15 25L20 30M15 25L10 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: 0.5
                }}
              />
            </svg>
          </motion.div>
          <motion.p
            className="text-sm text-stone-400 mt-2"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{
              repeat: Infinity,
              duration: 3
            }}
          >
            Scroll to explore
          </motion.p>
        </div>
      </motion.div>
    </motion.section>
  );
}