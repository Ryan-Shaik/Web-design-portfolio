import { motion } from 'framer-motion';
import { useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: 'Web Design & Development',
      description: 'Creating stunning, responsive websites that drive results',
      icon: '🎨',
      features: ['Custom Design', 'Responsive Layout', 'SEO Optimized', 'Fast Loading'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native and cross-platform apps that users love',
      icon: '📱',
      features: ['iOS & Android', 'React Native', 'Flutter', 'User Testing'],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'User-centered design that creates memorable experiences',
      icon: '✨',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 4,
      title: 'E-Commerce Solutions',
      description: 'Complete online stores that convert visitors to customers',
      icon: '🛒',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Analytics'],
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 5,
      title: 'Digital Marketing',
      description: 'Strategic marketing that grows your online presence',
      icon: '📈',
      features: ['SEO Strategy', 'Content Marketing', 'Social Media', 'PPC Campaigns'],
      color: 'from-indigo-600 to-purple-600'
    },
    {
      id: 6,
      title: 'Brand Identity',
      description: 'Creating cohesive brand experiences across all touchpoints',
      icon: '🎯',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
      color: 'from-pink-600 to-rose-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="services" className="py-20 relative bg-gray-950">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              className="relative group"
            >
              <div className="relative bg-gray-900 rounded-2xl p-8 h-full border border-gray-800 overflow-hidden transition-all duration-300 hover:border-purple-500/50">
                {/* Gradient background on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredService === service.id ? 0.1 : 0 }}
                  className={`absolute inset-0 bg-gradient-to-br ${service.color}`}
                />

                {/* Icon */}
                <motion.div
                  animate={{ 
                    rotate: hoveredService === service.id ? 360 : 0,
                    scale: hoveredService === service.id ? 1.2 : 1
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl mb-6"
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: hoveredService === service.id ? 1 : 0.7,
                        x: hoveredService === service.id ? 0 : -10
                      }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-purple-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
                  className="absolute bottom-8 right-8"
                >
                  <span className="text-purple-400 font-medium flex items-center">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;