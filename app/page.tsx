"use client";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import { useReveal } from "@/components/useReveal";

export default function Home() {
  useReveal();

  return (
    <>
      <Navbar />
      <Hero />

      <div className="max-w-[860px] mx-auto px-8">
        <hr className="border-none border-t border-black/10" />
      </div>

      <Skills />

      <div className="max-w-[860px] mx-auto px-8">
        <hr className="border-none border-t border-black/10" />
      </div>

      {/* SERVICES */}
      <Services />

      <div className="max-w-[860px] mx-auto px-8">
        <hr className="border-none border-t border-black/10" />
      </div>

      {/* PROJECTS */}
      <Projects />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <footer className="max-w-[860px] mx-auto px-8 pb-12 flex justify-between items-center">
        <span className="text-[13px] text-ink-3">
          © 2026 Md Samsad Ali. All rights reserved.
        </span>
        <a
          href="#"
          className="text-[13px] text-ink-3 no-underline hover:text-accent transition-colors"
        >
          Back to top ↑
        </a>
      </footer>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeLeft {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
