import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function GithubIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-2.1c-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.06.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.15v3.18c0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.25 3.25a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.55 8.5h3.4V20h-3.4V8.5ZM9.2 8.5h3.25v1.57h.05c.45-.86 1.55-1.77 3.19-1.77 3.41 0 4.04 2.24 4.04 5.16V20h-3.37v-5.79c0-1.38-.03-3.15-1.92-3.15-1.92 0-2.21 1.5-2.21 3.05V20H9.2V8.5Z" />
    </svg>
  );
}

function DownloadIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ================= DESKTOP / MAIN NAVBAR ================= */}
      <header
        className={`
          fixed
          top-4
          left-1/2
          z-[100]
          w-[calc(100%-2rem)]
          max-w-[1375px]
          -translate-x-1/2
          transition-all
          duration-500
          ${
            scrolled
              ? "shadow-[0_18px_45px_rgba(120,100,20,0.14)] dark:shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
              : "shadow-[0_12px_35px_rgba(120,100,20,0.08)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.25)]"
          }
        `}
      >
        <nav
          className={`
            relative
            flex
            h-[68px]
            items-center
            justify-between
            rounded-[20px]
            px-4
            sm:px-5
            lg:px-6
            transition-all
            duration-500

            ${
              darkMode
                ? `
                  border
                  border-white/[0.09]
                  bg-[#08101f]/85
                  text-white
                  backdrop-blur-2xl
                  backdrop-saturate-150
                `
                : `
                  border
                  border-[#d9c968]/35
                  bg-[#ffffe4]/78
                  text-[#101528]
                  backdrop-blur-2xl
                  backdrop-saturate-150
                `
            }
          `}
        >
          {/* Light theme premium shine */}
          {!darkMode && (
            <>
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]">
                <div
                  className="
                    absolute
                    -left-20
                    -top-24
                    h-40
                    w-72
                    rounded-full
                    bg-white/55
                    blur-3xl
                  "
                />

                <div
                  className="
                    absolute
                    -right-16
                    -bottom-24
                    h-40
                    w-64
                    rounded-full
                    bg-amber-200/20
                    blur-3xl
                  "
                />
              </div>

              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/90" />
            </>
          )}

          {/* Dark theme shine */}
          {darkMode && (
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/[0.08]" />
          )}

          {/* ================= BRAND ================= */}
          <a
            href="#home"
            onClick={closeMenu}
            className="
              group
              relative
              z-10
              flex
              shrink-0
              items-center
              gap-3
            "
          >
            <div
              className={`
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                overflow-hidden
                rounded-[13px]
                border
                transition-all
                duration-300
                group-hover:scale-[1.04]

                ${
                  darkMode
                    ? "border-white/10 bg-white/[0.06]"
                    : "border-[#d6c65d]/30 bg-white/65 shadow-[0_5px_18px_rgba(120,100,20,0.08)]"
                }
              `}
            >
              <img
                src="/Krishna-photo.jpg"
                alt="Krishnakanta Biswal"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="hidden min-[420px]:block">
              <p
                className={`
                  text-[15px]
                  font-extrabold
                  leading-none
                  tracking-[-0.02em]
                  ${
                    darkMode ? "text-white" : "text-[#101528]"
                  }
                `}
              >
                Krishnakanta
              </p>

              <p
                className={`
                  mt-1
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  ${
                    darkMode
                      ? "text-slate-400"
                      : "text-slate-500"
                  }
                `}
              >
                React Developer
              </p>
            </div>
          </a>

          {/* ================= DESKTOP NAV ================= */}
          <div className="relative z-10 hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  relative
                  py-2
                  text-[15px]
                  font-semibold
                  tracking-[-0.01em]
                  transition-colors
                  duration-300
                  ${
                    darkMode
                      ? "text-slate-300 hover:text-white"
                      : "text-[#3f485f] hover:text-[#111827]"
                  }

                  after:absolute
                  after:bottom-0
                  after:left-1/2
                  after:h-[2px]
                  after:w-0
                  after:-translate-x-1/2
                  after:rounded-full
                  after:bg-blue-600
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                `}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* ================= ACTIONS ================= */}
          <div className="relative z-10 flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                darkMode
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              className={`
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-[16px]
                border
                transition-all
                duration-300

                ${
                  darkMode
                    ? `
                      border-white/10
                      bg-white/[0.05]
                      text-slate-200
                      hover:border-blue-400/30
                      hover:bg-white/[0.08]
                      hover:text-white
                    `
                    : `
                      border-blue-400/55
                      bg-white/55
                      text-[#3d465a]
                      shadow-[0_4px_15px_rgba(80,100,180,0.08)]
                      hover:border-blue-500/70
                      hover:bg-white/80
                      hover:text-blue-600
                    `
                }
              `}
            >
              {darkMode ? (
                <Sun
                  size={20}
                  strokeWidth={1.8}
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
              ) : (
                <Moon
                  size={19}
                  strokeWidth={1.8}
                  className="transition-transform duration-500 group-hover:-rotate-12"
                />
              )}
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/krishnakanta-biswal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`
                hidden
                h-12
                w-12
                items-center
                justify-center
                rounded-[16px]
                border
                transition-all
                duration-300
                sm:flex

                ${
                  darkMode
                    ? `
                      border-white/10
                      bg-white/[0.05]
                      text-slate-300
                      hover:border-white/20
                      hover:bg-white/[0.08]
                      hover:text-white
                    `
                    : `
                      border-slate-200/80
                      bg-white/55
                      text-[#4b5568]
                      shadow-[0_4px_15px_rgba(80,80,50,0.06)]
                      hover:border-slate-300
                      hover:bg-white/80
                      hover:text-[#111827]
                    `
                }
              `}
            >
              <GithubIcon size={19} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/krishnakanta-biswal-089007327/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`
                hidden
                h-12
                w-12
                items-center
                justify-center
                rounded-[16px]
                border
                transition-all
                duration-300
                sm:flex

                ${
                  darkMode
                    ? `
                      border-white/10
                      bg-white/[0.05]
                      text-slate-300
                      hover:border-blue-400/20
                      hover:bg-white/[0.08]
                      hover:text-blue-400
                    `
                    : `
                      border-slate-200/80
                      bg-white/55
                      text-[#4b5568]
                      shadow-[0_4px_15px_rgba(80,80,50,0.06)]
                      hover:border-blue-200
                      hover:bg-white/80
                      hover:text-blue-600
                    `
                }
              `}
            >
              <LinkedinIcon size={18} />
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden
                h-12
                items-center
                gap-2
                rounded-[16px]
                bg-[#050816]
                px-5
                text-sm
                font-bold
                text-white
                shadow-[0_8px_22px_rgba(5,8,22,0.18)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#10172d]
                hover:shadow-[0_12px_28px_rgba(5,8,22,0.24)]
                lg:flex
              "
            >
              <DownloadIcon size={17} />
              Resume
            </a>

            {/* Mobile menu */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={`
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-[16px]
                border
                transition-all
                duration-300
                lg:hidden

                ${
                  darkMode
                    ? `
                      border-white/10
                      bg-white/[0.05]
                      text-white
                    `
                    : `
                      border-slate-200/80
                      bg-white/55
                      text-[#111827]
                      shadow-[0_4px_15px_rgba(80,80,50,0.06)]
                    `
                }
              `}
            >
              {menuOpen ? (
                <X size={21} strokeWidth={2} />
              ) : (
                <Menu size={21} strokeWidth={2} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className={`
              absolute
              inset-0
              backdrop-blur-md

              ${
                darkMode
                  ? "bg-black/45"
                  : "bg-[#ffffe4]/55"
              }
            `}
          />

          <div
            className={`
              absolute
              left-4
              right-4
              top-[92px]
              overflow-hidden
              rounded-[24px]
              border
              p-4
              shadow-2xl
              backdrop-blur-2xl

              ${
                darkMode
                  ? `
                    border-white/10
                    bg-[#08101f]/95
                  `
                  : `
                    border-[#d9c968]/35
                    bg-[#ffffe4]/92
                    shadow-[0_25px_70px_rgba(100,90,30,0.16)]
                  `
              }
            `}
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className={`
                    rounded-[15px]
                    px-4
                    py-3.5
                    text-[15px]
                    font-semibold
                    transition-all

                    ${
                      darkMode
                        ? `
                          text-slate-300
                          hover:bg-white/[0.06]
                          hover:text-white
                        `
                        : `
                          text-[#3f485f]
                          hover:bg-white/70
                          hover:text-[#111827]
                        `
                    }
                  `}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div
              className={`
                my-3
                h-px
                ${
                  darkMode
                    ? "bg-white/[0.08]"
                    : "bg-[#d6c65d]/25"
                }
              `}
            />

            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://github.com/krishnakanta-biswal"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-[14px]
                  border
                  py-3
                  text-sm
                  font-semibold

                  ${
                    darkMode
                      ? "border-white/10 bg-white/[0.05] text-slate-200"
                      : "border-slate-200 bg-white/65 text-[#374151]"
                  }
                `}
              >
                <GithubIcon size={17} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/krishnakanta-biswal-089007327/"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-[14px]
                  border
                  py-3
                  text-sm
                  font-semibold

                  ${
                    darkMode
                      ? "border-white/10 bg-white/[0.05] text-slate-200"
                      : "border-slate-200 bg-white/65 text-[#374151]"
                  }
                `}
              >
                <LinkedinIcon size={17} />
                LinkedIn
              </a>
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-2
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-[14px]
                bg-[#050816]
                py-3.5
                text-sm
                font-bold
                text-white
              "
            >
              <DownloadIcon size={17} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}