import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observers = [];

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-10% 0px -60% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const linkClass = (id) =>
    id === activeSection
      ? 'neu-inset-sm px-4 py-2 rounded-xl font-label-md text-label-md uppercase tracking-wider text-primary font-bold transition-all duration-300'
      : 'px-4 py-2 rounded-xl font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-all duration-300';

  const mobileLinkClass = (id) =>
    id === activeSection
      ? 'neu-inset-sm px-4 py-3 rounded-xl font-label-md text-label-md uppercase tracking-wider text-primary font-bold'
      : 'px-4 py-3 rounded-xl font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-all duration-300';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-6 md:px-grid-margin py-3 max-w-container-max mx-auto w-full">
        <div className="neu-raised-sm w-12 h-12 rounded-2xl flex items-center justify-center font-headline-lg text-[20px] font-extrabold text-primary tracking-tighter">
          SO
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-2 items-center">
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} className={linkClass(id)} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>

        <button className="neu-btn-primary hidden md:block bg-primary text-on-primary px-6 py-2.5 rounded-xl font-label-md text-label-md uppercase tracking-widest">
          Resume
        </button>

        {/* Mobile toggle */}
        <button
          className="neu-btn md:hidden text-primary w-11 h-11 rounded-xl flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[26px]">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-3 px-6 pb-6 pt-3">
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} className={mobileLinkClass(id)} href={`#${id}`} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
          <button className="neu-btn-primary mt-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-label-md text-label-md uppercase tracking-widest w-full">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;