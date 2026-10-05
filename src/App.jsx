import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import IntroScreen from "./components/IntroScreen";

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      {!introFinished && (
        <IntroScreen onComplete={() => setIntroFinished(true)} />
      )}

      <div
        className={`transition-opacity duration-700 ${
          introFinished ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />

        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;