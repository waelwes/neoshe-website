import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white/50 to-gray-50/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-neoshe mb-8">
              About Us
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At NEOSHE, we believe that luxury skincare should be both effective and pure. 
                Our carefully curated collection combines the finest organic ingredients with 
                cutting-edge skincare science to deliver exceptional results.
              </p>
              <p>
                Every product in our range is crafted with sustainability in mind, using 
                ethically sourced ingredients and eco-friendly packaging. We're committed 
                to helping you achieve radiant, healthy skin while respecting our planet.
              </p>
              <p>
                Our philosophy centers on simplicity and efficacy – because the best skincare 
                routine is one you'll actually want to use every day.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/30">
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

export default About;
