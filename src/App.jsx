import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import IntroScreen from "./components/IntroScreen";

import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <ThemeProvider>
      <div
  className="
    min-h-screen
    w-full
    max-w-[100vw]
    overflow-x-hidden
    bg-[#FFFFE4]
    text-slate-900
    transition-colors
    duration-500
    dark:bg-[#050816]
    dark:text-white
  "
>
        {!introFinished && (
          <IntroScreen onComplete={() => setIntroFinished(true)} />
        )}

        <div
          className={`transition-opacity duration-700 ${
            introFinished ? "opacity-100" : "opacity-0"
          }`}
        >
          <Navbar />

          <main className="w-full max-w-[100vw] overflow-x-hidden">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;