import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import SolarPanel3D from './SolarPanel3D';
import Sun from './Sun';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-solar-blue/20 via-solar-yellow/10 to-solar-orange/20" />
      
      {/* Animated Sun */}
      <Sun />
      
      {/* 3D Solar Panels */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 opacity-20">
          {[...Array(6)].map((_, i) => (
            <SolarPanel3D key={i} delay={i * 0.1} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 min-h-screen flex flex-col justify-center">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-solar-orange via-solar-yellow to-solar-blue bg-clip-text text-transparent">
              Powering a Brighter Future
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            with Subramanyeswara Solar System
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Leading provider of sustainable solar energy solutions for homes and businesses. 
            Transform your space with clean, renewable energy that saves money and protects our planet.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-solar-orange to-solar-yellow text-white px-12 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Services
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-600"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;