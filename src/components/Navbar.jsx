import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact' },
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
        {
          // Fire when the section occupies the top 20–60% of the viewport
          rootMargin: '-10% 0px -60% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const linkClass = (id) =>
    id === activeSection
      ? 'font-label-md text-label-md uppercase tracking-wider text-primary border-b-2 border-secondary font-bold transition-all duration-300'
      : 'font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-all duration-300';

  const mobileLinkClass = (id) =>
    id === activeSection
      ? 'font-label-md text-label-md uppercase tracking-wider text-primary font-bold py-3 border-b border-outline-variant/10'
      : 'font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-all duration-300 py-3 border-b border-outline-variant/10';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav border-b border-secondary/10 shadow-sm">
      <div className="flex justify-between items-center px-grid-margin py-4 max-w-container-max mx-auto w-full">

        <div className="font-headline-lg text-headline-lg font-extrabold text-primary tracking-tighter">SO</div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} className={linkClass(id)} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>

        <button className="hidden md:block bg-primary text-on-primary px-6 py-2.5 rounded-xl font-label-md text-label-md uppercase tracking-widest hover:bg-secondary transition-all active:scale-95 duration-200">
          Resume
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-grid-margin pb-6 pt-2">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              className={mobileLinkClass(id)}
              href={`#${id}`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          <button className="mt-4 bg-primary text-on-primary px-6 py-3 rounded-xl font-label-md text-label-md uppercase tracking-widest hover:bg-secondary transition-all active:scale-95 duration-200 w-full">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;