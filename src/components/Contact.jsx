import { useState } from "react";
import { motion } from "motion/react";

import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  Phone,
} from "lucide-react";

const EMAIL = "krishnakantabiswal4@gmail.com";
const PHONE = "+91 7894269292";

function Contact() {
  const [copied, setCopied] = useState("");

  const copyText = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);

      setTimeout(() => {
        setCopied("");
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        w-full
        max-w-full
        overflow-hidden
        bg-[#FFFFE4]
        px-4
        py-20
        text-slate-900
        transition-colors
        duration-500
        sm:px-6
        sm:py-24
        lg:px-12
        lg:py-28
        dark:bg-[#050816]
        dark:text-white
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[400px]
          w-[400px]
          -translate-x-1/2
          rounded-full
          bg-blue-400/[0.08]
          blur-[120px]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[140px]
          dark:bg-blue-600/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-150px]
          top-[35%]
          hidden
          h-[350px]
          w-[350px]
          rounded-full
          bg-violet-400/[0.07]
          blur-[120px]
          sm:block
          dark:bg-violet-600/10
        "
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto w-full min-w-0 max-w-7xl">
        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-10 w-full min-w-0 max-w-3xl sm:mb-16"
        >
          <p
            className="
              mb-4
              text-xs
              font-medium
              uppercase
              tracking-[0.3em]
              text-blue-600
              sm:mb-5
              sm:text-sm
              dark:text-blue-400
            "
          >
            Contact
          </p>

          <h2
            className="
              text-3xl
              font-semibold
              leading-[1.15]
              tracking-tight
              text-slate-950
              sm:text-5xl
              lg:text-6xl
              dark:text-white
            "
          >
            Let's build something

            <span
              className="
                block
                bg-gradient-to-r
                from-blue-600
                via-violet-600
                to-purple-600
                bg-clip-text
                text-transparent
                dark:from-blue-400
                dark:via-violet-400
                dark:to-purple-400
              "
            >
              meaningful together.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-600
              sm:mt-6
              sm:text-lg
              sm:leading-8
              dark:text-slate-400
            "
          >
            Have a project, opportunity, or just want to talk about technology?
            I'm always open to meaningful conversations and new opportunities.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN CONTACT CARD
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
            duration: 0.8,
          }}
          className="
            relative
            w-full
            min-w-0
            max-w-full
            overflow-hidden
            rounded-[1.5rem]
            border
            border-[#cfc47b]/35
            bg-white/[0.40]
            shadow-[0_25px_70px_rgba(120,100,20,0.08)]
            backdrop-blur-xl
            sm:rounded-[2rem]
            dark:border-white/10
            dark:bg-white/[0.03]
            dark:shadow-none
          "
        >
          {/* Grid background */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.035]
              dark:opacity-[0.035]
            "
            style={{
              backgroundImage:
                "linear-gradient(rgba(100,90,30,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(100,90,30,0.8) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          {/* =================================================
              RESPONSIVE GRID
          ================================================= */}

          <div className="relative grid min-w-0 lg:grid-cols-[1.1fr_0.9fr]">
            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div
              className="
                min-w-0
                border-b
                border-[#b9aa52]/20
                p-5
                sm:p-10
                lg:border-b-0
                lg:border-r
                lg:border-[#b9aa52]/20
                lg:p-14
                dark:border-white/10
              "
            >
              {/* Availability */}

              <div
                className="
                  mb-7
                  inline-flex
                  max-w-full
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-emerald-500/20
                  bg-emerald-500/[0.06]
                  px-3
                  py-2
                  sm:mb-10
                  sm:gap-3
                  sm:px-4
                  dark:border-emerald-400/20
                  dark:bg-emerald-400/[0.06]
                "
              >
                <span className="relative flex h-2 w-2 shrink-0 sm:h-2.5 sm:w-2.5">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-emerald-500
                      opacity-60
                      dark:bg-emerald-400
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2
                      w-2
                      rounded-full
                      bg-emerald-500
                      sm:h-2.5
                      sm:w-2.5
                      dark:bg-emerald-400
                    "
                  />
                </span>

                <span
                  className="
                    truncate
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-wider
                    text-emerald-700
                    sm:text-xs
                    dark:text-emerald-300
                  "
                >
                  Available for opportunities
                </span>
              </div>

              {/* Heading */}

              <h3
                className="
                  max-w-full
                  text-2xl
                  font-semibold
                  leading-tight
                  text-slate-950
                  sm:text-4xl
                  dark:text-white
                "
              >
                Have an idea?

                <br />

                <span
                  className="
                    text-slate-500
                    dark:text-slate-500
                  "
                >
                  Let's turn it into reality.
                </span>
              </h3>

              {/* Description */}

              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  leading-7
                  text-slate-600
                  sm:mt-6
                  sm:text-base
                  dark:text-slate-400
                "
              >
                Whether you're looking for a React developer, discussing a
                product idea, or exploring a collaboration, feel free to reach
                out.
              </p>

              {/* =================================================
                  CONTACT INFORMATION
              ================================================= */}

              <div className="mt-7 min-w-0 space-y-3 sm:mt-10 sm:space-y-4">
                {/* ================= EMAIL ================= */}

                <div
                  className="
                    group
                    flex
                    min-w-0
                    w-full
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-[#b9aa52]/20
                    bg-white/[0.50]
                    p-3.5
                    shadow-[0_8px_25px_rgba(100,90,30,0.04)]
                    transition-all
                    duration-300
                    hover:border-blue-500/30
                    hover:bg-blue-500/[0.04]
                    sm:gap-4
                    sm:p-4
                    dark:border-white/10
                    dark:bg-black/20
                    dark:shadow-none
                    dark:hover:border-blue-400/30
                    dark:hover:bg-blue-400/[0.04]
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-blue-500/15
                      bg-blue-500/[0.06]
                      text-blue-600
                      sm:h-11
                      sm:w-11
                      dark:border-white/10
                      dark:bg-white/[0.04]
                      dark:text-blue-400
                    "
                  >
                    <Mail size={19} />
                  </div>

                  {/* Text */}

                  <div className="min-w-0 flex-1 overflow-hidden">
                    <p
                      className="
                        mb-1
                        text-[10px]
                        uppercase
                        tracking-wider
                        text-slate-500
                        sm:text-xs
                      "
                    >
                      Email
                    </p>

                    <a
                      href={`mailto:${EMAIL}`}
                      title={EMAIL}
                      className="
                        block
                        max-w-full
                        truncate
                        text-xs
                        font-medium
                        text-slate-800
                        transition-colors
                        hover:text-blue-600
                        sm:text-base
                        dark:text-slate-200
                        dark:hover:text-blue-400
                      "
                    >
                      {EMAIL}
                    </a>
                  </div>

                  {/* Copy */}

                  <button
                    type="button"
                    onClick={() => copyText(EMAIL, "email")}
                    aria-label="Copy email"
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      text-slate-500
                      transition-all
                      hover:bg-slate-900/[0.06]
                      hover:text-slate-900
                      dark:hover:bg-white/10
                      dark:hover:text-white
                    "
                  >
                    {copied === "email" ? (
                      <Check
                        size={17}
                        className="text-emerald-500 dark:text-emerald-400"
                      />
                    ) : (
                      <Copy size={17} />
                    )}
                  </button>
                </div>

                {/* ================= PHONE ================= */}

                <div
                  className="
                    group
                    flex
                    min-w-0
                    w-full
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-[#b9aa52]/20
                    bg-white/[0.50]
                    p-3.5
                    shadow-[0_8px_25px_rgba(100,90,30,0.04)]
                    transition-all
                    duration-300
                    hover:border-violet-500/30
                    hover:bg-violet-500/[0.04]
                    sm:gap-4
                    sm:p-4
                    dark:border-white/10
                    dark:bg-black/20
                    dark:shadow-none
                    dark:hover:border-violet-400/30
                    dark:hover:bg-violet-400/[0.04]
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-violet-500/15
                      bg-violet-500/[0.06]
                      text-violet-600
                      sm:h-11
                      sm:w-11
                      dark:border-white/10
                      dark:bg-white/[0.04]
                      dark:text-violet-400
                    "
                  >
                    <Phone size={19} />
                  </div>

                  {/* Text */}

                  <div className="min-w-0 flex-1 overflow-hidden">
                    <p
                      className="
                        mb-1
                        text-[10px]
                        uppercase
                        tracking-wider
                        text-slate-500
                        sm:text-xs
                      "
                    >
                      Phone
                    </p>

                    <a
                      href={`tel:${PHONE.replace(/\s/g, "")}`}
                      className="
                        block
                        truncate
                        text-xs
                        font-medium
                        text-slate-800
                        transition-colors
                        hover:text-violet-600
                        sm:text-base
                        dark:text-slate-200
                        dark:hover:text-violet-400
                      "
                    >
                      {PHONE}
                    </a>
                  </div>

                  {/* Copy */}

                  <button
                    type="button"
                    onClick={() => copyText(PHONE, "phone")}
                    aria-label="Copy phone number"
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      text-slate-500
                      transition-all
                      hover:bg-slate-900/[0.06]
                      hover:text-slate-900
                      dark:hover:bg-white/10
                      dark:hover:text-white
                    "
                  >
                    {copied === "phone" ? (
                      <Check
                        size={17}
                        className="text-emerald-500 dark:text-emerald-400"
                      />
                    ) : (
                      <Copy size={17} />
                    )}
                  </button>
                </div>
              </div>

              {/* =================================================
                  CTA BUTTONS
              ================================================= */}

              <div className="mt-7 grid w-full min-w-0 grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2">
                {/* Email */}

                <a
                  href={`mailto:${EMAIL}?subject=Project%20Opportunity`}
                  className="
                    group
                    flex
                    min-w-0
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-slate-950
                    px-4
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_10px_25px_rgba(15,23,42,0.12)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-blue-600
                    sm:px-6
                    dark:bg-white
                    dark:text-[#050816]
                    dark:shadow-none
                    dark:hover:bg-blue-100
                  "
                >
                  <span className="truncate">
                    Send me an email
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="
                      shrink-0
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </a>

                {/* Call */}

                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="
                    flex
                    min-w-0
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-900/[0.10]
                    bg-white/[0.45]
                    px-4
                    py-3.5
                    text-sm
                    font-medium
                    text-slate-800
                    shadow-[0_8px_22px_rgba(100,90,30,0.04)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-slate-900/20
                    hover:bg-white/[0.70]
                    sm:px-6
                    dark:border-white/10
                    dark:bg-white/[0.04]
                    dark:text-white
                    dark:shadow-none
                    dark:hover:border-white/20
                    dark:hover:bg-white/[0.08]
                  "
                >
                  <Phone
                    size={17}
                    className="shrink-0"
                  />

                  <span>
                    Call me
                  </span>
                </a>
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div
              className="
                min-w-0
                p-5
                sm:p-10
                lg:p-14
              "
            >
              {/* Header */}

              <div className="min-w-0">
                <p
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-slate-500
                  "
                >
                  Connect
                </p>

                <h4
                  className="
                    mt-3
                    text-2xl
                    font-semibold
                    text-slate-950
                    sm:mt-4
                    dark:text-white
                  "
                >
                  Find me online.
                </h4>

                <p
                  className="
                    mt-3
                    max-w-md
                    text-sm
                    leading-7
                    text-slate-600
                    sm:mt-4
                    dark:text-slate-500
                  "
                >
                  Follow my work, explore my projects, or connect with me
                  professionally.
                </p>
              </div>

              {/* =================================================
                  SOCIAL LINKS
              ================================================= */}

              <div className="mt-7 min-w-0 space-y-3 sm:mt-10">
                {/* ================= LINKEDIN ================= */}

                <a
                  href="https://www.linkedin.com/in/krishnakanta-biswal-089007327/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    min-w-0
                    w-full
                    items-center
                    justify-between
                    gap-3
                    rounded-2xl
                    border
                    border-slate-900/[0.08]
                    bg-white/[0.42]
                    p-3.5
                    shadow-[0_8px_25px_rgba(100,90,30,0.04)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500/30
                    hover:bg-blue-500/[0.05]
                    sm:gap-4
                    sm:p-4
                    dark:border-white/10
                    dark:bg-white/[0.03]
                    dark:shadow-none
                    dark:hover:border-blue-400/30
                    dark:hover:bg-blue-400/[0.05]
                  "
                >
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    {/* LinkedIn icon */}

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-blue-500/15
                        bg-blue-500/[0.06]
                        sm:h-11
                        sm:w-11
                        dark:border-white/10
                        dark:bg-white/[0.04]
                      "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="
                          h-5
                          w-5
                          fill-current
                          text-blue-600
                          dark:text-blue-400
                        "
                        aria-hidden="true"
                      >
                        <path d="M5.25 3.25a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.55 8.5h3.4V20h-3.4V8.5ZM9.2 8.5h3.25v1.57h.05c.45-.86 1.55-1.77 3.19-1.77 3.41 0 4.04 2.24 4.04 5.16V20h-3.37v-5.79c0-1.38-.03-3.15-1.92-3.15-1.92 0-2.21 1.5-2.21 3.05V20H9.2V8.5Z" />
                      </svg>
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          truncate
                          text-sm
                          font-semibold
                          text-slate-900
                          dark:text-white
                        "
                      >
                        LinkedIn
                      </p>

                      <p
                        className="
                          mt-1
                          truncate
                          text-xs
                          text-slate-500
                        "
                      >
                        Professional profile
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="
                      shrink-0
                      text-slate-400
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-blue-600
                      dark:text-slate-600
                      dark:group-hover:text-blue-400
                    "
                  />
                </a>

                {/* ================= GITHUB ================= */}

                <a
                  href="https://github.com/krishnakanta-biswal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    min-w-0
                    w-full
                    items-center
                    justify-between
                    gap-3
                    rounded-2xl
                    border
                    border-slate-900/[0.08]
                    bg-white/[0.42]
                    p-3.5
                    shadow-[0_8px_25px_rgba(100,90,30,0.04)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-violet-500/30
                    hover:bg-violet-500/[0.05]
                    sm:gap-4
                    sm:p-4
                    dark:border-white/10
                    dark:bg-white/[0.03]
                    dark:shadow-none
                    dark:hover:border-violet-400/30
                    dark:hover:bg-violet-400/[0.05]
                  "
                >
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    {/* GitHub icon */}

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-violet-500/15
                        bg-violet-500/[0.06]
                        sm:h-11
                        sm:w-11
                        dark:border-white/10
                        dark:bg-white/[0.04]
                      "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="
                          h-5
                          w-5
                          fill-current
                          text-violet-600
                          dark:text-violet-400
                        "
                        aria-hidden="true"
                      >
                        <path d="M12 .8A11.2 11.2 0 0 0 8.46 22.62c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1 1.67-.99 1.67-.99.9-1.66 2.33-1.18 2.9-.9.09-.73.35-1.18.63-1.45-2.5-.28-5.13-1.25-5.13-5.58 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15A10.7 10.7 0 0 1 12 4.18c.96 0 1.92.13 2.82.38 2.13-1.45 3.08-1.15 3.08-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.34-2.63 5.3-5.14 5.57.36.31.68.92.68 1.85v2.74c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
                      </svg>
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          truncate
                          text-sm
                          font-semibold
                          text-slate-900
                          dark:text-white
                        "
                      >
                        GitHub
                      </p>

                      <p
                        className="
                          mt-1
                          truncate
                          text-xs
                          text-slate-500
                        "
                      >
                        Projects & source code
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="
                      shrink-0
                      text-slate-400
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-violet-600
                      dark:text-slate-600
                      dark:group-hover:text-violet-400
                    "
                  />
                </a>
              </div>

              {/* =================================================
                  BOTTOM INFO
              ================================================= */}

              <div
                className="
                  mt-10
                  border-t
                  border-slate-900/[0.07]
                  pt-5
                  sm:mt-14
                  sm:pt-6
                  dark:border-white/10
                "
              >
                <p
                  className="
                    text-xs
                    leading-6
                    text-slate-500
                    dark:text-slate-600
                  "
                >
                  Based in Odisha, India
                  <br />
                  Building interfaces with React & JavaScript.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;