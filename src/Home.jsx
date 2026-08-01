import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-10');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, observerOptions);

    // This will still select all <section> tags rendered by your child components
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observerRef.current.observe(section);
    });

    return () => {
      if (observerRef.current) {
        sections.forEach(section => observerRef.current.unobserve(section));
      }
    };
  }, []);

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;