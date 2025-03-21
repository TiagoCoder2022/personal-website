"use client";
import About from "@/components/about";
import CallToAction from "@/components/call-to-action";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Technologies from "@/components/technoligies";
import LoadingScreen from "@/components/loading-screen";

import { useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {isLoaded && (
        <main>
          <Header />
          <Hero />
          <Technologies />
          <About />
          <CallToAction />
          <Projects />
        </main>
      )}
    </>
  );
}
