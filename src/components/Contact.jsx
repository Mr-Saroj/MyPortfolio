import React from 'react';

const Contact = () => {
  return (
    <section className="neu-surface py-16 md:py-section-gap-desktop px-6 sm:px-8 md:px-grid-margin max-w-container-max mx-auto" id="contact">
      <div className="neu-raised p-8 md:p-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8">
          <h2 className="font-headline-xl text-[28px] md:text-headline-xl text-primary">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-on-surface-variant text-body-lg">
            Have a project in mind or just want to chat about tech? Drop me a message and I'll get back to you as soon as possible.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-primary">
              <div className="neu-inset-sm w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary">mail</span>
              </div>
              <span className="break-all">sarojaojha09@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-primary">
              <div className="neu-inset-sm w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary">location_on</span>
              </div>
              <span>Odisha, India</span>
            </div>
          </div>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-3">
            <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Full Name</label>
            <input className="neu-input w-full p-4 text-primary placeholder:text-on-surface-variant/60" placeholder="John Doe" type="text" />
          </div>
          <div className="space-y-3">
            <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Email Address</label>
            <input className="neu-input w-full p-4 text-primary placeholder:text-on-surface-variant/60" placeholder="john@example.com" type="email" />
          </div>
          <div className="space-y-3">
            <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Message</label>
            <textarea className="neu-input w-full p-4 text-primary placeholder:text-on-surface-variant/60" placeholder="How can I help you?" rows="4"></textarea>
          </div>
          <button
            className="neu-btn-primary w-full bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest py-5 rounded-xl"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;