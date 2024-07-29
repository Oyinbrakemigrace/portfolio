"use client";
import { useEffect, useRef, useState } from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import {IoMdArrowUp} from 'react-icons/io'

export default function Home() {
  const navbarRef = useRef(null);
  const [darkMode, setDarkMode] = useState(()=>{
    if(typeof window !== 'undefined'){
      const appMode = localStorage.getItem('darkMode')
      return appMode ? JSON.parse(appMode) : true
    }
    return darkMode
  });
  const [showScrollArrow, setShowScrollArrow] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > window.innerHeight) {
          setShowScrollArrow(true);
        } else {
          setShowScrollArrow(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
      const scrollToTop = () => {
        navbarRef.current.scrollIntoView({ behavior: "smooth" });
      }

      useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
      }, [darkMode])
      

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-zinc-100 min-h-screen lg:px-10 px-5 dark:bg-gradient-to-tl from-[#301c30] to-black">
        <section ref={navbarRef}>
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
      {showScrollArrow && (
        <span
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="cursor-pointer fixed bottom-4 lg:right-4 right-7 bg-gradient-to-tl from-[#AD7FAD] to-[#F1B2AA] rounded-full px-5 py-5 text-3xl font-bold text-black z-50"
        >
          <IoMdArrowUp />
        </span>
      )}
      <section className="">
        <Footer />
      </section>
    </div>
  );
}
