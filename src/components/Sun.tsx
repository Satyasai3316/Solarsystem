import React from 'react';
import { motion } from 'framer-motion';

const Sun = () => {
  return (
    <motion.div
      className="absolute top-20 right-10 md:top-32 md:right-20"
      animate={{
        x: [0, 50, 0],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Sun Glow */}
      <motion.div
        className="absolute inset-0 w-32 h-32 md:w-48 md:h-48 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, rgba(255, 140, 0, 0.2) 50%, transparent 70%)',
        }}
      />
      
      {/* Sun Core */}
      <motion.div
        className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-solar-yellow via-solar-orange to-yellow-600 shadow-2xl"
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          },
          scale: {
            duration: 3,
            repeat: Infinity,
          }
        }}
        style={{
          boxShadow: '0 0 40px rgba(255, 215, 0, 0.6), 0 0 80px rgba(255, 140, 0, 0.4)'
        }}
      >
        {/* Sun Rays */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 bg-gradient-to-t from-solar-yellow to-transparent"
            style={{
              height: '20px',
              left: '50%',
              top: '-20px',
              transformOrigin: '50% 32px',
              transform: `rotate(${i * 45}deg) translateX(-50%)`,
            }}
            animate={{
              scaleY: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Sun;