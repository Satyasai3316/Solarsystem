import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, ExternalLink, Calendar, Building } from 'lucide-react';

const Locations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="locations" className="py-20 bg-gradient-to-br from-solar-blue/10 to-solar-orange/10">
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
              Visit Our Office
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Guntur, we're easily accessible and ready to serve 
            your solar energy needs across Andhra Pradesh.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-solar-orange to-solar-yellow rounded-full flex items-center justify-center mr-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Head Office</h3>
                  <p className="text-solar-blue font-medium">Guntur, Andhra Pradesh</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-solar-orange mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Address:</p>
                    <p className="text-gray-600">
                      Flat no 87, Gayatri nagar villas<br />
                      Etukuru, Guntur<br />
                      Andhra Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-solar-orange mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Established:</p>
                    <p className="text-gray-600">2024</p>
                  </div>
                </div>
              </div>

              <motion.a
                href="https://maps.app.goo.gl/Rxs5q74L3WRWaVSN9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center mt-6 bg-gradient-to-r from-solar-orange to-solar-yellow text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Get Directions
              </motion.a>
            </div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-4">Service Areas</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Guntur', 'Vijayawada', 'Amaravati', 'Tenali',
                  'Narasaraopet', 'Chilakaluripet', 'Mangalagiri', 'Bapatla', 'All Locations Over Andhra Pradesh'
                ].map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-solar-orange rounded-full"></div>
                    <span
                      className={
                        area === 'All Locations Over Andhra Pradesh'
                          ? 'text-solar-blue font-bold bg-solar-yellow/20 px-2 py-1 rounded'
                          : 'text-gray-600'
                      }
                    >
                      {area}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Find Us Here</h4>
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.123456789012!2d80.4378!3d16.2968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE3JzQ4LjUiTiA4MMKwMjYnMTYuMSJF!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Subramanyeswara Solar System Location"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Click on the map to get detailed directions to our office
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-600">
            © 2024 Subramanyeswara Solar System. All rights reserved. 
            Powering a brighter, sustainable future with clean solar energy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;