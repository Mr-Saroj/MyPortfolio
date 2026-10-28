import React from 'react';

const Skills = () => {
  const dev = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
  const simple = 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons';

  const skillCategories = [
    {
      title: 'Backend',
      icon: 'dns',
      skills: [
        { name: 'Java', logo: `${dev}/java/java-original.svg` },
        { name: 'Spring Boot', logo: `${dev}/spring/spring-original.svg` },
        { name: 'Spring Security', symbol: 'security' },
        { name: 'Spring Data JPA', symbol: 'storage' },
        { name: 'Hibernate', logo: `${dev}/hibernate/hibernate-original.svg` },
        { name: 'REST APIs', symbol: 'api' },
        { name: 'JWT Auth', symbol: 'key' },
      ],
    },
    {
      title: 'Distributed Systems',
      icon: 'hub',
      skills: [
        { name: 'Microservices', symbol: 'hub' },
        { name: 'RabbitMQ', logo: `${simple}/rabbitmq.svg` },
        { name: 'Event-Driven Architecture', symbol: 'sync_alt' },
        { name: 'Message Queues', symbol: 'mail' },
        { name: 'System Design', symbol: 'account_tree' },
      ],
    },
    {
      title: 'Frontend',
      icon: 'devices',
      skills: [
        { name: 'React JS', logo: `${dev}/react/react-original.svg` },
        { name: 'JavaScript', logo: `${dev}/javascript/javascript-original.svg` },
        { name: 'TypeScript', logo: `${dev}/typescript/typescript-original.svg` },
        { name: 'Tailwind CSS', logo: `${dev}/tailwindcss/tailwindcss-original.svg` },
        { name: 'HTML', logo: `${dev}/html5/html5-original.svg` },
        { name: 'CSS3', logo: `${dev}/css3/css3-original.svg` },
        { name: 'Bootstrap', logo: `${dev}/bootstrap/bootstrap-original.svg` },
      ],
    },
    {
      title: 'Database',
      icon: 'database',
      skills: [
        { name: 'PostgreSQL', logo: `${dev}/postgresql/postgresql-original.svg` },
        { name: 'MySQL', logo: `${dev}/mysql/mysql-original.svg` },
        { name: 'MongoDB', logo: `${dev}/mongodb/mongodb-original.svg` },
        { name: 'SQL Server', logo: `${dev}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: 'build',
      skills: [
        { name: 'Docker', logo: `${dev}/docker/docker-original.svg` },
        { name: 'Maven', logo: `${dev}/maven/maven-original.svg` },
        { name: 'Git', logo: `${dev}/git/git-original.svg` },
        { name: 'GitHub', logo: `${dev}/github/github-original.svg` },
        { name: 'Postman', logo: `${dev}/postman/postman-original.svg` },
        { name: 'GitHub Copilot', logo: `${simple}/githubcopilot.svg` },
      ],
    },
    {
      title: 'Problem Solving',
      icon: 'psychology_alt',
      skills: [
        { name: 'Data Structures & Algorithms', symbol: 'account_tree' },
        { name: 'LeetCode', logo: `${simple}/leetcode.svg` },
      ],
    },
  ];

  return (
    <section className="neu-surface py-16 md:py-section-gap-desktop px-6 sm:px-8 md:px-grid-margin" id="skills">
      <div className="max-w-container-max mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-secondary font-label-md uppercase tracking-widest">Expertise</span>
          <h2 className="font-headline-xl text-[26px] sm:text-[30px] md:text-headline-xl text-primary">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {skillCategories.map((category) => (
            <div key={category.title} className="neu-raised p-8 space-y-6">
              <div className="neu-inset w-16 h-16 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-4xl">{category.icon}</span>
              </div>
              <h3 className="font-headline-lg text-[24px] text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="neu-inset-sm flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold tracking-tighter text-on-surface-variant uppercase"
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