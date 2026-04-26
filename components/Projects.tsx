import React from "react";

const projects = [
  {
    name: "Atmos Soft Tech",
    desc: "Built for own  platform that provided different services to grow your businesses in digital era. ",
    tags: ["Laravel API", "ReactJS", "MySQL", "Tailwind", "Bootstrap"],
    link: "https://atmossofttech.com/",
  },
  {
    name: "Nectar Digit",
    desc: "I build when I was working on this company. This is our previous working company site.",
    tags: ["Laravel", "Custom CSS", "Bootstrap"],
    link: "https://nectardigit.com/",
  },

  {
    name: "NS BUZZ",
    desc: "Cleaning and Service provide Company located in Qatar",
    tags: ["Laravel", "Custom CSS", "Bootstrap"],
    link: "https://nsbuzzservices.com/",
  },

  {
    name: "Nobel Maintenance",
    desc: "Cooling your working area. Provide 24 hour services",
    tags: ["Laravel", "Custom CSS", "Bootstrap"],
    link: "https://nobelmaintenance.com/",
  },

  {
    name: "KR Jyotish",
    desc: "Get your Jyotish online. Know about your kundali and everything about you and your life",
    tags: ["Laravel", "CSS", "Bootstrap"],
    link: "https://krjyotish.com/",
  },

  {
    name: "Girls Future Bright",
    desc: "Empower women. This is coaching center where teach to grow and get success in life",
    tags: ["NextJS", "CSS", "TailwindCSS"],
    link: "https://girlsfuturebright.netlify.app/",
  },

  {
    name: "C Marga",
    desc: "Online Booking Rent Room For travel different places",
    tags: ["Laravel", "CSS", "TailwindCSS"],
    link: "https://cmarga.com/",
  },
];

const Projects = () => {
  return (
    <>
      <section id="projects" className="max-w-[860px] mx-auto px-8 py-20">
        <div className="reveal">
          <div className="text-[12px] font-medium tracking-widest uppercase text-accent mb-3">
            My work
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,40px)] tracking-tight leading-tight mb-10">
            Projects
          </h2>
        </div>
        <div
          className="glass-card reveal overflow-hidden"
          style={{ borderRadius: "14px" }}
        >
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.link}
              className={`flex items-center justify-between gap-4 px-6 py-5 no-underline transition-colors hover:bg-white/30
                ${i < projects.length - 1 ? "border-b border-white/40" : ""}`}
            >
              <div className="flex-1">
                <div className="font-medium text-[15px] text-ink">{p.name}</div>
                <div className="text-[13px] text-ink-2 mt-0.5">{p.desc}</div>
                <div className="flex gap-1.5 flex-wrap mt-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-accent-soft text-accent font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-lg text-ink-3 flex-shrink-0">→</span>
            </a>
          ))}
          <div className="text-[12px] text-ink-3 italic text-center py-6 bg-white/10">
            More projects coming soon — add your real work here.
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
