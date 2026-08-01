import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-grid-margin border-t border-outline-variant/30 max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-base">
      <div className="font-headline-lg text-headline-lg font-bold text-primary">SO</div>
      <div className="flex gap-8">
        <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary-container transition-colors duration-200" href="#home">Home</a>
        <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary-container transition-colors duration-200" href="#about">About</a>
        <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary-container transition-colors duration-200" href="#projects">Projects</a>
        <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary-container transition-colors duration-200" href="#contact">Contact</a>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant">© 2024 Saroja Ojha. All rights reserved.</p>
    </footer>
  );
};

export default Footer;