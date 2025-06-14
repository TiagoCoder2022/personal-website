"use client";
import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import LoadingScreen from "@/components/loading-screen";

import { useState } from "react";
import Contact from "@/components/contact";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {/* {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {isLoaded && ()} */}
      <>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </>
    </>
  );
}
