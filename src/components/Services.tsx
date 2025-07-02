import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home, Building, Settings, HelpCircle, Check, X } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('residential');

  const services = [
    {
      id: 'residential',
      icon: Home,
      title: 'Residential Solar',
      description: 'Complete solar solutions for homes',
      features: ['Custom design', 'Net metering', '25-year warranty', 'Mobile monitoring']
    },
    {
      id: 'commercial',
      icon: Building,
      title: 'Commercial Solar',
      description: 'Large-scale installations for businesses',
      features: ['Industrial grade', 'Bulk pricing', 'Tax benefits', 'Quick ROI']
    },
    {
      id: 'maintenance',
      icon: Settings,
      title: 'Maintenance & AMC',
      description: 'Comprehensive maintenance services',
      features: ['Regular cleaning', 'Performance monitoring', '24/7 support', 'Replacement warranty']
    },
    {
      id: 'consulting',
      icon: HelpCircle,
      title: 'Solar Consulting',
      description: 'Expert advice and planning',
      features: ['Site assessment', 'Financial analysis', 'Permit assistance', 'System optimization']
    }
  ];

  const comparisonData = [
    { feature: 'Government Subsidy', dcr: true, nonDcr: false },
    { feature: 'Cost per Watt', dcr: '₹45-50', nonDcr: '₹35-40' },
    { feature: 'Efficiency', dcr: '18-20%', nonDcr: '20-22%' },
    { feature: 'Warranty', dcr: '25 years', nonDcr: '25 years' },
    { feature: 'Made in India', dcr: true, nonDcr: false },
    { feature: 'Performance Guarantee', dcr: '90% at 10 years', nonDcr: '85% at 10 years' },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
              Our Solar Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solar energy solutions tailored to meet your specific needs, 
            from residential installations to large commercial projects.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                activeTab === service.id ? 'ring-2 ring-solar-orange' : ''
              }`}
              onClick={() => setActiveTab(service.id)}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="w-16 h-16 bg-gradient-to-br from-solar-orange to-solar-yellow rounded-full flex items-center justify-center mb-6 mx-auto"
              >
                <service.icon className="h-8 w-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-center mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-solar-green mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* DCR vs Non-DCR Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-solar-orange to-solar-blue bg-clip-text text-transparent">
              DCR vs Non-DCR Solar Panels
            </span>
          </h3>
          
          {/* <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-800">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold text-solar-orange">DCR Panels</th>
                  <th className="text-center py-4 px-6 font-semibold text-solar-blue">Non-DCR Panels</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-gray-800">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.dcr === 'boolean' ? (
                        row.dcr ? (
                          <Check className="h-5 w-5 text-solar-green mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-700">{row.dcr}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.nonDcr === 'boolean' ? (
                        row.nonDcr ? (
                          <Check className="h-5 w-5 text-solar-green mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-700">{row.nonDcr}</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div> */}

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-solar-orange/10 to-solar-yellow/10 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">DCR Panels Benefits</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Eligible for government subsidies up to 40%</li>
                <li>• Support for Make in India initiative</li>
                <li>• Better warranty terms and support</li>
                <li>• Local manufacturing and service</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-solar-blue/10 to-solar-lightBlue/10 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Non-DCR Panels Benefits</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Lower upfront investment cost</li>
                <li>• Higher efficiency ratings</li>
                <li>• Faster return on investment</li>
                <li>• Advanced technology features</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;