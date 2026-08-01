import React from 'react';

const About = () => {
  return (
    <section className="py-16 md:py-section-gap-desktop px-6 sm:px-8 md:px-grid-margin max-w-container-max mx-auto" id="about">
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
        <div className="space-y-4 md:space-y-6 text-center md:text-left">
          <span className="text-secondary font-label-md text-[12px] sm:text-label-md uppercase tracking-widest">About Me</span>
          <h2 className="font-headline-xl text-[26px] sm:text-[30px] md:text-headline-xl text-primary">My Story</h2>
          <p className="text-[14px] sm:text-body-lg font-body-lg text-on-surface-variant">
            I am a passionate Full Stack Developer with a core focus on Java technologies. My journey began with a curiosity for how complex systems work, leading me to specialize in building robust enterprise solutions that bridge the gap between technical efficiency and user experience. More recently, that same curiosity has pulled me toward Agentic AI — exploring how autonomous, tool-using systems can be designed to reason, plan, and act, and how these capabilities can be integrated into the scalable applications I build.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6">
          <div className="premium-card p-6 sm:p-8 md:p-10 flex gap-4 sm:gap-6 items-center">
            <div className="p-3 sm:p-4 bg-secondary-fixed rounded-xl shrink-0">
              <span className="material-symbols-outlined text-on-secondary-fixed text-[20px] sm:text-[24px]">school</span>
            </div>
            <div>
              <h4 className="font-headline-lg text-[16px] sm:text-[20px] text-primary">Education</h4>
              <p className="text-[13px] sm:text-base text-on-surface-variant">B.Tech in Computer Science</p>
            </div>
          </div>

          <div className="premium-card p-6 sm:p-8 md:p-10 flex gap-4 sm:gap-6 items-center">
            <div className="p-3 sm:p-4 bg-secondary-fixed rounded-xl shrink-0">
              <span className="material-symbols-outlined text-on-secondary-fixed text-[20px] sm:text-[24px]">bolt</span>
            </div>
            <div>
              <h4 className="font-headline-lg text-[16px] sm:text-[20px] text-primary">Current Focus</h4>
              <p className="text-[13px] sm:text-base text-on-surface-variant">Full Stack Microservices Architecture</p>
            </div>
          </div>

          <div className="premium-card p-6 sm:p-8 md:p-10 flex gap-4 sm:gap-6 items-center">
            <div className="p-3 sm:p-4 bg-secondary-fixed rounded-xl shrink-0">
              <span className="material-symbols-outlined text-on-secondary-fixed text-[20px] sm:text-[24px]">smart_toy</span>
            </div>
            <div>
              <h4 className="font-headline-lg text-[16px] sm:text-[20px] text-primary">Exploring Now</h4>
              <p className="text-[13px] sm:text-base text-on-surface-variant">Agentic AI Systems</p>
            </div>
          </div>

          <div className="premium-card p-6 sm:p-8 md:p-10 flex gap-4 sm:gap-6 items-center">
            <div className="p-3 sm:p-4 bg-secondary-fixed rounded-xl shrink-0">
              <span className="material-symbols-outlined text-on-secondary-fixed text-[20px] sm:text-[24px]">target</span>
            </div>
            <div>
              <h4 className="font-headline-lg text-[16px] sm:text-[20px] text-primary">Career Goal</h4>
              <p className="text-[13px] sm:text-base text-on-surface-variant">Software Engineer / Solutions Architect</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;