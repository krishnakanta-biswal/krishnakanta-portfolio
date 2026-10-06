import { motion } from "motion/react";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/krishnakanta-biswal-089007327/",
  },
  {
    label: "GitHub",
    href: "https://github.com/krishnakanta-biswal",
  },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#FFFFE4] dark:bg-[#03050D]">
      {/* Top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-blue-400/[0.10] blur-[120px] dark:bg-blue-600/[0.07]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100,116,139,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.7) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Main footer content */}
        <div className="border-t border-[#cfc47b]/35 py-16 sm:py-20 dark:border-white/[0.08]">
          <div className="grid gap-14 lg:grid-cols-[1.5fr_0.7fr_0.7fr]">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <a
                href="#home"
                className="group inline-flex items-center gap-3"
              >
                <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[#cfc47b]/35 bg-white/55 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-violet-500/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="relative text-sm font-bold tracking-tight text-slate-900 dark:text-white">
                    KB
                  </span>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Krishnakanta Biswal
                  </p>

                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-600">
                    React Developer
                  </p>
                </div>
              </a>

              {/* Description */}
              <p className="mt-7 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-500">
                Building modern, scalable and meaningful digital experiences
                with React, JavaScript and a passion for clean interfaces.
              </p>

              {/* Email */}
              <a
                href="mailto:krishnakantabiswal4@gmail.com"
                className="group mt-7 inline-flex items-center gap-3 text-sm text-slate-600 transition-colors duration-300 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#cfc47b]/35 bg-white/55 transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-400/[0.06] dark:border-white/10 dark:bg-white/[0.03]">
                  <Mail
                    size={16}
                    className="text-blue-500 dark:text-blue-400"
                  />
                </span>

                krishnakantabiswal4@gmail.com

                <ArrowUpRight
                  size={14}
                  className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </a>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-600">
                Navigation
              </p>

              <nav className="flex flex-col items-start gap-3.5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-600 transition-colors duration-300 hover:text-slate-950 dark:text-slate-500 dark:hover:text-white"
                  >
                    <span className="h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-4" />

                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-600">
                Connect
              </p>

              <div className="flex flex-col items-start gap-3.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-slate-600 transition-colors duration-300 hover:text-slate-950 dark:text-slate-500 dark:hover:text-white"
                  >
                    {social.label}

                    <ArrowUpRight
                      size={14}
                      className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500 dark:group-hover:text-blue-400"
                    />
                  </a>
                ))}
              </div>

              {/* Status */}
              <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/15 bg-emerald-500/[0.05] px-3.5 py-2 dark:border-emerald-400/10 dark:bg-emerald-400/[0.04]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50 dark:bg-emerald-400" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                </span>

                <span className="text-[11px] font-medium text-emerald-600/90 dark:text-emerald-400/80">
                  Open to opportunities
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Huge signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden border-t border-[#cfc47b]/30 py-8 dark:border-white/[0.06]"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="select-none whitespace-nowrap text-[16vw] font-black leading-none tracking-[-0.08em] text-slate-900/[0.025] dark:text-white/[0.015]">
              KRISHNA
            </span>
          </div>

          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="text-xs text-slate-500 dark:text-slate-600">
              © {new Date().getFullYear()} Krishnakanta Biswal
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-700">
              Designed & built with React
            </p>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex items-center gap-3 rounded-full border border-[#cfc47b]/35 bg-white/55 px-4 py-2.5 text-xs font-medium text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b9aa58]/50 hover:bg-white/75 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400 dark:hover:border-white/20 dark:hover:bg-white/[0.06] dark:hover:text-white"
            >
              Back to top

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/[0.06] transition-transform duration-300 group-hover:-translate-y-0.5 dark:bg-white/[0.06]">
                <ArrowUp size={13} />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;