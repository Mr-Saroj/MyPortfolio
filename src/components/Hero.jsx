import React from 'react';
import profileImage from '../assets/profile1.jpg';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const Hero = () => {
  const orbitSkills = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
    { name: 'Microservices', symbol: 'hub' },
    { name: 'Hibernate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'React JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  ];

  const focusAreas = [
    { label: 'Production-Ready', icon: 'verified' },
    { label: 'Scalable', icon: 'trending_up' },
    { label: 'Maintainable', icon: 'build_circle' },
    { label: 'Efficient', icon: 'bolt' },
    { label: 'Distributed Systems', icon: 'hub' },
  ];

  const socials = [
    {
      name: 'GitHub',
      href: 'https://github.com/Mr-Saroj',
      external: true,
      icon: <GithubIcon />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/saroj-ojha-1a8a78311/',
      external: true,
      icon: <LinkedinIcon />,
    },
    {
      name: 'Email',
      // TODO: replace with your real email address
      href: 'mailto:your-email@example.com',
      external: false,
      icon: <span className="material-symbols-outlined text-[22px]">mail</span>,
    },
  ];

  return (
    <section
      className="neu-surface relative min-h-screen flex items-center pt-28 md:pt-24 pb-12 md:pb-8"
      id="home"
    >
      <div className="relative z-10 w-full px-6 sm:px-8 md:px-grid-margin max-w-container-max mx-auto grid md:grid-cols-2 gap-10 md:gap-8 lg:gap-12 items-center">

        {/* Left content */}
        <div className="space-y-5 md:space-y-6 order-2 md:order-1 text-center md:text-left">
          <div className="space-y-1">
            <p className="font-headline-lg text-[18px] sm:text-[20px] md:text-[22px] text-on-surface-variant font-semibold">
              Hi, I'm
            </p>
            <h1 className="font-display-lg text-[40px] leading-[1.1] sm:text-[48px] md:text-[52px] lg:text-[60px] font-extrabold tracking-tight text-primary whitespace-nowrap">
              Saroja Ojha
            </h1>
          </div>

          <div className="space-y-1">
            <h2 className="font-headline-xl text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] leading-tight font-bold text-secondary">
              Full Stack Java Developer
            </h2>
            <p className="font-label-md text-[12px] sm:text-[13px] md:text-[14px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant">
              Backend &amp; Distributed Systems
            </p>
          </div>

          <p className="font-body-lg text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-on-surface-variant max-w-xl mx-auto md:mx-0">
            I design and build production-grade backends that are scalable, maintainable, and efficient. With Java and Spring Boot at the core, I focus on clean architecture, reliable APIs, and distributed systems that hold up under real-world load, paired with intuitive React interfaces on the front end.
          </p>

          {/* Focus chips */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center md:justify-start">
            {focusAreas.map((area) => (
              <span
                key={area.label}
                className="neu-inset-sm flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-primary"
              >
                <span className="material-symbols-outlined text-[14px] sm:text-[16px] text-secondary">
                  {area.icon}
                </span>
                {area.label}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 justify-center md:justify-start pt-1">
            <a
              className="neu-btn-primary bg-primary text-on-primary px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl font-label-md text-[12px] uppercase tracking-widest text-center"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="neu-btn text-secondary px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl font-label-md text-[12px] uppercase tracking-widest text-center"
              href="#"
            >
              Download Resume
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-4 justify-center md:justify-start pt-1">
            {socials.map((social) => (
              <a
                key={social.name}
                className="neu-btn w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary"
                href={social.href}
                aria-label={social.name}
                title={social.name}
                {...(social.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative flex justify-center items-center w-full max-w-[300px] sm:max-w-sm md:max-w-md mx-auto aspect-square order-1 md:order-2 pt-4 md:pt-0">
          <div className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
            {/* Orbit */}
            <div className="absolute inset-[-28px] sm:inset-[-36px] md:inset-[-50px] rounded-full border border-dashed border-secondary/30 animate-[spin_30s_linear_infinite]">
              {orbitSkills.map((skill, index) => {
                const angle = (360 / orbitSkills.length) * index;
                return (
                  <div
                    key={skill.name}
                    className="absolute w-full h-full top-0 left-0"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div
                        className="neu-orbit w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full p-2 sm:p-2.5 flex items-center justify-center animate-[spin_30s_linear_infinite_reverse]"
                        title={skill.name}
                      >
                        {skill.symbol ? (
                          <span className="material-symbols-outlined text-primary text-[18px] sm:text-[24px] md:text-[28px]">
                            {skill.symbol}
                          </span>
                        ) : (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Profile: raised ring -> inset ring -> photo */}
            <div className="neu-raised absolute inset-0 !rounded-full p-3 sm:p-3.5 z-20">
              <div className="neu-inset w-full h-full !rounded-full p-2 sm:p-2.5">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Saroja Ojha Portrait"
                    src={profileImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;