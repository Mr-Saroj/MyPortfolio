import React from 'react';

const Education = () => {
  const stats = [
    { value: '300+', label: 'DSA Problems Solved' },
    { value: '15+', label: 'Full Stack Projects' },
    { value: 'Top 5%', label: 'In Hackathons' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  const timeline = [
    {
      period: '2022 - Present',
      title: 'B.Tech in Computer Science',
      description:
        'Currently in the final year, focusing on Algorithms, Data Structures, and Enterprise Java development.',
    },
    {
      period: '2020 - 2022',
      title: 'Higher Secondary (+2)',
      description: 'Completed in 2022 with 71%.',
    },
  ];

  return (
    <section className="neu-surface py-16 md:py-section-gap-desktop px-6 sm:px-8 md:px-grid-margin" id="education">
      <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Timeline */}
        <div className="space-y-12">
          <h3 className="font-headline-xl text-primary">Education</h3>
          <div className="relative pl-8 space-y-12 border-l-2 border-secondary/20">
            {timeline.map((item) => (
              <div key={item.title} className="relative">
                <div className="absolute -left-[44px] top-1 timeline-node">
                  <span className="block w-2.5 h-2.5 rounded-full bg-secondary"></span>
                </div>
                <div className="neu-raised p-6 space-y-2">
                  <span className="text-secondary font-bold">{item.period}</span>
                  <h4 className="font-headline-lg text-[20px] text-primary">{item.title}</h4>
                  <p className="text-on-surface-variant">{item.description}</p>
                </div>
              </div>
            ))}
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

export default Education;