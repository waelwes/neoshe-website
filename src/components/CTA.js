import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-neoshe/90 to-neoshe-light/90 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Discover NEOSHE
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start Your Routine Today
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="bg-white/90 backdrop-blur-sm border border-white/30 text-neoshe hover:bg-white hover:shadow-lg px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md">
              Shop Collection
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
