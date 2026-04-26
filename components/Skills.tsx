import React from "react";

const skills = [
  { name: "Laravel", tag: "Backend framework", level: 80 },
  { name: "PHP", tag: "Server-side language", level: 75 },
  { name: "Next.js", tag: "React framework", level: 70 },
  { name: "Tailwind CSS", tag: "Utility-first CSS", level: 82 },
  { name: "Bootstrap", tag: "CSS framework", level: 85 },
  { name: "MySQL", tag: "Relational database", level: 72 },
  { name: "REST APIs", tag: "API design & integration", level: 75 },
  { name: "Git & GitHub", tag: "Version control", level: 70 },
];

const Skills = () => {
  return (
    <>
      {/* SKILLS */}
      <section id="skills" className="max-w-[860px] mx-auto px-8 py-20">
        <div className="reveal">
          <div className="text-[12px] font-medium tracking-widest uppercase text-accent mb-3">
            What I know
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,40px)] tracking-tight leading-tight mb-10">
            My tech stack
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card reveal p-4 transition-all hover:border-white/80 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              <div className="font-medium text-[14px] text-ink">
                {skill.name}
              </div>
              <div className="text-[12px] text-ink-3 mt-0.5">{skill.tag}</div>
              <div className="h-[3px] bg-black/10 rounded-full mt-3">
                <div
                  className="h-[3px] rounded-full bg-accent"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
