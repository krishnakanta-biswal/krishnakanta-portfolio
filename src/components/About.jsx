import { motion } from "motion/react";

import {
  ArrowUpRight,
  Code2,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";

function About() {
  const highlights = [
    {
      number: "01",
      title: "Developer",
      description:
        "Focused on building modern, responsive and maintainable interfaces with React and JavaScript.",
      icon: Code2,
    },
    {
      number: "02",
      title: "Builder",
      description:
        "I enjoy turning ideas and designs into real products with thoughtful user experiences.",
      icon: Rocket,
    },
    {
      number: "03",
      title: "Continuous Learner",
      description:
        "Always improving my frontend fundamentals while exploring mobile development and new technologies.",
      icon: Layers3,
    },
  ];

  return (
    <section
      id="about"
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
      {/* Background glows */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-10%]
          top-[20%]
          h-72
          w-72
          rounded-full
          bg-blue-500/[0.07]
          blur-[120px]
          dark:bg-blue-600/[0.06]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          right-[-5%]
          h-80
          w-80
          rounded-full
          bg-violet-500/[0.06]
          blur-[130px]
          dark:bg-violet-600/[0.05]
        "
      />

      <div className="mx-auto max-w-7xl">
        {/* =================================================
            SECTION HEADING
        ================================================= */}

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
              About Me
            </span>
          </div>

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
            Turning ideas into{" "}
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
              useful experiences.
            </span>
          </h2>
        </motion.div>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* =================================================
              LEFT — ABOUT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div
              className="
                relative
                rounded-[28px]
                border
                border-[#cfc47b]/35
                bg-white/[0.42]
                p-7
                shadow-[0_20px_60px_rgba(120,100,20,0.08)]
                backdrop-blur-sm
                sm:p-9
                dark:border-white/[0.07]
                dark:bg-white/[0.02]
                dark:shadow-none
              "
            >
              {/* Top glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  h-32
                  w-32
                  rounded-full
                  bg-blue-400/[0.08]
                  blur-3xl
                  dark:bg-blue-500/[0.06]
                "
              />

              <div className="relative">
                {/* Small label */}

                <div className="mb-7 flex items-center gap-2">
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
                      bg-blue-500/[0.07]
                      dark:border-blue-400/10
                      dark:bg-blue-400/[0.06]
                    "
                  >
                    <Sparkles
                      size={17}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </div>

                  <span
                    className="
                      text-sm
                      font-medium
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    A little about me
                  </span>
                </div>

                {/* Main paragraph */}

                <p
                  className="
                    text-lg
                    leading-8
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  I'm{" "}
                  <span
                    className="
                      font-semibold
                      text-slate-950
                      dark:text-white
                    "
                  >
                    Krishnakanta Biswal
                  </span>
                  , a React Developer who enjoys turning ideas, designs and
                  requirements into clean and functional digital experiences.
                </p>

                <p
                  className="
                    mt-5
                    text-base
                    leading-7
                    text-slate-600
                    dark:text-slate-500
                  "
                >
                  My primary focus is frontend development with React and
                  JavaScript. I enjoy working on responsive interfaces,
                  reusable components and real-world applications that solve
                  practical problems.
                </p>

                <p
                  className="
                    mt-5
                    text-base
                    leading-7
                    text-slate-600
                    dark:text-slate-500
                  "
                >
                  Alongside web development, I'm also exploring React Native
                  and mobile application development while continuously
                  strengthening my JavaScript and software engineering
                  fundamentals.
                </p>

                {/* =================================================
                    CURRENT FOCUS
                ================================================= */}

                <div
                  className="
                    mt-8
                    border-t
                    border-slate-900/[0.07]
                    pt-7
                    dark:border-white/[0.06]
                  "
                >
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-slate-500
                      dark:text-slate-600
                    "
                  >
                    Currently focused on
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "React",
                      "JavaScript",
                      "React Native",
                      "Responsive UI",
                      "Component Architecture",
                    ].map((item) => (
                      <span
                        key={item}
                        className="
                          rounded-full
                          border
                          border-slate-900/[0.08]
                          bg-white/[0.55]
                          px-3.5
                          py-2
                          text-xs
                          text-slate-600
                          transition-colors
                          duration-300
                          hover:border-blue-500/25
                          hover:text-blue-600
                          dark:border-white/[0.07]
                          dark:bg-white/[0.025]
                          dark:text-slate-400
                          dark:hover:border-blue-400/20
                          dark:hover:text-blue-300
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* =================================================
                    LINKS
                ================================================= */}

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/krishnakanta-biswal-089007327/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-blue-500/15
                      bg-blue-500/[0.07]
                      px-4
                      py-3
                      text-sm
                      font-semibold
                      text-blue-700
                      shadow-[0_6px_20px_rgba(37,99,235,0.06)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-blue-500/[0.11]
                      dark:border-transparent
                      dark:bg-white
                      dark:text-slate-950
                      dark:shadow-none
                      dark:hover:bg-blue-50
                    "
                  >
                    LinkedIn

                    <ArrowUpRight
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </a>

                  <a
                    href="https://github.com/krishnakanta-biswal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-slate-900/[0.08]
                      bg-white/[0.45]
                      px-4
                      py-3
                      text-sm
                      font-semibold
                      text-slate-800
                      shadow-[0_6px_20px_rgba(80,80,40,0.05)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-slate-900/15
                      hover:bg-white/[0.65]
                      dark:border-white/10
                      dark:bg-white/[0.03]
                      dark:text-white
                      dark:shadow-none
                      dark:hover:border-white/20
                      dark:hover:bg-white/[0.06]
                    "
                  >
                    GitHub

                    <ArrowUpRight
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — HIGHLIGHTS
          ================================================= */}

          <div className="flex flex-col gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-slate-900/[0.07]
                    bg-white/[0.38]
                    p-6
                    shadow-[0_14px_40px_rgba(100,90,30,0.06)]
                    backdrop-blur-sm
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-blue-500/20
                    hover:bg-white/[0.52]
                    dark:border-white/[0.07]
                    dark:bg-white/[0.02]
                    dark:shadow-none
                    dark:hover:border-blue-400/20
                    dark:hover:bg-white/[0.035]
                  "
                >
                  {/* Hover glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-blue-500/[0.10]
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                      dark:bg-blue-500/[0.08]
                    "
                  />

                  <div className="relative flex gap-5">
                    {/* Number */}

                    <div className="flex shrink-0 flex-col items-center">
                      <span
                        className="
                          text-xs
                          font-bold
                          text-blue-600/70
                          dark:text-blue-400/70
                        "
                      >
                        {item.number}
                      </span>

                      <div
                        className="
                          mt-3
                          h-10
                          w-px
                          bg-gradient-to-b
                          from-blue-500/30
                          to-transparent
                          dark:from-blue-400/30
                        "
                      />
                    </div>

                    {/* Content */}

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-slate-900/[0.07]
                            bg-white/[0.45]
                            transition-all
                            duration-300
                            group-hover:border-blue-500/20
                            group-hover:bg-blue-500/[0.06]
                            dark:border-white/[0.07]
                            dark:bg-white/[0.025]
                            dark:group-hover:border-blue-400/20
                            dark:group-hover:bg-blue-400/[0.06]
                          "
                        >
                          <Icon
                            size={18}
                            className="
                              text-slate-500
                              transition-colors
                              duration-300
                              group-hover:text-blue-600
                              dark:text-slate-400
                              dark:group-hover:text-blue-400
                            "
                          />
                        </div>

                        <h3
                          className="
                            text-lg
                            font-bold
                            text-slate-900
                            dark:text-white
                          "
                        >
                          {item.title}
                        </h3>
                      </div>

                      <p
                        className="
                          mt-4
                          max-w-md
                          text-sm
                          leading-6
                          text-slate-600
                          dark:text-slate-500
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* =================================================
                EXPERIENCE STATEMENT
            ================================================= */}

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
                delay: 0.35,
              }}
              className="
                mt-1
                rounded-[24px]
                border
                border-blue-500/15
                bg-gradient-to-br
                from-blue-500/[0.08]
                via-white/[0.30]
                to-violet-500/[0.06]
                p-6
                shadow-[0_14px_40px_rgba(70,90,180,0.05)]
                backdrop-blur-sm
                dark:border-blue-400/10
                dark:from-blue-500/[0.06]
                dark:via-transparent
                dark:to-violet-500/[0.04]
                dark:shadow-none
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-blue-600/80
                  dark:text-blue-400/70
                "
              >
                My approach
              </p>

              <p
                className="
                  mt-3
                  text-lg
                  font-semibold
                  leading-7
                  text-slate-800
                  dark:text-slate-200
                "
              >
                Clean code. Thoughtful interfaces. Continuous improvement.
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-slate-600
                  dark:text-slate-500
                "
              >
                I believe good frontend development is about more than making
                something look good — it should also be usable, maintainable
                and built with purpose.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;