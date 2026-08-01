import React from "react";

const Services = () => {
  const services = [
    {
      icon: "code",
      title: "React.js Frontend Development",
      description:
        "Build modern, responsive, and user-friendly web applications using React.js, Tailwind CSS, and the latest frontend best practices for exceptional user experiences.",
      border: "border-b-secondary",
    },
    {
      icon: "dns",
      title: "Spring Boot Backend Development",
      description:
        "Develop secure, scalable, and high-performance backend applications using Spring Boot, Spring Security, JPA, and RESTful architecture.",
      border: "border-b-primary",
    },
    {
      icon: "hub",
      title: "Microservices & REST APIs",
      description:
        "Design and develop microservices architecture with well-structured REST APIs, enabling scalable, maintainable, and efficient communication between services.",
      border: "border-b-secondary-fixed-dim",
    },
    {
      icon: "phone_android",
      title: "React Native App Development",
      description:
        "Create responsive and user-friendly Android applications using React Native with clean UI, smooth navigation, and optimized performance.",
      border: "border-b-secondary",
    },
  ];

  return (
    <section className="py-section-gap-desktop px-grid-margin max-w-container-max mx-auto">
      <div className="space-y-16">
        {/* Heading */}
        <div className="text-center space-y-4">
          <span className="text-secondary font-label-md uppercase tracking-widest">
            Services
          </span>

          <h2 className="font-headline-xl text-headline-xl text-primary">
            Professional Development Services
          </h2>

          <p className="max-w-2xl mx-auto text-on-surface-variant">
            I build modern web applications, scalable backend systems,
            microservices, REST APIs, and mobile applications with a strong
            focus on performance, security, and user experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`premium-card p-8 lg:p-10 rounded-2xl space-y-6 border-b-4 ${service.border} hover:-translate-y-2 transition-all duration-300`}
            >
              <span className="material-symbols-outlined text-secondary text-5xl">
                {service.icon}
              </span>

              <h3 className="font-headline-lg text-primary">
                {service.title}
              </h3>

              <p className="text-on-surface-variant leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;