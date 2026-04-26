import React from "react";
const services = [
  {
    num: "01",
    title: "Laravel Web Development",
    desc: "Custom web applications, admin panels, and dashboards with clean, maintainable Laravel code.",
  },
  {
    num: "02",
    title: "Next.js Frontend",
    desc: "Fast, SEO-friendly frontends using Next.js with server-side rendering and static generation.",
  },
  {
    num: "03",
    title: "Responsive UI Design",
    desc: "Mobile-first, pixel-perfect interfaces built with Tailwind CSS and Bootstrap for any screen size.",
  },
  {
    num: "04",
    title: "REST API Development",
    desc: "Robust APIs for mobile apps, third-party tools, and payment gateway integrations.",
  },
  {
    num: "05",
    title: "Full-Stack Projects",
    desc: "End-to-end development — from database design to deployment — as a single reliable developer.",
  },
  {
    num: "06",
    title: "Bug Fixing & Maintenance",
    desc: "Debugging, refactoring, and maintaining existing Laravel or Next.js projects.",
  },
];

const Services = () => {
  return (
    <>
      <section id="services" className="max-w-[860px] mx-auto px-8 py-20">
        <div className="reveal">
          <div className="text-[12px] font-medium tracking-widest uppercase text-accent mb-3">
            What I do
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,40px)] tracking-tight leading-tight mb-10">
            Services
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
          {services.map((s) => (
            <div
              key={s.num}
              className="service-card glass-card reveal relative p-6 overflow-hidden transition-all hover:-translate-y-0.5"
            >
              <div className="font-serif text-[36px] text-black/10 leading-none mb-3">
                {s.num}
              </div>
              <div className="font-medium text-[15px] text-ink mb-2">
                {s.title}
              </div>
              <div className="text-[13px] text-ink-2 leading-relaxed">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
