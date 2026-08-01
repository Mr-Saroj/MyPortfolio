import React from 'react';

const Projects = () => {
  const projects = [
   {
  name: "Fixora",
  description:
    "Fixora is a full-stack home service booking platform that connects customers with verified technicians. Customers can book services, upload issue images, track request status in real time, and download invoices. Technicians manage jobs through dedicated dashboards, while admins oversee users, service requests, and platform operations. The application features JWT authentication, role-based access control, Cloudinary image storage, and a scalable Spring Boot backend with REST APIs.",
  image: "/Images/Fixora.png",
  tech: [
    "React.js",
    "Tailwind CSS",
    "Redux Toolkit",
    "Spring Boot",
    "Spring Security",
    "Spring Data JPA",
    "JWT Authentication",
    "PostgreSQL",
    "Cloudinary",
    "Razorpay",
    "REST API",
    "Maven",
    "Git"
  ],
  liveDemo: "#",
  github: "#",
  reverse: false,
},
    {
      name: 'CareNest',
      description: 'A patient-centric healthcare management system. Features secure record keeping, appointment scheduling, and an empathetic UI designed for both medical staff and patients.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKSjdSjcLRI2WZGLd-EZ6CjgkGmBbAxzqy17JB1ez6zlUB_AbcQkShAeOG1gdosVwNfYzB1eHUFFstPno_LRCZLnUB09D8nnWXJi-Y501gmdQHdT6xnoVvahEeuuuvWfa6HmtEmHmzGG57-kux5pEKm7SH5PEaGiR_NNJlwWfxwQQuJqpYc5o6DDvhDb-SMWuIBQy2mOKirxz7h0eStePwHggOTzsl-BxSrVSw_J0IbhZswL0Mwmbx',
      tech: ['JAVA EE', 'HIBERNATE', 'REDUX'],
      liveDemo: '#',
      github: '#',
      reverse: true,
    },
    {
      name: 'Smart IoT Store',
      description: 'Next-gen e-commerce solution for smart home enthusiasts. Integrates real-time inventory management and a high-performance checkout experience.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8CcpsX5DybhOd90Egz4cB57sF0hwG3jHJ7MQ0RdDWfQRalEs6ojTNAo3k2MgfdbRaZ75Ljsnnp0awFG_YUmD2LLxjNuGFzNIuSJ_2hSX5hAji0JluPGXkWYUBprpRghYe_n_KwVwobsGS4Pa-qOslVdoesISqNuJ-JpQOwjDQXZ3TJk85ADo_3eVwc5ebE7ocMCE1Wgdc261dBHOofV4xsg2VMozVF4KS9eNI_sCmGATMl_jzHfyo',
      tech: ['MICROSERVICES', 'STRIPE API', 'DOCKER'],
      liveDemo: '#',
      github: '#',
      reverse: false,
    },
  ];

  return (
    <section className="py-16 md:py-section-gap-desktop px-6 sm:px-8 md:px-grid-margin max-w-container-max mx-auto" id="projects">
      <div className="space-y-16 md:space-y-24">
        <div className="space-y-3 md:space-y-4 text-center md:text-left">
          <span className="text-secondary font-label-md text-[12px] sm:text-label-md uppercase tracking-widest">Portfolio</span>
          <h2 className="font-headline-xl text-[26px] sm:text-[30px] md:text-headline-xl text-primary">Featured Projects</h2>
        </div>

        {projects.map((project) => (
          <div key={project.name} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className={`premium-card overflow-hidden h-[220px] sm:h-[300px] md:h-[400px] ${project.reverse ? 'order-1 md:order-2' : ''}`}>
              <img className="w-full h-full object-cover" alt={`Mockup of ${project.name}`} src={project.image} />
            </div>
            <div className={`space-y-4 md:space-y-6 ${project.reverse ? 'order-2 md:order-1' : ''}`}>
              <h3 className="font-headline-xl text-[22px] sm:text-[26px] md:text-headline-xl text-primary">{project.name}</h3>
              <p className="text-[14px] sm:text-body-lg font-body-lg text-on-surface-variant">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span key={tag} className="px-3 py-1 sm:px-4 sm:py-1.5 bg-primary-fixed text-on-primary-fixed rounded-full text-[11px] sm:text-[12px] font-bold">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-2 sm:pt-4">
                <a className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all text-[14px] sm:text-base" href={project.liveDemo}>Live Demo <span className="material-symbols-outlined text-[18px] sm:text-[20px]">arrow_forward</span></a>
                <a className="flex items-center gap-2 text-secondary font-bold text-[14px] sm:text-base" href={project.github}>GitHub <span className="material-symbols-outlined text-[18px] sm:text-[20px]">code</span></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;