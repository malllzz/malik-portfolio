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
      zIndex: 9999,
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
          viewport={{ once: true }}
          variants={riseUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">About</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors">
            Get to know the engineer behind the quality — my story, values, and expertise.
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
                src="/images/profile-picture.webp"
                alt="Malik Aziz Ramadhan"
                className="relative w-full h-full object-cover rounded-3xl shadow-xl bg-gray-100 dark:bg-gray-800"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 text-gray-600 dark:text-gray-300 leading-relaxed text-lg space-y-6 transition-colors">
            <p>
              I am an aspiring <strong className="text-gray-900 dark:text-white">Quality Assurance Engineer</strong> with a solid foundation in Web Development.
              My background in <strong className="text-gray-900 dark:text-white">HTML, CSS, JavaScript, and React</strong> gives me a unique advantage: I don't just find bugs, I understand <em>why</em> they happen.
              This technical insight allows me to conduct deeper analysis (White Box Testing) and write more effective automation scripts.
            </p>
            <p>
              Beyond finding defects, I focus on the <strong className="text-gray-900 dark:text-white">System Flow and User Experience</strong>.
              I believe that a great QA Engineer acts as the bridge between code and user satisfaction.
              Combined with my knowledge of <strong className="text-gray-900 dark:text-white">UI/UX Design</strong>, I strive to ensure that software is not only bug-free but also intuitive and reliable for the end user.
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
            <span className="text-[#6366F1]">Code with Passion,</span>
            <span className="bg-[#6366F1] text-white px-4 py-1 rounded-lg shadow-md transform -rotate-1 inline-block">
              Test with Precision
            </span>
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg transition-colors">
            I am deeply passionate about ensuring software reliability because I believe quality is the core of user trust.
            From manually testing edge cases to building automated test suites with <strong>Selenium & Katalon</strong>, I enjoy the challenge of making software unbreakable.
            I love collaborating with developers to create a culture of quality in every project.
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
            Let’s ensure quality together.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 transition-colors">
            Open for QA roles, testing projects, and collaborations.
          </p>

          <motion.a
            href="mailto:malikazizrmdhn@gmail.com"
            onHoverStart={handleHover}

            animate={{
              rotate: [0, -3, 3, -3, 3, 0],
              scale: [1, 1.02, 1, 1.02, 1]
            }}

            transition={{
              duration: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 2
            }}

            whileHover={{
              scale: 1.1,
              backgroundColor: "#1D4ED8",
              rotate: 0
            }}
            whileTap={{ scale: 0.95 }}

            className="inline-block bg-[#6366F1] text-white font-bold px-10 py-4 rounded-xl shadow-lg cursor-pointer"
          >
            Let's Collab!!
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;