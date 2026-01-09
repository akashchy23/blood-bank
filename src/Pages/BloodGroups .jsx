import React from 'react';
import { motion } from 'framer-motion';

const BloodGroups = () => {
  const groups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  // Container animation: manages the staggering of children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Each bubble pops up 0.1s after the previous one
      },
    },
  };

  // Individual item animation
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring", // Gives it a "bouncy" feel
        stiffness: 260,
        damping: 20 
      }
    },
  };

  return (
    <section className="py-20 bg-white text-center overflow-hidden">
      {/* Animated Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-red-600 mb-8"
      >
        Available Blood Groups
      </motion.h2>

      {/* Animated Grid Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto px-4"
      >
        {groups.map((group, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: "#ef4444", // Tailwind red-500
              color: "#ffffff",
              cursor: "pointer" 
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-red-500 text-red-600 rounded-full font-bold shadow-sm transition-colors duration-200"
          >
            {group}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BloodGroups;