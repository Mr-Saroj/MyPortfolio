import React from 'react';

const Contact = () => {
  return (
    <section className="py-section-gap-desktop px-grid-margin max-w-container-max mx-auto" id="contact">
      <div className="premium-card bg-primary p-8 md:p-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="font-display-lg-mobile text-display-lg-mobile md:text-headline-xl text-white">Let's Build Something Amazing Together</h2>
          <p className="text-primary-fixed-dim text-body-lg">Have a project in mind or just want to chat about tech? Drop me a message and I'll get back to you as soon as possible.</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-white">
              <span className="material-symbols-outlined text-secondary-container">mail</span>
              <span>hello@sarojaojha.dev</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <span className="material-symbols-outlined text-secondary-container">location_on</span>
              <span>Odisha, India</span>
            </div>
          </div>
        </div>
        <form className="bg-white p-8 md:p-12 rounded-[24px] space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Full Name</label>
            <input className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary" placeholder="John Doe" type="text" />
          </div>
          <div className="space-y-2">
            <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Email Address</label>
            <input className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary" placeholder="john@example.com" type="email" />
          </div>
          <div className="space-y-2">
            <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Message</label>
            <textarea className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary" placeholder="How can I help you?" rows="4"></textarea>
          </div>
          <button className="w-full bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest py-5 rounded-xl hover:bg-secondary transition-all active:scale-95" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;