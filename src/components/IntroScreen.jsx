import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

function IntroScreen({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleComplete();
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setShow(false);

    setTimeout(() => {
      onComplete();
    }, 700);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#03050D]"
        >
          {/* ================= BACKGROUND ================= */}

          {/* Main blue glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.09] blur-[140px]"
          />

          {/* Violet glow */}
          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-[15%] top-[20%] h-[250px] w-[250px] rounded-full bg-violet-600/[0.06] blur-[100px]"
          />

          {/* Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />

          {/* ================= TOP BRAND ================= */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="absolute left-6 top-6 flex items-center gap-3 sm:left-10 sm:top-10"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
              <span className="text-xs font-bold text-white">KB</span>
            </div>

            <div>
              <p className="text-xs font-semibold text-white">
                Krishnakanta Biswal
              </p>

              <p className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-slate-600">
                React Developer
              </p>
            </div>
          </motion.div>

          {/* ================= SKIP ================= */}

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 1,
            }}
            onClick={handleComplete}
            className="group absolute right-6 top-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-500 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:right-10 sm:top-10"
          >
            Skip intro

            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.button>

          {/* ================= CONTENT ================= */}

          <div className="relative z-10 flex w-full flex-col items-center px-6 text-center">
            {/* Avatar */}
            <motion.div
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                y: [0, -8, 0],
                scale: 1,
              }}
              transition={{
                opacity: {
                  duration: 0.7,
                },
                scale: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative"
            >
              {/* Outer glow */}
              <div className="absolute inset-[-25px] rounded-full bg-blue-500/[0.08] blur-2xl" />

              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-14px] rounded-full border border-dashed border-blue-400/20"
              />

              {/* Avatar ring */}
              <div className="relative h-36 w-36 rounded-full border border-white/10 bg-gradient-to-br from-blue-500/20 via-white/[0.04] to-violet-500/20 p-1.5 shadow-2xl shadow-blue-500/10 sm:h-44 sm:w-44">
                <div className="h-full w-full overflow-hidden rounded-full border border-white/10 bg-[#081020]">
                  <img
                    src="/Krishna-photo.jpg"
                    alt="Krishnakanta Biswal"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* ================= WAVING HAND ================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate: -20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.9,
                  type: "spring",
                  stiffness: 250,
                }}
                className="absolute -right-7 top-2 origin-bottom-left text-4xl sm:-right-10 sm:text-5xl"
              >
                <motion.span
                  animate={{
                    rotate: [0, 18, -12, 18, -8, 0],
                  }}
                  transition={{
                    duration: 1.1,
                    delay: 1.15,
                    repeat: 2,
                    ease: "easeInOut",
                  }}
                  className="block origin-bottom-left"
                >
                  👋
                </motion.span>
              </motion.div>

              {/* Online indicator */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1.2,
                  type: "spring",
                }}
                className="absolute bottom-2 right-3 flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#03050D] bg-emerald-400 sm:bottom-3 sm:right-4"
              >
                <span className="h-2 w-2 rounded-full bg-white" />
              </motion.div>
            </motion.div>

            {/* Hello */}
            <motion.div
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
                delay: 1.1,
              }}
              className="mt-10"
            >
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-blue-400">
                Hello
              </p>

              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Welcome to
              </h1>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 1.4,
                }}
                className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl"
              >
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Krishnakanta's Portfolio
                </span>
              </motion.h2>
            </motion.div>

            {/* Small description */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 1.8,
              }}
              className="mt-6 max-w-md text-sm leading-7 text-slate-500 sm:text-base"
            >
              React Developer · JavaScript Enthusiast · Digital Experience
              Builder
            </motion.p>

            {/* Loading line */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: 1,
                width: "180px",
              }}
              transition={{
                opacity: {
                  duration: 0.3,
                  delay: 2,
                },
                width: {
                  duration: 2.8,
                  delay: 1.4,
                  ease: "linear",
                },
              }}
              className="mt-10 h-px overflow-hidden bg-white/10"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 2.8,
                  delay: 1.4,
                  ease: "linear",
                }}
                className="h-full w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 2,
              }}
              className="mt-3 text-[10px] uppercase tracking-[0.25em] text-slate-700"
            >
              Entering portfolio
            </motion.p>
          </div>

          {/* ================= BOTTOM ================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 2,
            }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.25em] text-slate-700 sm:bottom-8"
          >
            2026 · Portfolio
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroScreen;