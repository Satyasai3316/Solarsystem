import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Calendar, Target } from 'lucide-react';
import Poster from '../components/Images/Poster.png';


const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Calendar, label: "Established", value: "2024" },
    { icon: Users, label: "Happy Customers", value: "80+" },
    { icon: Award, label: "Projects Completed", value: "100+" },
    { icon: Target, label: "MW Installed", value: "15+" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
              About Subramanyeswara Solar System
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the renewable energy revolution with innovative solar solutions 
            for homes and businesses across India.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Subramanyeswara Solar System, we are committed to transforming how India 
              generates and consumes energy. Founded in 2024, we specialize in providing 
              comprehensive solar energy solutions that combine cutting-edge technology 
              with exceptional service.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our expertise spans across residential solar installations, commercial solar 
              projects, and industrial solar systems. We pride ourselves on delivering 
              customized solutions that maximize energy efficiency and provide long-term 
              value to our clients.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-solar-orange rounded-full mt-3"></div>
                <p className="text-gray-600"><strong>Home Solar Systems:</strong> Residential installations that reduce electricity bills by up to 90%</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-solar-orange rounded-full mt-3"></div>
                <p className="text-gray-600"><strong>Commercial Projects:</strong> Large-scale solar solutions for offices, factories, and institutions</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-solar-orange rounded-full mt-3"></div>
                <p className="text-gray-600"><strong>Maintenance & Support:</strong> Comprehensive AMC services to ensure optimal performance</p>
              </div>
            </div>
          </motion.div>

          {/* Company Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-solar-blue/10 to-solar-orange/10 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Watch Our Story</h4>
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={Poster}
                  alt="Company Poster"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Learn about our journey and commitment to sustainable energy solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-solar-orange to-solar-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-solar-orange mb-2">{stat.value}</h4>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;