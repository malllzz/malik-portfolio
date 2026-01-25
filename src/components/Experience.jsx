import React from 'react';
import { experiences } from '../data/content';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-900 bg-dot-pattern overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Experiences</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors">
            A timeline of my contributions and technical milestones in the technology field.
          </p>
        </motion.div>

        {/* List Experience */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 transition-colors">
          {experiences.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} 
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center py-6">

                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-700 p-2 flex items-center justify-center transition-colors">
                    <img 
                      src={item.logo} 
                      alt={item.company} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors">{item.company}</h3>
                  <p className="text-[#6366F1] font-semibold text-lg mt-1">{item.role}</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-1 transition-colors">{item.period}</p>
                </div>

              </div>

              {index !== experiences.length - 1 && (
                <hr className="border-gray-100 dark:border-gray-700 transition-colors" />
              )}
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;