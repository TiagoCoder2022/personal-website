"use client";
import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Technologies from "@/components/technoligies";
import LoadingScreen from "@/components/loading-screen";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {isLoaded && (
        <main>
          <Navbar />          
          <Hero />
          <Technologies />
          <About />          
          <Projects />
          <Footer />
        </main>
      )}
    </>
  );
}
