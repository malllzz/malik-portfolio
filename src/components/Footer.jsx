import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 pb-10 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <hr className="border-gray-200 dark:border-gray-800 mb-8 transition-colors" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Email */}
          <a 
            href="mailto:malikazizrmdhn@gmail.com" 
            className="text-gray-600 dark:text-gray-300 hover:text-[#5D5CDE] dark:hover:text-[#818CF8] transition-colors font-medium text-lg"
          >
            malikazizrmdhn@gmail.com
          </a>

          {/* Social Media*/}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/malllzz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-[#5D5CDE] transition-transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            
            <a 
              href="https://www.instagram.com/malik.rmdhn_?igsh=NHFiYjl1cHdjNzhk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-[#E1306C] transition-transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>

            <a 
              href="https://www.linkedin.com/in/malik-aziz-ramadhan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-[#0A66C2] transition-transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;