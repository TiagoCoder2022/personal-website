import About from "@/components/about";
import CallToAction from "@/components/call-to-action";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Technologies from "@/components/technoligies";

export default function Home() {
  return (
    <main>
      <Header />    
      <Hero />      
      <Technologies />
      <About />
      <CallToAction />
      <Projects />      
    </main>    
  );
}
