import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahim Ahmed",
      msg: "I found a donor within minutes. Amazing platform!"
    },
    {
      name: "Sara Khan",
      msg: "Very easy to use and truly life-saving."
    }
  ];

  // Animation variants for the container (staggering children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3 // Delay between each card appearing
      }
    }
  };

  // Animation variants for individual cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      {/* Animated Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-red-600 mb-12"
      >
        What People Say
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-4"
      >
        {reviews.map((item, i) => (
          <motion.div 
            key={i} 
            variants={cardVariants}
            whileHover={{ scale: 1.03 }} // Subtle lift on hover
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500"
          >
            <p className="text-gray-600 mb-4 italic">"{item.msg}"</p>
            <h4 className="font-semibold text-gray-800">
              — {item.name}
            </h4>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;