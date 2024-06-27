"use client"
import { useState } from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";

export default function Home() {
  const[darkMode, setDarkMode] = useState(true)
  return (
    <div className={darkMode ? 'dark': ''}>
      <main className=" bg-white px-10 dark:bg-gray-900">
        <section>
          <NavBar setDarkMode={setDarkMode} darkMode={darkMode}/>
          <Intro/>
        </section>
        <section>

        </section>
      </main>
    </div>
  );
}
