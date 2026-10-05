import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Download,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

/* ================= GITHUB ICON ================= */

function GithubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.41 7.88 10.94.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 5.1c.97 0 1.94.13 2.85.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.27c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

/* ================= LINKEDIN ICON ================= */

function LinkedinIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Clean LinkedIn "in" mark */}
      <path d="M5.25 3.25a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.55 8.5h3.4V20h-3.4V8.5ZM9.2 8.5h3.25v1.57h.05c.45-.86 1.55-1.77 3.19-1.77 3.41 0 4.04 2.24 4.04 5.16V20h-3.37v-5.79c0-1.38-.03-3.15-1.92-3.15-1.92 0-2.21 1.5-2.21 3.05V20H9.2V8.5Z" />
    </svg>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <motion.header
        initial={{
          y: -30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6"
      >
        <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 shadow-2xl shadow-black/20 md:px-6">

          {/* ================= LOGO ================= */}

          <a
            href="#home"
            className="group flex items-center gap-3"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-slate-800 shadow-lg shadow-blue-500/20">
              <img
                src="/Krishna-photo.jpg"
                alt="Krishnakanta Biswal"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-bold tracking-wide text-white">
                Krishnakanta
              </p>

              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                React Developer
              </p>
            </div>
          </a>

          {/* ================= DESKTOP NAVIGATION ================= */}

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-xl px-4 py-2 text-sm font-medium text-slate-400 transition-all duration-300 hover:bg-white/5 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* ================= DESKTOP ACTIONS ================= */}

          <div className="hidden items-center gap-2 md:flex">

            {/* GitHub */}

            <a
              href="https://github.com/krishnakanta-biswal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              <GithubIcon size={17} />
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/krishnakanta-biswal-089007327/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-400/5 hover:text-blue-400"
            >
              <LinkedinIcon size={18} />
            </a>

            {/* Resume */}

            <a
              href="/resume.pdf"
              download="Krishnakanta-Biswal-Resume.pdf"
              className="ml-2 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:bg-white/5 lg:hidden"
          >
            {menuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </nav>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed left-4 right-4 top-[84px] z-40 lg:hidden"
          >
            <div className="glass rounded-2xl p-3 shadow-2xl">

              {/* Navigation links */}

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {item.name}
                </a>
              ))}

              <div className="my-2 h-px bg-white/5" />

              {/* Resume */}

              <a
                href="/resume.pdf"
                download="Krishnakanta-Biswal-Resume.pdf"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950"
              >
                <Download size={16} />
                Download Resume
              </a>

              {/* Social buttons */}

              <div className="mt-2 flex gap-2">

                {/* GitHub */}

                <a
                  href="https://github.com/krishnakanta-biswal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>

                {/* LinkedIn */}

                <a
                  href="https://www.linkedin.com/in/krishnakanta-biswal-089007327/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm text-slate-400 transition hover:border-blue-400/30 hover:bg-blue-400/5 hover:text-blue-400"
                >
                  <LinkedinIcon size={16} />
                  LinkedIn
                </a>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;