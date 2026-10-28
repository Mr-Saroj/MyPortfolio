import React from 'react';

const About = () => {
  const cards = [
    { icon: 'school', title: 'Education', text: 'B.Tech in Computer Science' },
    { icon: 'bolt', title: 'Current Focus', text: 'Full Stack Microservices Architecture' },
    { icon: 'smart_toy', title: 'Exploring Now', text: 'Agentic AI Systems' },
    { icon: 'target', title: 'Career Goal', text: 'Software Engineer / Solutions Architect' },
  ];

  return (
    <section className="neu-surface py-16 md:py-section-gap-desktop px-6 sm:px-8 md:px-grid-margin max-w-container-max mx-auto" id="about">
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
        <div className="space-y-4 md:space-y-6 text-center md:text-left">
          <span className="text-secondary font-label-md text-[12px] sm:text-label-md uppercase tracking-widest">About Me</span>
          <h2 className="font-headline-xl text-[26px] sm:text-[30px] md:text-headline-xl text-primary">My Story</h2>
          <p className="text-[14px] sm:text-body-lg font-body-lg text-on-surface-variant">
            I am a passionate Full Stack Developer with a core focus on Java technologies. My journey began with a curiosity for how complex systems work, leading me to specialize in building robust enterprise solutions that bridge the gap between technical efficiency and user experience. More recently, that same curiosity has pulled me toward Agentic AI — exploring how autonomous, tool-using systems can be designed to reason, plan, and act, and how these capabilities can be integrated into the scalable applications I build.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8">
          {cards.map((c) => (
            <div key={c.title} className="neu-raised p-6 sm:p-8 flex gap-4 sm:gap-6 items-center">
              <div className="neu-inset w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary text-[24px] sm:text-[28px]">{c.icon}</span>
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