import React, { useState } from 'react';
import { projects } from '../data/content';
import { Github, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const ProjectCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongDesc = item.desc.length > 120;

  const toggleReadMore = () => {
    if (isLongDesc) setIsExpanded(!isExpanded);
  };

  return (
    <motion.div 
      variants={cardVariants}
      className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      
      {/* Gambar Project */}
      <div className="h-48 overflow-hidden group relative">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Konten Card */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">{item.title}</h3>

        <div 
          className={`relative mb-6 flex-grow group ${isLongDesc ? 'cursor-pointer' : ''}`}
          onClick={toggleReadMore}
        >
          <p className={`text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-all duration-300 ${!isExpanded && isLongDesc ? 'line-clamp-3' : ''}`}>
            {item.desc}
          </p>

          {isLongDesc && (
            <span className="text-[#6366F1] text-xs font-medium mt-1 inline-block hover:underline">
              {isExpanded ? 'Show Less' : 'Read More'}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {item.tech.map((tech, idx) => (
            <span 
              key={idx} 
              className="px-4 py-1.5 text-xs font-semibold text-[#6366F1] border border-[#6366F1]/20 bg-[#5D5CDE]/5 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between mt-auto transition-colors">
          {item.liveLink ? (
            <a 
              href={item.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-[#6366F1] dark:hover:text-[#6366F1] transition-colors font-medium"
            >
              <LinkIcon size={16} /> Live Website
            </a>
          ) : (
            <div></div> 
          )}

          {item.githubLink && (
            <a 
              href={item.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-[#6366F1] dark:hover:text-[#6366F1] transition-colors font-medium"
            >
              <Github size={18} /> See Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg transition-colors">
            Discover the digital solutions I've crafted with passion and precision.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;