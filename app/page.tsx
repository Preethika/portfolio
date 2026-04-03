"use client";

import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white min-h-screen font-sans overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}