import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

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

/* ================= HERO ================= */

function Hero() {
  return (
    <section
      id="home"
      className="grid-background relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 md:px-10 lg:px-16"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

        {/* ================= LEFT CONTENT ================= */}

        <div>

          {/* Availability badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-medium text-emerald-300">
              React Developer · Building & Learning
            </span>
          </motion.div>

          {/* Main heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="max-w-5xl text-5xl font-black leading-[1.27] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-6xl"
          >
            Building

            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              digital
            </span>

            experiences.
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="mt-8 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
          >
            I'm{" "}
            <span className="font-semibold text-white">
              Krishnakanta Biswal
            </span>
            , a React Developer focused on building modern web and mobile
            experiences with clean interfaces, reusable components and
            thoughtful interactions.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            {/* Projects */}

            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Explore Projects

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Contact */}

            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              Let's Connect

              <ArrowDownRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* ================= SOCIAL LINKS ================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="mt-8 flex items-center gap-3"
          >
            <span className="mr-2 text-xs uppercase tracking-[0.2em] text-slate-600">
              Connect
            </span>

            {/* GitHub */}

            <a
              href="https://github.com/krishnakanta-biswal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              <GithubIcon size={16} />
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/krishnakanta-biswal-089007327/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-400/5 hover:text-blue-400"
            >
              <LinkedinIcon size={17} />
            </a>
          </motion.div>
        </div>

        {/* ================= RIGHT VISUAL ================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="relative hidden h-[500px] items-center justify-center lg:flex"
        >
          {/* Glow */}

          <div className="absolute h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

          {/* Orbit */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[380px] w-[380px] rounded-full border border-white/5"
          >
            <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/70" />

            <div className="absolute bottom-10 right-3 h-3 w-3 rounded-full bg-violet-400 shadow-lg shadow-violet-500/70" />
          </motion.div>

          {/* Developer card */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass relative w-[320px] rounded-3xl p-6 shadow-2xl shadow-blue-950/40"
          >
            {/* Card header */}

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-slate-800 shadow-lg shadow-blue-500/20">
                  <img
                    src="/Krishna-photo.jpg"
                    alt="Krishnakanta Biswal"
                    className="h-full w-full object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Krishnakanta
                  </p>

                  <p className="text-xs text-slate-500">
                    React Developer
                  </p>
                </div>
              </div>

              <Sparkles
                className="text-blue-400"
                size={20}
              />
            </div>

            <div className="my-6 h-px bg-white/5" />

            {/* Current focus */}

            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Currently building
            </p>

            <p className="mt-2 text-2xl font-bold text-white">
              Modern Web

              <span className="block text-blue-400">
                Experiences
              </span>
            </p>

            {/* Technologies */}

            <div className="mt-6 grid grid-cols-2 gap-2">
              {[
                "React",
                "JavaScript",
                "React Native",
                "Tailwind",
              ].map((tech) => (
                <div
                  key={tech}
                  className="rounded-xl border border-white/5 bg-white/[0.025] px-3 py-2.5 text-center text-xs text-slate-400"
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* Experience */}

            <div className="mt-5 flex items-center justify-between rounded-xl bg-blue-500/5 px-4 py-3">
              <span className="text-xs text-slate-400">
                Focus
              </span>

              <span className="text-xs font-semibold text-blue-300">
                React · Web · Mobile
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-600 md:flex"
      >
        Scroll

        <ArrowDownRight size={14} />
      </motion.a>
    </section>
  );
}

export default Hero;