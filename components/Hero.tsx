import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="max-w-[860px] mx-auto px-8 pt-36 pb-20 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-start"
    >
      <div>
        <div className="flex items-center gap-2 mb-5 opacity-0 animate-[fadeUp_0.4s_ease_0s_forwards]">
          <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
          <span className="text-[13px] text-ink-3">
            Available for freelance work
          </span>
        </div>

        <h1 className="font-serif text-[clamp(42px,6vw,68px)] leading-[1.05] tracking-tight text-ink opacity-0 animate-[fadeUp_0.4s_ease_0.05s_forwards]">
          Full-Stack
          <br />
          <em className="text-accent" style={{ fontStyle: "italic" }}>
            Web Developer
          </em>
        </h1>

        <p className="text-[17px] text-ink-2 font-light max-w-[440px] mt-5 leading-relaxed opacity-0 animate-[fadeUp_0.4s_ease_0.1s_forwards]">
          I build fast, clean, and scalable web applications using Laravel for
          the backend and Next.js with Tailwind CSS for the frontend.
        </p>

        <div className="flex gap-3 mt-8 flex-wrap opacity-0 animate-[fadeUp_0.4s_ease_0.15s_forwards]">
          <a
            href="#contact"
            className="text-sm font-medium px-6 py-3 rounded-full no-underline transition-all hover:-translate-y-0.5
              bg-accent text-white shadow-[0_2px_12px_rgba(200,75,47,0.25)] hover:shadow-[0_6px_20px_rgba(200,75,47,0.35)]"
          >
            Let&apos;s work together
          </a>

          <a
            href="#projects"
            className="btn-glass text-sm font-normal px-6 py-3 rounded-full no-underline text-ink transition-all hover:-translate-y-0.5 hover:bg-white/60"
          >
            View my work
          </a>
        </div>
      </div>

      <div className="glass-card hidden md:block p-6 min-w-[200px] opacity-0 animate-[fadeLeft_0.4s_ease_0.1s_forwards]">
        <div className="text-[11px] text-ink-3 uppercase tracking-widest mb-3">
          Experience
        </div>
        <div className="font-serif text-[32px] text-ink leading-none">2+</div>
        <div className="text-[13px] text-ink-2 mt-1">
          Years building
          <br />
          web apps
        </div>
        <div className="border-t border-black/10 my-4" />
        <div className="text-[11px] text-ink-3 uppercase tracking-widest mb-3">
          Stack
        </div>
        <div className="flex flex-col gap-1">
          {["Laravel / PHP", "Next.js / React", "Tailwind CSS", "MySQL"].map(
            (s) => (
              <span key={s} className="text-[13px] text-ink-2">
                {s}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
