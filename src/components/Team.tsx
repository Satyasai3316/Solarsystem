import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Award, Briefcase, Lightbulb } from 'lucide-react';
import SubramanyamImg from '../components/Images/Subramanyam.png';
import GopiImg from '../components/Images/GOPI.png';
import DurgaImg from '../components/Images/Durga.png';



const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: "Dasari Subramanyam",
      role: "Founder",
      avatar: SubramanyamImg,
      description: "With over 2 years of experience in solar energy systems, Subramanyam leads our technical team with expertise in system design and optimization.",
      expertise: ["System Design", "Technical Consulting", "Project Management"],
      icon: User
    },
    {
      name: "Dasari Gopi",
      role: "Managing Director",
      avatar: GopiImg,
      description: "Gopi ensures our clients receive exceptional service and support throughout their solar journey.",
      expertise: ["Customer Relations", "Support", "Client Success"],
      icon: Award
    },
    {
      name: "Tata Durga",
      role: "Director",
      avatar: DurgaImg,
      description: "Durga oversees all installation projects, ensuring the highest standards of quality and safety.",
      expertise: ["Installation", "Safety", "Quality Control"],
      icon: Briefcase
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
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
              Meet Our Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated professionals bring years of experience and passion for renewable energy 
            to deliver exceptional solar solutions for every client.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Avatar */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="relative mb-6"
              >
                <div className="w-32 h-32 mx-auto relative">
                  <motion.img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-solar-orange to-solar-yellow rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <member.icon className="h-6 w-6 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-solar-orange font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.4 + skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gradient-to-r from-solar-blue/20 to-solar-orange/20 text-gray-700 text-sm rounded-full border border-solar-blue/30"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-solar-blue/10 to-solar-orange/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Why Choose Our Team?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <h4 className="text-3xl font-bold text-solar-orange mb-2">2+</h4>
              <p className="text-gray-600">Years Combined Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-solar-orange mb-2">100%</h4>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-solar-orange mb-2">24/7</h4>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;