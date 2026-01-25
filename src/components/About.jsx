import React from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

const About = () => {
  const handleHover = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6366F1', '#FFD700', '#ffffff'],
      disableForReducedMotion: true
    });
  };

  const riseUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          variants={riseUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">About</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors">
            Get to know the developer behind the code — my story, values, and expertise.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={riseUp}
          className="flex flex-col md:flex-row gap-12 items-center mb-20"
        >

          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#6366F1] rounded-3xl"></div>
              <img 
                src="/images/profile-picture.jpg" 
                alt="Malik Aziz Ramadhan" 
                className="relative w-full h-full object-cover rounded-3xl shadow-xl bg-gray-100 dark:bg-gray-800"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 text-gray-600 dark:text-gray-300 leading-relaxed text-lg space-y-6 transition-colors">
            <p>
              I am a dedicated <strong className="text-gray-900 dark:text-white">Junior Web Developer</strong> focused on delivering functional and responsive web solutions. 
              With a hands-on approach to <strong className="text-gray-900 dark:text-white">HTML, CSS, JavaScript, and React</strong>, I utilize these tools to transform concepts into working applications. 
              My priority is writing clean code that meets project requirements effectively.
            </p>
            <p>
              Beyond technical implementation, I bring a strong understanding of System Flow and Logic. 
              I believe that a great developer understands the "Why" behind the code. 
              Combined with my interest in <strong className="text-gray-900 dark:text-white">UI/UX Design</strong>, I aim to build digital products that are not only robust in logic but also intuitive for the user.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={riseUp}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 flex flex-wrap items-center gap-3 transition-colors">
            <span className="text-[#6366F1]">Learn to Code,</span>
            <span className="bg-[#6366F1] text-white px-4 py-1 rounded-lg shadow-md transform -rotate-1 inline-block">
              Code to Learn
            </span>
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg transition-colors">
            I am deeply passionate about this field because of the endless opportunities it offers. 
            From mastering fundamental theories to building practical applications, I believe that by 
            continuously learning and adapting, I can tackle any challenge. I also love sharing knowledge 
            and collaborating with others so we can grow together in this dynamic industry.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div 
          id="contact" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={riseUp}
          className="text-center py-16 mt-10"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 transition-colors">
            Let’s create something amazing together.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 transition-colors">
            Open for new projects and collaborations.
          </p>
          
          <a 
            href="mailto:malikazizrmdhn@gmail.com"
            onMouseEnter={handleHover}
            className="inline-block bg-[#6366F1] text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            Let's Collab!!
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;