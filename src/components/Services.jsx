import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'code',
      title: 'React.js Frontend Development',
      description:
        'Build modern, responsive, and user-friendly web applications using React.js, Tailwind CSS, and the latest frontend best practices for exceptional user experiences.',
    },
    {
      icon: 'dns',
      title: 'Spring Boot Backend Development',
      description:
        'Develop secure, scalable, and high-performance backend applications using Spring Boot, Spring Security, JPA, and RESTful architecture.',
    },
    {
      icon: 'hub',
      title: 'Microservices & REST APIs',
      description:
        'Design and develop microservices architecture with well-structured REST APIs, enabling scalable, maintainable, and efficient communication between services.',
    },
    {
      icon: 'phone_android',
      title: 'React Native App Development',
      description:
        'Create responsive and user-friendly Android applications using React Native with clean UI, smooth navigation, and optimized performance.',
    },
  ];

  return (
    <section className="neu-surface py-16 md:py-section-gap-desktop px-6 sm:px-8 md:px-grid-margin max-w-container-max mx-auto" id="services">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <span className="text-secondary font-label-md uppercase tracking-widest">Services</span>
          <h2 className="font-headline-xl text-[26px] sm:text-[30px] md:text-headline-xl text-primary">
            Professional Development Services
          </h2>
          <p className="max-w-2xl mx-auto text-on-surface-variant">
            I build modern web applications, scalable backend systems, microservices, REST APIs, and mobile applications with a strong focus on performance, security, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="neu-raised p-8 lg:p-10 space-y-6 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="neu-inset w-20 h-20 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-5xl">{service.icon}</span>
              </div>
              <h3 className="font-headline-lg text-primary">{service.title}</h3>
              <p className="text-on-surface-variant leading-7">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;