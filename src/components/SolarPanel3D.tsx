import React from 'react';
import { motion } from 'framer-motion';

interface SolarPanel3DProps {
  delay?: number;
  className?: string;
}

const SolarPanel3D: React.FC<SolarPanel3DProps> = ({ delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: -45, rotateY: 45 }}
      animate={{ 
        opacity: 1, 
        rotateX: 0, 
        rotateY: [45, -45, 45],
      }}
      transition={{ 
        duration: 1.5,
        delay,
        rotateY: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className={`relative w-24 h-16 md:w-32 md:h-20 ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Solar Panel Surface */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-lg shadow-2xl"
        style={{
          transform: 'translateZ(4px)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Solar Cell Grid */}
        <div className="grid grid-cols-4 gap-1 p-2 h-full">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-sm"
              animate={{ 
                opacity: [0.8, 0.9, 0.8],
                boxShadow: [
                  "0 0 5px rgba(0, 191, 255, 0.3)",
                  "0 0 10px rgba(0, 191, 255, 0.4)",
                  "0 0 5px rgba(0, 191, 255, 0.3)"
                ]
              }}
              transition={{ 
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Panel Frame */}
      <motion.div
        className="absolute inset-0 border-2 border-gray-400 rounded-lg"
        style={{
          transform: 'translateZ(5px)',
        }}
      />
      
      {/* Side Panel */}
      <motion.div
        className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-gray-300 to-gray-500 rounded-r-lg"
        style={{
          transform: 'rotateY(90deg) translateZ(2px)',
          transformOrigin: 'left center'
        }}
      />
    </motion.div>
  );
};

export default SolarPanel3D;