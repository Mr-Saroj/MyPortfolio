import React from 'react';

const About = () => {
  const cards = [
    { icon: 'school', title: 'Education', text: 'B.Tech in Computer Science' },
    { icon: 'dns', title: 'Current Focus', text: 'Production-Grade Backend & Distributed Systems' },
    { icon: 'hub', title: 'Exploring Now', text: 'Microservices, Event-Driven Architecture & System Design' },
    { icon: 'target', title: 'Career Goal', text: 'Backend Engineer / Solutions Architect' },
  ];

  const principles = [
    { icon: 'verified', label: 'Production-Ready' },
    { icon: 'trending_up', label: 'Scalable' },
    { icon: 'build_circle', label: 'Maintainable' },
    { icon: 'bolt', label: 'Efficient' },
  ];

  return (
    <section
      className="neu-surface py-16 md:py-section-gap-desktop px-6 sm:px-8 md:px-grid-margin max-w-container-max mx-auto"
      id="about"
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
        {/* Story */}
        <div className="space-y-4 md:space-y-6 text-center md:text-left">
          <span className="text-secondary font-label-md text-[12px] sm:text-label-md uppercase tracking-widest">
            About Me
          </span>
          <h2 className="font-headline-xl text-[26px] sm:text-[30px] md:text-headline-xl text-primary">
            My Story
          </h2>

          <p className="text-[14px] sm:text-body-lg font-body-lg text-on-surface-variant">
            I am a Full Stack Java Developer with a strong focus on backend engineering. My journey began with a curiosity for how complex systems work, which led me to specialize in building production-grade backends that are reliable, scalable, and easy to maintain.
          </p>

          <p className="text-[14px] sm:text-body-lg font-body-lg text-on-surface-variant">
            I care about clean architecture, well-designed REST APIs, efficient database access, and distributed systems that stay stable under real-world load. On the front end, I build clean React interfaces so the whole product feels solid from the database to the browser.
          </p>

          {/* Principles */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
            {principles.map((p) => (
              <span
                key={p.label}
                className="neu-inset-sm flex items-center gap-2 px-4 py-2 rounded-full text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-primary"
              >
                <span className="material-symbols-outlined text-[16px] text-secondary">{p.icon}</span>
                {p.label}
              </span>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:gap-8">
          {cards.map((c) => (
            <div key={c.title} className="neu-raised p-6 sm:p-8 flex gap-4 sm:gap-6 items-center">
              <div className="neu-inset w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary text-[24px] sm:text-[28px]">
                  {c.icon}
                </span>
              </div>
              <div>
                <h4 className="font-headline-lg text-[16px] sm:text-[20px] text-primary">{c.title}</h4>
                <p className="text-[13px] sm:text-base text-on-surface-variant">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;