import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sun, Zap, Home, Factory } from 'lucide-react';

const SolarEducation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: Sun,
      title: "Solar Collection",
      description: "Solar panels capture sunlight and convert it into DC electricity through photovoltaic cells."
    },
    {
      icon: Zap,
      title: "Power Conversion",
      description: "Inverters convert DC electricity into AC electricity that can be used in your home or business."
    },
    {
      icon: Home,
      title: "Home Usage",
      description: "Clean electricity powers your appliances, lights, and devices, reducing your energy bills."
    },
    {
      icon: Factory,
      title: "Grid Connection",
      description: "Excess energy can be fed back into the grid, earning you credits through net metering."
    }
  ];

  return (
    <section id="solar-education" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-solar-orange to-solar-blue bg-clip-text text-transparent">
              What is Solar Energy?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solar energy is clean, renewable power generated from sunlight. Learn how this amazing 
            technology transforms sunshine into electricity for your home or business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="w-16 h-16 bg-gradient-to-br from-solar-orange to-solar-yellow rounded-full flex items-center justify-center mb-6 mx-auto"
              >
                <step.icon className="h-8 w-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {step.title}
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Solar System Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-solar-blue/10 to-solar-orange/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Harness the Power of the Sun?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have already made the switch to clean, 
            renewable solar energy. Start saving money while helping the environment.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-solar-orange to-solar-yellow text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Your Free Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolarEducation;