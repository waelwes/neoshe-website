import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-6xl font-acumin-pro font-medium text-neoshe mb-6" style={{ letterSpacing: '0.05em' }}>
            From Nature’s Heart to Your Skin
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 mb-8 font-light max-w-2xl mx-auto md:mx-0"
            >
              Organic skincare that loves your skin back
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-neoshe hover:bg-neoshe-dark text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Discover Our Collection
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 md:order-2"
          >
            <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-neoshe.jpg"
                alt="NEOSHE - Radiant, healthy skin showcasing our organic skincare results"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/20 backdrop-blur-md border border-white/30 text-neoshe p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl font-medium mb-2">100% Organic</h3>
              <p className="text-sm opacity-90">Certified ingredients</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
