import React from 'react';
import { UserPlus } from 'lucide-react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
const techStack = [
    { name: "Postman", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Selenium", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
    { name: "Katalon", url: "/katalon.svg" },
    { name: "Jest", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
    { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "SQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "HTML", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  ];

  return (
    <section id="home" className="pt-32 pb-20 bg-gray-50 dark:bg-slate-900 bg-dot-pattern min-h-screen flex flex-col justify-center overflow-hidden transition-colors duration-300">

      {/* Main Text */}
      <div className="container mx-auto px-6 text-center z-10">

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6 transition-colors">
          Ensuring Software <br className="hidden md:block" />
          <span className="relative inline-block mx-2 creative-container">
            <span className="relative z-10 px-4 text-[#6366F1]">Quality & Reliability</span>
            <span className="absolute inset-0 border-2 border-[#6366F1]/50 rounded-lg -rotate-2 transform scale-105 creative-border"></span>
          </span>
          <br />
          through Precision and Code
        </h1>

        {/* Sub Headline */}
        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-colors">
          I'm Malik Aziz Ramadhan, a{' '}
          <span className="font-bold text-[#6366F1] inline-block">
            <TypeAnimation
              sequence={[
                'Junior QA Engineer',
                2000,
                'Manual Tester',
                2000,
                'Automation Tester',
                2000,
                'Junior Web Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>{' '}
          <br className="block my-2" />
          leveraging my development background to
          perform deep technical analysis and ensure flawless user experiences.
        </p>

        {/* Let's Connect Button */}
        <div className="flex justify-center">
          <Link
            to="contact"
            smooth={true}
            className="hover-wave flex items-center gap-2 px-8 py-3 bg-[#6366F1] text-white font-semibold rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg cursor-pointer"
          >
            <UserPlus size={20} />
            Let's Connect
          </Link>
        </div>
      </div>

      {/* Tech Stack Logo */}
      <div className="mt-20 relative w-full overflow-hidden py-10 border-t border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm transition-colors">

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50 dark:from-slate-900 to-transparent z-10 transition-colors"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-50 dark:from-slate-900 to-transparent z-10 transition-colors"></div>

        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">

          {/* Original Logos */}
          <div className="flex gap-12 mx-6">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center gap-2 group min-w-[80px]">
                <img
                  src={tech.url}
                  alt={tech.name}
                  className="h-12 w-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                />
                <span className="text-xs font-medium text-gray-400 dark:text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Duplicates Logos */}
          <div className="flex gap-12 mx-6">
            {techStack.map((tech, index) => (
              <div key={`duplicate-${index}`} className="flex flex-col items-center gap-2 group min-w-[80px]">
                <img
                  src={tech.url}
                  alt={tech.name}
                  className="h-12 w-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                />
                <span className="text-xs font-medium text-gray-400 dark:text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;