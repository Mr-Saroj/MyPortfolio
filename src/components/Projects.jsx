import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Fixora',
      description:
        'Fixora is a full-stack home service booking platform that connects customers with verified technicians. Customers can book services, upload images of their issues, track service request status, and manage their bookings. Technicians can accept and manage jobs through dedicated dashboards, while administrators oversee users, service requests, and platform operations. The platform includes JWT authentication, role-based access control, Cloudinary image storage, technician subscriptions, and secure REST APIs powered by Spring Boot.',

      image: '/Images/Fixora.png',

      tech: [
        'React.js',
        'Tailwind CSS',
        'Redux Toolkit',
        'Spring Boot',
        'Spring Security',
        'Spring Data',
        'JWT Authentication',
        'MongoDB',
        'Cloudinary',
        'Razorpay',
        'REST APIs',
        'Maven',
        'Git & GitHub',
      ],

      liveDemo: 'https://fixora-weld.vercel.app/',
      github: 'https://github.com/Mr-Saroj/Fixora',
      reverse: false,
    },

    {
      name: 'Krishi Sathi AI',

      description:
        'Krishi Sathi AI is an AI-powered agricultural platform designed to help farmers make smarter farming decisions. It features AI-based plant disease detection that identifies common crop diseases from leaf images and an intelligent farming advisor that provides guidance on crop management, disease prevention, and farming operations using AI and a Retrieval-Augmented Generation (RAG) system. The platform also includes an agricultural marketplace where farmers can explore and purchase farming products from registered sellers. Sellers can manage their products and orders, while administrators manage users, approve sellers and products, monitor marketplace operations, and assign delivery partners to orders. A dedicated delivery workflow supports order fulfillment from sellers to farmers.',

      image: '/Images/KrishiSathiAI.png',

      tech: [
        'React Native',
        'React js',
        'Expo',
        'TypeScript',
        'Spring Boot',
        'Spring Security',
        'MongoDB',
        'JWT Authentication',
        'Python',
        'FastAPI',
        'Machine Learning',
        'ResNet18',
        'RAG',
        'FAISS',
        'LangChain',
        'REST APIs',
        'Git & GitHub',
      ],

      liveDemo: '#',
      github: 'https://github.com/Mr-Saroj/Krishi-Sathi',
      reverse: true,
    },

    {
      name: 'Smart IoT Store',

      description:
        'Smart IoT Store is an e-commerce project concept focused on simplifying the purchase of smart home products. The platform is designed around product discovery, inventory management, and a streamlined checkout experience, with an architecture intended to support secure payment processing and scalable online shopping.',

      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA8CcpsX5DybhOd90Egz4cB57sF0hwG3jHJ7MQ0RdDWfQRalEs6ojTNAo3k2MgfdbRaZ75Ljsnnp0awFG_YUmD2LLxjNuGFzNIuSJ_2hSX5hAji0JluPGXkWYUBprpRghYe_n_KwVwobsGS4Pa-qOslVdoesISqNuJ-JpQOwjDQXZ3TJk85ADo_3eVwc5ebE7ocMCE1Wgdc261dBHOofV4xsg2VMozVF4KS9eNI_sCmGATMl_jzHfyo',

      tech: [
        'E-Commerce',
        'REST APIs',
        'Inventory Management',
        'Payment Integration',
        'Responsive UI',
      ],

      liveDemo: '#',
      github: '#',
      reverse: false,
    },
  ];

  return (
    <section
      className="neu-surface py-16 md:py-section-gap-desktop px-6 sm:px-8 md:px-grid-margin max-w-container-max mx-auto"
      id="projects"
    >
      <div className="space-y-16 md:space-y-24">
        {/* Section Heading */}
        <div className="space-y-3 md:space-y-4 text-center md:text-left">
          <span className="text-secondary font-label-md text-[12px] sm:text-label-md uppercase tracking-widest">
            Portfolio
          </span>

          <h2 className="font-headline-xl text-[26px] sm:text-[30px] md:text-headline-xl text-primary">
            Featured Projects
          </h2>
        </div>

        {/* Project List */}
        {projects.map((project) => (
          <div
            key={project.name}
            className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
          >
            {/* Project Image */}
            <div
              className={`neu-raised p-3 sm:p-4 ${
                project.reverse ? 'order-1 md:order-2' : ''
              }`}
            >
              <div className="neu-inset !rounded-2xl p-2 h-[220px] sm:h-[300px] md:h-[400px]">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  alt={`${project.name} project preview`}
                  src={project.image}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                />
              </div>
            </div>

            {/* Project Details */}
            <div
              className={`space-y-4 md:space-y-6 ${
                project.reverse ? 'order-2 md:order-1' : ''
              }`}
            >
              <h3 className="font-headline-xl text-[22px] sm:text-[26px] md:text-headline-xl text-primary">
                {project.name}
              </h3>

              <p className="text-[14px] sm:text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="neu-inset-sm px-3 py-1 sm:px-4 sm:py-1.5 text-primary rounded-full text-[11px] sm:text-[12px] font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex flex-wrap gap-5 pt-2 sm:pt-4">
                <a
                  className="neu-btn-primary bg-primary text-on-primary flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-[14px] sm:text-base"
                  href={project.liveDemo}
                  target={project.liveDemo !== '#' ? '_blank' : undefined}
                  rel={project.liveDemo !== '#' ? 'noopener noreferrer' : undefined}
                  onClick={(e) => {
                    if (project.liveDemo === '#') {
                      e.preventDefault();
                    }
                  }}
                >
                  Live Demo
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                    arrow_forward
                  </span>
                </a>

                <a
                  className="neu-btn text-secondary flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-[14px] sm:text-base"
                  href={project.github}
                  target={project.github !== '#' ? '_blank' : undefined}
                  rel={project.github !== '#' ? 'noopener noreferrer' : undefined}
                  onClick={(e) => {
                    if (project.github === '#') {
                      e.preventDefault();
                    }
                  }}
                >
                  GitHub
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                    code
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;