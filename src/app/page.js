"use client";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-zinc-100 min-h-screen px-10 dark:bg-gradient-to-tl from-[#301c30] to-black">
        <section>
          <NavBar setDarkMode={setDarkMode} darkMode={darkMode} />
          <Intro />
        </section>
        <section className="lg:py-20 py-10">
          <AboutMe />
        </section>
        <section className="lg:py-20 py-10">
          <Portfolio />
        </section>
        <section className="lg:py-20 py-10">
          <Skills />
        </section>
        <section className="lg:py-20 py-10">
          <ContactMe />
        </section>
      </main>
      <section className="">
        <Footer />
      </section>
    </div>
  );
}
