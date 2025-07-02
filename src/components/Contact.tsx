import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us Now',
      value: '+91 9052939991',
      description: 'Available 24/7 for emergencies',
      href: 'tel:+919052939991',
      color: 'from-solar-orange to-solar-yellow'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'subrahmanyeswarasolarsystems@gmail.com',
      description: 'We respond within 24 hours',
      href: 'mailto:subrahmanyeswarasolarsystems@gmail.com',
      color: 'from-solar-blue to-solar-lightBlue'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Quick Response',
      description: 'Instant quotes and support',
      href: 'https://wa.me/919052939991',
      color: 'from-solar-green to-green-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-solar-orange to-solar-blue bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your solar journey? Contact us today for a free consultation 
            and personalized quote. Our experts are here to help you every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}
              >
                <method.icon className="h-8 w-8 text-white" />
              </motion.div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-gray-800 mb-1">{method.title}</h4>
                <p className="text-gray-600 font-medium mb-1">{method.value}</p>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;