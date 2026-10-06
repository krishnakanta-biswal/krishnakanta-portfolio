import { motion } from "motion/react";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";

const experiences = [
  {
    number: "01",
    company: "SequSpace Technology Private Limited",
    role: "React Developer",
    type: "Current Role",
    period: "Present",
    location: "Bhubaneswar, Odisha",
    description:
      "Working on modern web applications with React, JavaScript and responsive UI development. Building reusable components, implementing interfaces from designs and contributing to real-world product development.",
    technologies: [
      "React",
      "JavaScript",
      "React Native",
      "Tailwind CSS",
      "Git",
      "REST APIs",
    ],
    current: true,
  },
  {
    number: "02",
    company: "Prodigy InfoTech",
    role: "Frontend Development Intern",
    type: "Internship",
    period: "2025",
    location: "Remote",
    description:
      "Worked on frontend development tasks and practical web projects while strengthening fundamentals in HTML, CSS, JavaScript and responsive interface development.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Git",
    ],
    current: false,
  },
  {
    number: "03",
    company: "Bluestock Fintech",
    role: "Frontend Development Intern",
    type: "Internship",
    period: "2025",
    location: "Remote",
    description:
      "Gained practical experience working on frontend interfaces and applying web development concepts in a professional project environment.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Frontend Development",
      "Git",
    ],
    current: false,
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-[#FFFFE4]
        px-6
        py-28
        text-slate-900
        transition-colors
        duration-500
        md:px-10
        lg:px-16
        dark:bg-[#050816]
        dark:text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-10%]
          top-[20%]
          h-80
          w-80
          rounded-full
          bg-blue-500/[0.07]
          blur-[130px]
          dark:bg-blue-600/[0.05]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          right-[-5%]
          h-96
          w-96
          rounded-full
          bg-violet-500/[0.06]
          blur-[140px]
          dark:bg-violet-600/[0.05]
        "
      />

      <div className="mx-auto max-w-7xl">
        {/* ===================================================
            HEADER
        =================================================== */}

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
            amount: 0.2,
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
              Experience
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2
                className="
                  max-w-4xl
                  text-4xl
                  font-black
                  leading-tight
                  tracking-[-0.035em]
                  text-slate-950
                  sm:text-5xl
                  md:text-6xl
                  dark:text-white
                "
              >
                Building experience through{" "}
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
                  real projects.
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
                A journey from learning frontend fundamentals to contributing
                to real-world web and mobile products.
              </p>
            </div>

            {/* Small experience badge */}

            <div
              className="
                hidden
                shrink-0
                items-center
                gap-3
                rounded-2xl
                border
                border-[#cfc47b]/35
                bg-white/[0.42]
                px-5
                py-4
                shadow-[0_12px_35px_rgba(120,100,20,0.06)]
                backdrop-blur-sm
                lg:flex
                dark:border-white/[0.07]
                dark:bg-white/[0.02]
                dark:shadow-none
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-blue-500/15
                  bg-blue-500/[0.07]
                  dark:border-blue-400/10
                  dark:bg-blue-400/[0.05]
                "
              >
                <BriefcaseBusiness
                  size={18}
                  className="text-blue-600 dark:text-blue-400"
                />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    text-slate-500
                    dark:text-slate-600
                  "
                >
                  Career focus
                </p>

                <p
                  className="
                    text-sm
                    font-semibold
                    text-slate-900
                    dark:text-white
                  "
                >
                  Frontend Development
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            EXPERIENCE LIST
        =================================================== */}

        <div className="relative">
          {/* Main timeline */}

          <div
            className="
              absolute
              left-[23px]
              top-8
              hidden
              h-[calc(100%-64px)]
              w-px
              bg-gradient-to-b
              from-blue-500/30
              via-slate-900/[0.08]
              to-transparent
              md:block
              dark:from-blue-400/30
              dark:via-white/[0.08]
            "
          />

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.company}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className={`group relative md:pl-16 ${
                  experience.current ? "md:pl-16" : ""
                }`}
              >
                {/* Timeline dot */}

                <div
                  className={`absolute left-[14px] top-8 hidden h-[19px] w-[19px] items-center justify-center rounded-full border md:flex ${
                    experience.current
                      ? "border-blue-500/40 bg-[#FFFFE4] dark:border-blue-400/40 dark:bg-[#050816]"
                      : "border-slate-900/10 bg-[#FFFFE4] dark:border-white/10 dark:bg-[#050816]"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      experience.current
                        ? "bg-blue-500 shadow-lg shadow-blue-500/40 dark:bg-blue-400 dark:shadow-blue-400/60"
                        : "bg-slate-400 dark:bg-slate-600"
                    }`}
                  />
                </div>

                {/* =================================================
                    EXPERIENCE CARD
                ================================================= */}

                <div
                  className={`relative overflow-hidden rounded-[28px] border p-6 transition-all duration-500 sm:p-7 lg:p-8 ${
                    experience.current
                      ? "border-blue-500/20 bg-gradient-to-br from-blue-500/[0.07] via-white/[0.38] to-violet-500/[0.05] shadow-[0_20px_55px_rgba(60,90,180,0.08)] dark:border-blue-400/20 dark:from-blue-500/[0.07] dark:via-white/[0.025] dark:to-violet-500/[0.04] dark:shadow-2xl dark:shadow-blue-950/20"
                      : "border-slate-900/[0.07] bg-white/[0.38] shadow-[0_15px_45px_rgba(100,90,30,0.05)] hover:border-slate-900/[0.12] hover:bg-white/[0.50] dark:border-white/[0.07] dark:bg-white/[0.02] dark:shadow-none dark:hover:border-white/[0.12] dark:hover:bg-white/[0.03]"
                  }`}
                >
                  {/* Current role glow */}

                  {experience.current && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        right-[-40px]
                        top-[-40px]
                        h-48
                        w-48
                        rounded-full
                        bg-blue-400/[0.10]
                        blur-3xl
                        dark:bg-blue-500/[0.09]
                      "
                    />
                  )}

                  {/* Hover glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-[-80px]
                      left-[-60px]
                      h-48
                      w-48
                      rounded-full
                      bg-violet-400/[0.06]
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                      dark:bg-violet-500/[0.04]
                    "
                  />

                  <div className="relative">
                    {/* =================================================
                        TOP ROW
                    ================================================= */}

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      {/* Company information */}

                      <div className="flex gap-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${
                            experience.current
                              ? "border-blue-500/20 bg-blue-500/[0.07] dark:border-blue-400/20 dark:bg-blue-400/[0.07]"
                              : "border-slate-900/[0.07] bg-white/[0.45] dark:border-white/[0.07] dark:bg-white/[0.025]"
                          }`}
                        >
                          <Code2
                            size={21}
                            className={
                              experience.current
                                ? "text-blue-600 dark:text-blue-400"
                                : "text-slate-500"
                            }
                          />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3
                              className="
                                text-xl
                                font-bold
                                tracking-tight
                                text-slate-950
                                sm:text-2xl
                                dark:text-white
                              "
                            >
                              {experience.company}
                            </h3>

                            {experience.current && (
                              <span
                                className="
                                  flex
                                  items-center
                                  gap-1.5
                                  rounded-full
                                  border
                                  border-emerald-500/15
                                  bg-emerald-500/[0.06]
                                  px-2.5
                                  py-1
                                  text-[9px]
                                  font-semibold
                                  uppercase
                                  tracking-wider
                                  text-emerald-700
                                  dark:border-emerald-400/15
                                  dark:bg-emerald-400/[0.05]
                                  dark:text-emerald-300
                                "
                              >
                                <span
                                  className="
                                    h-1.5
                                    w-1.5
                                    rounded-full
                                    bg-emerald-500
                                    dark:bg-emerald-400
                                  "
                                />
                                Current
                              </span>
                            )}
                          </div>

                          <p
                            className="
                              mt-1
                              text-sm
                              font-medium
                              text-blue-600
                              dark:text-blue-400
                            "
                          >
                            {experience.role}
                          </p>
                        </div>
                      </div>

                      {/* Period */}

                      <div
                        className="
                          flex
                          shrink-0
                          items-center
                          gap-2
                          text-xs
                          text-slate-500
                          lg:pt-1
                          dark:text-slate-500
                        "
                      >
                        <CalendarDays size={14} />

                        <span>{experience.period}</span>
                      </div>
                    </div>

                    {/* =================================================
                        META
                    ================================================= */}

                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      <span
                        className="
                          rounded-full
                          border
                          border-slate-900/[0.07]
                          bg-white/[0.45]
                          px-3
                          py-1.5
                          text-[11px]
                          text-slate-600
                          dark:border-white/[0.06]
                          dark:bg-white/[0.025]
                          dark:text-slate-500
                        "
                      >
                        {experience.type}
                      </span>

                      <span
                        className="
                          rounded-full
                          border
                          border-slate-900/[0.07]
                          bg-white/[0.45]
                          px-3
                          py-1.5
                          text-[11px]
                          text-slate-600
                          dark:border-white/[0.06]
                          dark:bg-white/[0.025]
                          dark:text-slate-500
                        "
                      >
                        {experience.location}
                      </span>
                    </div>

                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    <p
                      className="
                        mt-6
                        max-w-4xl
                        text-sm
                        leading-7
                        text-slate-600
                        sm:text-base
                        dark:text-slate-400
                      "
                    >
                      {experience.description}
                    </p>

                    {/* =================================================
                        TECHNOLOGIES
                    ================================================= */}

                    <div className="mt-7 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-lg
                            border
                            border-slate-900/[0.07]
                            bg-white/[0.45]
                            px-3
                            py-2
                            text-[11px]
                            font-medium
                            text-slate-600
                            transition-colors
                            duration-300
                            group-hover:text-slate-800
                            dark:border-white/[0.06]
                            dark:bg-black/10
                            dark:text-slate-500
                            dark:group-hover:text-slate-400
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* =================================================
                        CURRENT ROLE FOOTER
                    ================================================= */}

                    {experience.current && (
                      <div
                        className="
                          mt-7
                          flex
                          flex-col
                          gap-4
                          border-t
                          border-slate-900/[0.07]
                          pt-6
                          sm:flex-row
                          sm:items-center
                          sm:justify-between
                          dark:border-white/[0.06]
                        "
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="
                              flex
                              h-9
                              w-9
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
                            <Sparkles
                              size={15}
                              className="text-blue-600 dark:text-blue-400"
                            />
                          </div>

                          <div>
                            <p
                              className="
                                text-[10px]
                                uppercase
                                tracking-[0.18em]
                                text-slate-500
                                dark:text-slate-600
                              "
                            >
                              Current focus
                            </p>

                            <p
                              className="
                                mt-0.5
                                text-xs
                                font-medium
                                text-slate-700
                                dark:text-slate-300
                              "
                            >
                              Building modern web & mobile experiences
                            </p>
                          </div>
                        </div>

                        <a
                          href="https://www.linkedin.com/in/krishnakanta-biswal-089007327/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            group/link
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
                          View LinkedIn

                          <ArrowUpRight
                            size={14}
                            className="
                              transition-transform
                              duration-300
                              group-hover/link:-translate-y-0.5
                              group-hover/link:translate-x-0.5
                            "
                          />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ===================================================
            BOTTOM STATEMENT
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-12
            flex
            items-center
            gap-4
            border-t
            border-slate-900/[0.07]
            pt-8
            dark:border-white/[0.06]
          "
        >
          <Layers3
            size={18}
            className="shrink-0 text-blue-600 dark:text-blue-400"
          />

          <p
            className="
              text-sm
              leading-6
              text-slate-600
              dark:text-slate-500
            "
          >
            Every role has been a step toward becoming a stronger frontend
            engineer — from learning the fundamentals to working on real
            products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;