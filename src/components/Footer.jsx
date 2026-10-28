import React from 'react';

const Footer = () => {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="neu-surface w-full py-12 px-6 md:px-grid-margin max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="neu-raised-sm w-14 h-14 rounded-2xl flex items-center justify-center font-headline-lg text-[22px] font-bold text-primary">
        SO
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {links.map((l) => (
          <a
            key={l.href}
            className="neu-btn px-5 py-2 rounded-xl font-body-md text-body-md text-on-surface-variant hover:text-secondary"
            href={l.href}
          >
            {l.label}
          </a>
        ))}
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant text-center">
        © 2024 Saroja Ojha. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;