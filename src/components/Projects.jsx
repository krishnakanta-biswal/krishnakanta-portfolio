import { motion } from "motion/react";

import {
  ArrowDownToLine,
  ArrowUpRight,
  ExternalLink,
  Layers3,
  Smartphone,
} from "lucide-react";

/* =========================================================
   GITHUB ICON
========================================================= */

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

/* =========================================================
   DATA
========================================================= */

const projects = [
  {
    number: "01",
    type: "WEB APPLICATION",
    title: "SequTrack",
    subtitle: "Workforce Management Platform",

    description:
      "A modern workforce management platform designed to simplify employee productivity, task management, attendance, leave management and organizational workflows through focused web experiences.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "Responsive Design",
    ],

    images: [
      {
        src: "/projects/sequtrack-employee.png",
        label: "Employee Dashboard",
      },
      {
        src: "/projects/sequtrack-admin.png",
        label: "Admin Dashboard",
      },
    ],

    live: "https://sequtrack.sequspace.com/",

    github: "https://github.com/krishnakanta-biswal",

    accent: "blue",
  },

  {
    number: "02",
    type: "MOBILE APPLICATION",
    title: "PadhaAIgo",
    subtitle: "AI-Powered Student Companion",

    description:
      "A student-focused mobile application concept designed to make learning more accessible through AI-powered doubt solving, personalized career guidance and institute discovery.",

    technologies: [
      "React Native",
      "JavaScript",
      "AI",
      "Mobile UI",
      "Location Services",
    ],

    images: [
      {
        src: "/projects/padhaai-go.jpeg",
        label: "PadhaAIgo Mobile App",
      },
    ],

    apk: "/projects/padhaai-go.apk",

    github: "https://github.com/krishnakanta-biswal",

    accent: "violet",
  },
];

/* =========================================================
   IMAGE SHOWCASE
========================================================= */

function ProjectVisual({ project }) {
  const isBlue = project.accent === "blue";

  return (
    <div
      className="
        relative
        overflow-hidden
        border-b
        border-slate-900/[0.07]
        bg-[#fffedc]
        dark:border-white/[0.06]
        dark:bg-[#070c1b]
      "
    >
      {/* Background glow */}

      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px] ${
          isBlue
            ? "bg-blue-500/[0.10] dark:bg-blue-500/[0.08]"
            : "bg-violet-500/[0.10] dark:bg-violet-500/[0.10]"
        }`}
      />

      {/* Grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.30]
          dark:opacity-[0.25]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(100,90,30,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(100,90,30,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 p-5 sm:p-8 lg:p-10">
        {project.images.length === 2 ? (
          <div className="grid gap-5 lg:grid-cols-2">
            {project.images.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group/image
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-900/[0.08]
                  bg-white/[0.65]
                  shadow-[0_18px_45px_rgba(100,90,30,0.10)]
                  dark:border-white/[0.08]
                  dark:bg-[#0b1124]
                  dark:shadow-2xl
                  dark:shadow-black/30
                "
              >
                {/* Image */}

                <img
                  src={image.src}
                  alt={`${project.title} ${image.label}`}
                  className="block h-auto w-full object-cover transition-transform duration-700 group-hover/image:scale-[1.025]"
                />

                {/* Bottom overlay */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    flex
                    items-center
                    justify-between
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                    px-4
                    pb-4
                    pt-12
                  "
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                    {image.label}
                  </span>

                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-md ${
                      isBlue
                        ? "text-blue-300"
                        : "text-violet-300"
                    }`}
                  >
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[500px] items-center justify-center">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                relative
                max-w-[330px]
                overflow-hidden
                rounded-[28px]
                border
                border-violet-500/15
                bg-white/[0.60]
                shadow-[0_25px_60px_rgba(100,80,160,0.12)]
                dark:border-white/[0.10]
                dark:bg-[#08101f]
                dark:shadow-2xl
                dark:shadow-violet-950/30
              "
            >
              <img
                src={project.images[0].src}
                alt={project.images[0].label}
                className="block h-auto w-full transition-transform duration-700 hover:scale-[1.015]"
              />

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-white/10
                  bg-black/40
                  px-4
                  py-3
                  backdrop-blur-xl
                "
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300">
                    <Smartphone size={17} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold text-white">
                      PadhaAIgo
                    </p>

                    <p className="text-[8px] text-slate-500">
                      Mobile Experience
                    </p>
                  </div>
                </div>

                <span className="text-[9px] uppercase tracking-[0.15em] text-violet-300">
                  App
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Large background number */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-30px]
          right-5
          text-[130px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-slate-900/[0.025]
          sm:right-10
          sm:text-[180px]
          dark:text-white/[0.025]
        "
      >
        {project.number}
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
  const isBlue = project.accent === "blue";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-slate-900/[0.07]
        bg-white/[0.42]
        shadow-[0_22px_60px_rgba(100,90,30,0.08)]
        backdrop-blur-sm
        dark:border-white/[0.07]
        dark:bg-[#090e20]
        dark:shadow-2xl
        dark:shadow-black/20
      "
    >
      {/* Card glow */}

      <div
        className={`pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full blur-[140px] ${
          isBlue
            ? "bg-blue-500/[0.07] dark:bg-blue-500/[0.06]"
            : "bg-violet-500/[0.08] dark:bg-violet-500/[0.07]"
        }`}
      />

      {/* Header */}

      <div
        className="
          relative
          flex
          items-center
          justify-between
          border-b
          border-slate-900/[0.07]
          px-6
          py-5
          sm:px-8
          dark:border-white/[0.06]
        "
      >
        <div className="flex items-center gap-3">
          <span
            className={`text-xs font-bold ${
              isBlue
                ? "text-blue-600 dark:text-blue-400"
                : "text-violet-600 dark:text-violet-400"
            }`}
          >
            {project.number}
          </span>

          <span className="h-px w-8 bg-slate-900/10 dark:bg-white/10" />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-slate-500
              sm:text-[10px]
              dark:text-slate-600
            "
          >
            {project.type}
          </span>
        </div>

        <span
          className="
            hidden
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-slate-500
            sm:block
            dark:text-slate-700
          "
        >
          Featured Project
        </span>
      </div>

      {/* Visual */}

      <ProjectVisual project={project} />

      {/* Content */}

      <div className="relative p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* Information */}

          <div className="max-w-3xl">
            <p
              className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
                isBlue
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-violet-600 dark:text-violet-400"
              }`}
            >
              {project.subtitle}
            </p>

            <h3
              className="
                mt-3
                text-4xl
                font-black
                tracking-[-0.045em]
                text-slate-950
                sm:text-5xl
                dark:text-white
              "
            >
              {project.title}
              <span
                className={
                  isBlue
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-violet-600 dark:text-violet-400"
                }
              >
                .
              </span>
            </h3>

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-slate-600
                sm:text-base
                dark:text-slate-500
              "
            >
              {project.description}
            </p>

            {/* Tech stack */}

            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-slate-900/[0.07]
                    bg-white/[0.50]
                    px-3
                    py-1.5
                    text-[10px]
                    font-medium
                    text-slate-600
                    transition-all
                    duration-300
                    group-hover:border-slate-900/[0.10]
                    group-hover:text-slate-800
                    dark:border-white/[0.07]
                    dark:bg-white/[0.025]
                    dark:text-slate-500
                    dark:group-hover:border-white/[0.10]
                    dark:group-hover:text-slate-400
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}

          <div className="flex shrink-0 flex-wrap gap-2">
            {/* GitHub */}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-slate-900/[0.08]
                bg-white/[0.50]
                text-slate-600
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-slate-900/20
                hover:bg-white/[0.75]
                hover:text-slate-950
                dark:border-white/[0.08]
                dark:bg-white/[0.025]
                dark:text-slate-400
                dark:hover:border-white/20
                dark:hover:bg-white/[0.06]
                dark:hover:text-white
              "
            >
              <GithubIcon size={18} />
            </a>

            {/* Live project */}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/live flex h-12 items-center gap-2 rounded-xl px-4 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 ${
                  isBlue
                    ? "bg-blue-500 shadow-lg shadow-blue-500/20 hover:bg-blue-400"
                    : "bg-violet-500 shadow-lg shadow-violet-500/20 hover:bg-violet-400"
                }`}
              >
                Live Demo

                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover/live:-translate-y-0.5
                    group-hover/live:translate-x-0.5
                  "
                />
              </a>
            )}

            {/* APK */}

            {project.apk && (
              <a
                href={project.apk}
                download
                className="
                  group/apk
                  flex
                  h-12
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-violet-500/20
                  bg-violet-500/[0.07]
                  px-4
                  text-xs
                  font-bold
                  text-violet-700
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-violet-500/40
                  hover:bg-violet-500/[0.11]
                  dark:border-violet-400/20
                  dark:bg-violet-400/[0.06]
                  dark:text-violet-300
                  dark:hover:border-violet-400/40
                  dark:hover:bg-violet-400/[0.10]
                "
              >
                APK

                <ArrowDownToLine
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover/apk:translate-y-0.5
                  "
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   PROJECTS SECTION
========================================================= */

function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-[#FFFFE4]
        px-6
        py-32
        text-slate-900
        transition-colors
        duration-500
        md:px-10
        lg:px-16
        dark:bg-[#050816]
        dark:text-white
      "
    >
      {/* Background atmosphere */}

      <div
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-[5%]
          h-96
          w-96
          rounded-full
          bg-blue-400/[0.07]
          blur-[150px]
          dark:bg-blue-600/[0.035]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[5%]
          right-[10%]
          h-96
          w-96
          rounded-full
          bg-violet-400/[0.06]
          blur-[150px]
          dark:bg-violet-600/[0.035]
        "
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span
              className="
                h-px
                w-8
                bg-blue-500
                dark:bg-blue-400
              "
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-blue-600
                dark:text-blue-400
              "
            >
              Selected Work
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h2
                className="
                  max-w-4xl
                  text-4xl
                  font-black
                  leading-[1.04]
                  tracking-[-0.05em]
                  text-slate-950
                  sm:text-5xl
                  md:text-6xl
                  dark:text-white
                "
              >
                Products I've helped{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-blue-600
                    via-cyan-500
                    to-violet-600
                    bg-clip-text
                    text-transparent
                    dark:from-blue-400
                    dark:via-cyan-300
                    dark:to-violet-400
                  "
                >
                  bring to life.
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-base
                  leading-7
                  text-slate-600
                  sm:text-lg
                  dark:text-slate-500
                "
              >
                Real products, real interfaces and real engineering
                work — built with a focus on usability, performance
                and modern frontend experiences.
              </p>
            </div>

            {/* Project count */}

            <div className="flex shrink-0 items-center gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-slate-900/[0.07]
                  bg-white/[0.50]
                  shadow-[0_8px_25px_rgba(100,90,30,0.05)]
                  dark:border-white/[0.07]
                  dark:bg-white/[0.025]
                  dark:shadow-none
                "
              >
                <Layers3
                  size={19}
                  className="text-blue-600 dark:text-blue-400"
                />
              </div>

              <div>
                <p
                  className="
                    text-2xl
                    font-bold
                    text-slate-950
                    dark:text-white
                  "
                >
                  02
                </p>

                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-slate-500
                    dark:text-slate-600
                  "
                >
                  Featured Projects
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects */}

        <div className="space-y-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-12
            flex
            flex-col
            gap-5
            rounded-[26px]
            border
            border-slate-900/[0.07]
            bg-white/[0.35]
            p-6
            shadow-[0_15px_40px_rgba(100,90,30,0.05)]
            backdrop-blur-sm
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:p-7
            dark:border-white/[0.06]
            dark:bg-white/[0.015]
            dark:shadow-none
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-blue-500/15
                bg-blue-500/[0.06]
                dark:border-blue-400/10
                dark:bg-blue-400/[0.05]
              "
            >
              <Layers3
                size={18}
                className="text-blue-600 dark:text-blue-400"
              />
            </div>

            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  text-slate-900
                  dark:text-white
                "
              >
                Want to see more of my work?
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-slate-500
                  dark:text-slate-600
                "
              >
                Explore my repositories and experiments on GitHub.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/krishnakanta-biswal"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-xs
              font-semibold
              text-blue-600
              transition-colors
              hover:text-blue-500
              dark:text-blue-400
              dark:hover:text-blue-300
            "
          >
            Explore GitHub

            <ExternalLink
              size={14}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;