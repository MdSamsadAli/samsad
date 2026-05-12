import React from "react";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="glass-dark reveal max-w-[calc(860px-4rem)] mx-auto mb-20 rounded-[20px] px-12 py-16"
      >
        <div className="text-[12px] font-medium tracking-widest uppercase text-[#e87a5a] mb-3">
          Get in touch
        </div>
        <h2 className="font-serif text-[clamp(28px,4vw,40px)] tracking-tight leading-tight text-paper mb-4">
          Let&apos;s build something together
        </h2>
        <p className="text-[16px] font-light text-paper/60 mb-8 max-w-[420px] leading-relaxed">
          I&apos;m open to freelance projects, contract work, and
          collaborations. Drop me a message and I&apos;ll reply within 24 hours.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            target="_blank"
            href="mailto:samsadalam272@gmail.com"
            className="text-[14px] font-medium px-6 py-3 rounded-full no-underline transition-all hover:-translate-y-0.5
              bg-accent text-white shadow-[0_2px_12px_rgba(200,75,47,0.3)] hover:shadow-[0_6px_20px_rgba(200,75,47,0.4)]"
          >
            Send an email
          </a>
          {[
            { label: "WhatsApp", href: "https://wa.me/+9779813381892" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/md-samsad-ali-763245206/",
            },
            { label: "GitHub", href: "https://github.com/MdSamsadAli" },
          ].map(({ label, href }) => (
            <a
              key={label}
              target="_blank"
              href={href}
              className="btn-glass text-[14px] font-medium px-6 py-3 rounded-full no-underline transition-all hover:-translate-y-0.5 text-paper/85 hover:bg-white/15"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
