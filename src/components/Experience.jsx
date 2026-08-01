import React from 'react';

const Experience = () => {
  return (
    <section className="py-section-gap-desktop bg-surface-container px-grid-margin" id="experience">
      <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-24">
        {/* Timeline */}
        <div className="space-y-12">
          <h3 className="font-headline-xl text-primary">Journey</h3>
          <div className="relative pl-8 space-y-12 border-l-2 border-secondary/20">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 timeline-node"></div>
              <div className="space-y-2">
                <span className="text-secondary font-bold">2024 - Present</span>
                <h4 className="font-headline-lg text-[20px] text-primary">Software Engineer Intern</h4>
                <p className="text-on-surface-variant">Leading the development of internal automation tools using Spring Boot and React, improving team efficiency by 40%.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-1 timeline-node"></div>
              <div className="space-y-2">
                <span className="text-secondary font-bold">2020 - 2024</span>
                <h4 className="font-headline-lg text-[20px] text-primary">B.Tech in Computer Science</h4>
                <p className="text-on-surface-variant">Academic excellence with focus on Algorithms, Data Structures, and Enterprise Java development.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Achievements Grid */}
        <div className="space-y-12">
          <h3 className="font-headline-xl text-primary">Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="premium-card p-8 text-center space-y-4">
              <div className="text-4xl font-extrabold text-primary">300+</div>
              <p className="font-label-md text-label-md uppercase tracking-wider text-secondary">DSA Problems Solved</p>
            </div>
            <div className="premium-card p-8 text-center space-y-4">
              <div className="text-4xl font-extrabold text-primary">15+</div>
              <p className="font-label-md text-label-md uppercase tracking-wider text-secondary">Full Stack Projects</p>
            </div>
            <div className="premium-card p-8 text-center space-y-4">
              <div className="text-4xl font-extrabold text-primary">Top 5%</div>
              <p className="font-label-md text-label-md uppercase tracking-wider text-secondary">In Hackathons</p>
            </div>
            <div className="premium-card p-8 text-center space-y-4">
              <div className="text-4xl font-extrabold text-primary">100%</div>
              <p className="font-label-md text-label-md uppercase tracking-wider text-secondary">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;