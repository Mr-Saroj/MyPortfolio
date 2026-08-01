import React from 'react';
import profileImage from '../assets/profile1.jpg';

const Hero = () => {
  const orbitSkills = [
    { name: 'React JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Hibernate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'Agentic AI', symbol: 'smart_toy' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-28 md:pt-24 pb-16 md:pb-0 bg-gradient-to-br from-surface-container to-background" id="home">

      <div className="relative z-10 w-full px-6 sm:px-8 md:px-grid-margin max-w-container-max mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Left Content - Set to order-2 on mobile, and order-1 on desktop (md) */}
        <div className="space-y-6 md:space-y-8 order-2 md:order-1 text-center md:text-left">
          <div className="space-y-2 md:space-y-3">
            <h1 className="font-display-lg text-[32px] leading-tight sm:text-[40px] md:text-display-lg text-primary">
              Hi, I'm Saroja Ojha
            </h1>
            <h2 className="font-headline-xl text-[18px] sm:text-[22px] md:text-headline-xl text-secondary">
              Full Stack Java Developer & Agentic AI Enthusiast
            </h2>
          </div>

          <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface-variant max-w-lg mx-auto md:mx-0">
            Engineering scalable web applications with precision and modern design. Specializing in high-performance Java backends and intuitive React interfaces, with growing expertise in Agentic AI systems.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
            <a className="bg-primary text-on-primary px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-label-md text-[12px] sm:text-label-md uppercase tracking-widest hover:shadow-lg transition-all active:scale-95 text-center" href="#projects">
              View Projects
            </a>
            <a className="border-2 border-secondary text-secondary px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-label-md text-[12px] sm:text-label-md uppercase tracking-widest hover:bg-secondary/5 transition-all active:scale-95 text-center" href="#">
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 justify-center md:justify-start pt-2">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-[24px] sm:text-[28px]">code</span>
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-[24px] sm:text-[28px]">account_circle</span>
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-[24px] sm:text-[28px]">mail</span>
            </a>
          </div>
        </div>

        {/* Right Visual - Set to order-1 on mobile, and order-2 on desktop (md) */}
        <div className="relative flex justify-center items-center w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto aspect-square order-1 md:order-2 pt-4 md:pt-0">
          <div className="absolute inset-0 z-0 flex justify-center items-center">
            <div className="geometric-bg w-[110%] h-[110%] -translate-x-4 -translate-y-4 opacity-5 rounded-full"></div>
          </div>

          <div className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <div className="absolute inset-[-30px] sm:inset-[-40px] md:inset-[-60px] rounded-full border border-dashed border-secondary/30 animate-[spin_30s_linear_infinite]">
              {orbitSkills.map((skill, index) => {
                const angle = (360 / orbitSkills.length) * index;
                return (
                  <div key={skill.name} className="absolute w-full h-full top-0 left-0" style={{ transform: `rotate(${angle}deg)` }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.08)] border border-outline-variant/20 p-2 sm:p-3 flex items-center justify-center animate-[spin_30s_linear_infinite_reverse]" title={skill.name}>
                        {skill.symbol ? (
                          <span className="material-symbols-outlined text-primary text-[18px] sm:text-[28px] md:text-[32px]">
                            {skill.symbol}
                          </span>
                        ) : (
                          <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain drop-shadow-sm" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute inset-0 bg-white p-2 sm:p-3 rounded-full shadow-2xl z-20 border border-secondary/5">
              <div className="w-full h-full rounded-full overflow-hidden bg-surface-container-low">
                <img className="w-full h-full object-cover" alt="Saroja Ojha Portrait" src={profileImage} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;