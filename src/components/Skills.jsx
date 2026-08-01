import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      icon: 'dns',
      skills: [
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
        { name: 'Microservices', symbol: 'hub' },
      ],
    },
    {
      title: 'Frontend',
      icon: 'devices',
      skills: [
        { name: 'React JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
      ],
    },
    {
      title: 'Database',
      icon: 'database',
      skills: [
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
        { name: 'SQL Server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
      ],
    },
    {
      title: 'Tools',
      icon: 'build',
      skills: [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
        { name: 'GitHub Copilot', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/githubcopilot.svg' },
      ],
    },
    {
      title: 'Problem Solving',
      icon: 'psychology_alt',
      skills: [
        { name: 'LeetCode', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg' },
      ],
    },
  ];

  return (
    <section className="py-section-gap-desktop bg-surface-container-low px-grid-margin" id="skills">
      <div className="max-w-container-max mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-secondary font-label-md uppercase tracking-widest">Expertise</span>
          <h2 className="font-headline-xl text-headline-xl text-primary">Technical Arsenal</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="premium-card p-8 space-y-6">
              <span className="material-symbols-outlined text-secondary text-4xl">{category.icon}</span>
              <h3 className="font-headline-lg text-[24px] text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 border border-outline-variant rounded-full text-[12px] font-bold tracking-tighter text-on-surface-variant uppercase"
                  >
                    {skill.logo ? (
                      <img src={skill.logo} alt={skill.name} className="w-4 h-4 object-contain" />
                    ) : (
                      <span className="material-symbols-outlined text-[16px] text-secondary">{skill.symbol}</span>
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;