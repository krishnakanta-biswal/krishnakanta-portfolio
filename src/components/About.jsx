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
      className="relative overflow-hidden px-6 py-28 md:px-10 lg:px-16"
    >
      
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-72 w-72 rounded-full bg-blue-600/[0.06] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[-5%] h-80 w-80 rounded-full bg-violet-600/[0.05] blur-[130px]" />

      <div className="mx-auto max-w-7xl">


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
            <span className="h-px w-8 bg-blue-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              About Me
            </span>
          </div>

          <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-[-0.035em] text-white sm:text-5xl md:text-6xl">
            Turning ideas into{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              useful experiences.
            </span>
          </h2>
        </motion.div>


        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">


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
            <div className="relative rounded-[28px] border border-white/[0.07] bg-white/[0.02] p-7 backdrop-blur-sm sm:p-9">

              {/* Top glow */}

              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/[0.06] blur-3xl" />

              <div className="relative">

                {/* Small label */}

                <div className="mb-7 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-400/[0.06]">
                    <Sparkles
                      size={17}
                      className="text-blue-400"
                    />
                  </div>

                  <span className="text-sm font-medium text-slate-400">
                    A little about me
                  </span>
                </div>

                {/* Main paragraph */}

                <p className="text-lg leading-8 text-slate-300">
                  I'm{" "}
                  <span className="font-semibold text-white">
                    Krishnakanta Biswal
                  </span>
                  , a React Developer who enjoys turning ideas, designs and
                  requirements into clean and functional digital experiences.
                </p>

                <p className="mt-5 text-base leading-7 text-slate-500">
                  My primary focus is frontend development with React and
                  JavaScript. I enjoy working on responsive interfaces,
                  reusable components and real-world applications that solve
                  practical problems.
                </p>

                <p className="mt-5 text-base leading-7 text-slate-500">
                  Alongside web development, I'm also exploring React Native
                  and mobile application development while continuously
                  strengthening my JavaScript and software engineering
                  fundamentals.
                </p>

                {/* =================================================
                    CURRENT FOCUS
                ================================================= */}

                <div className="mt-8 border-t border-white/[0.06] pt-7">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-600">
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
                        className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3.5 py-2 text-xs text-slate-400 transition-colors duration-300 hover:border-blue-400/20 hover:text-blue-300"
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
                    className="group inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
                  >
                    LinkedIn

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>

                  <a
                    href="https://github.com/krishnakanta-biswal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    GitHub

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
                  className="group relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.035]"
                >

                  {/* Hover glow */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/[0.08] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex gap-5">

                    {/* Number */}

                    <div className="flex shrink-0 flex-col items-center">
                      <span className="text-xs font-bold text-blue-400/70">
                        {item.number}
                      </span>

                      <div className="mt-3 h-10 w-px bg-gradient-to-b from-blue-400/30 to-transparent" />
                    </div>

                    {/* Content */}

                    <div className="flex-1">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] transition-all duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-400/[0.06]">
                          <Icon
                            size={18}
                            className="text-slate-400 transition-colors duration-300 group-hover:text-blue-400"
                          />
                        </div>

                        <h3 className="text-lg font-bold text-white">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
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
              className="mt-1 rounded-[24px] border border-blue-400/10 bg-gradient-to-br from-blue-500/[0.06] to-violet-500/[0.04] p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400/70">
                My approach
              </p>

              <p className="mt-3 text-lg font-semibold leading-7 text-slate-200">
                Clean code. Thoughtful interfaces. Continuous improvement.
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
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