"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[860px] mx-auto px-8 h-[62px] flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl text-ink tracking-tight italic"
        >
          Md Samsad Ali.
        </Link>
        <ul className="hidden md:flex gap-8 list-none">
          {["Skills", "Services", "Projects"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm text-ink-2 no-underline hover:text-accent transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="btn-glass text-sm font-medium px-5 py-2 rounded-full no-underline text-ink transition-all hover:-translate-y-px hover:bg-white/70"
          >
            Hire me
          </a>

          <a
            href="/cv/MdSamsadAli.pdf"
            download="MdSamsadAli.pdf"
            className="btn-glass text-sm font-medium px-5 py-2 rounded-full no-underline text-ink transition-all hover:-translate-y-px hover:bg-white/60"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
