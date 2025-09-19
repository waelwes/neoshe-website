import React from 'react';
import { motion } from 'framer-motion';

const Routine = () => {
  const steps = [
    {
      number: "01",
      title: "Cleanse",
      description: "Start your routine with our Purifying Cleanser. Gently remove impurities and prepare your skin for the next steps.",
      icon: "🧴"
    },
    {
      number: "02", 
      title: "Moisturize",
      description: "Apply our 100% Natural Moisture Cream to deeply nourish and hydrate your skin with collagen-boosting ingredients.",
      icon: "💧"
    },
    {
      number: "03",
      title: "Protect", 
      description: "Finish with our SPF 50+ Sunscreen to protect your skin from harmful UVA and UVB rays throughout the day.",
      icon: "☀️"
    }
  ];

  return (
    <section id="routine" className="py-20 bg-gradient-to-br from-white/80 to-gray-50/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Updated heading: NEOSHE as image */}
          <h2 className="text-4xl md:text-5xl font-light text-neoshe mb-6 flex items-center justify-center gap-2">
            The{" "}
            <img 
              src="/images/neoshe.png"   // put your NEOSHE text image inside public/images
              alt="NEOSHE"
              className="h-10 md:h-10 inline-block"
            />{" "}
            routine
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to radiant, healthy skin
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  {step.icon}
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 text-neoshe rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-2xl font-medium text-neoshe mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-neoshe hover:bg-neoshe-dark text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            Start Your Routine
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Routine;
