import React from 'react';

const Experience = () => {
  const stats = [
    { value: '300+', label: 'DSA Problems Solved' },
    { value: '15+', label: 'Full Stack Projects' },
    { value: 'Top 5%', label: 'In Hackathons' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="neu-surface py-16 md:py-section-gap-desktop px-6 sm:px-8 md:px-grid-margin" id="experience">
      <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Timeline */}
        <div className="space-y-12">
          <h3 className="font-headline-xl text-primary">Journey</h3>
          <div className="relative pl-8 space-y-12 border-l-2 border-secondary/20">
            <div className="relative">
              <div className="absolute -left-[44px] top-1 timeline-node">
                <span className="block w-2.5 h-2.5 rounded-full bg-secondary"></span>
              </div>
              <div className="neu-raised p-6 space-y-2">
                <span className="text-secondary font-bold">2024 - Present</span>
                <h4 className="font-headline-lg text-[20px] text-primary">Software Engineer Intern</h4>
                <p className="text-on-surface-variant">
                  Leading the development of internal automation tools using Spring Boot and React, improving team efficiency by 40%.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[44px] top-1 timeline-node">
                <span className="block w-2.5 h-2.5 rounded-full bg-secondary"></span>
              </div>
              <div className="neu-raised p-6 space-y-2">
                <span className="text-secondary font-bold">2020 - 2024</span>
                <h4 className="font-headline-lg text-[20px] text-primary">B.Tech in Computer Science</h4>
                <p className="text-on-surface-variant">
                  Academic excellence with focus on Algorithms, Data Structures, and Enterprise Java development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-12">
          <h3 className="font-headline-xl text-primary">Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="neu-raised p-8 text-center space-y-4">
                <div className="neu-inset-sm rounded-2xl py-4 text-4xl font-extrabold text-primary">{s.value}</div>
                <p className="font-label-md text-label-md uppercase tracking-wider text-secondary">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;