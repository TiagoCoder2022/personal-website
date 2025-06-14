import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";
import Technologies from "@/components/technoligies";
import Link from "next/link";
import { clashDisplay } from "@/lib/fonts";

const Hero = () => {
  return (
    <section className="relative overflow-hidden" id="home">
      <div className="hidden md:block absolute top-0 left-0 w-full h-full">
        <Spotlight />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 px-2 lg:gap-2 lg:pl-10 xl:pl-0">
        <div className="pt-24 xl:pt-28 flex gap-2">
          <span className="text-3xl">👋🏻 </span>
          <h2 className="font-bold text-3xl lg:text-4xl text-transparent bg-gradient-to-r from-purple-500 to-white bg-clip-text pb-1">
            Hey! It&apos;s me Tiago.
          </h2>
        </div>

        <h1
          className={`py-8 relative z-10 mx-auto max-w-3xl text-center font-bold text-5xl md:text-6xl lg:text-8xl text-text-primary ${clashDisplay.className}`}
        >
          {"Full-Stack Web Developer".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-base md:text-lg font-normal text-text-secondary"
        >
          I specialize in crafting high-performance web applications, optimizing
          user experiences, and writing clean, maintainable code.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/#contact">
            <button className="w-60 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-6 py-3 bg-[#0070f3] rounded-lg text-white font-light transition-all duration-300 hover:-translate-y-0.5 ease-linear">
              Contact me
            </button>
          </Link>

          <Link href="https://github.com/TiagoCoder2022" target="_blank">
            <button className="w-60 transform rounded-lg border bg-transparent px-6 py-3 font-medium  transition-all duration-300 hover:-translate-y-0.5  border-gray-700 text-white hover:bg-gray-900">
              Github
            </button>
          </Link>
        </motion.div>
      </div>
      <Technologies />
    </section>
  );
};

export default Hero;
