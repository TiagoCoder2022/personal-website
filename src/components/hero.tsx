import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return ( 
    <section>
      <div className="flex flex-col items-center justify-center gap-4 px-2 lg:gap-2 lg:pl-10 xl:pl-0">

        <div className="pt-24">
          <h2 className="font-bold text-2xl md:text-3xl">👋🏻 Hi, I&apos;m Tiago a</h2>
        </div>
        
        <div className="hero-gradient-text justify-center text-center text-[10vw] font-bold leading-[11vw] lg:text-[4vw] lg:leading-[5vw] xl:text-[4.5vw] xl:leading-tight">
          Full-Stack Web <br/> Developer
        </div>

        <p className="text-white/70 text-base text-center md:text-xl py-6 md:py-12 max-w-2xl">
          Crafting scalable and high-performance web applications with modern technologies.
        </p>
        
        <div className="grid grid-cols-2 justify-center gap-6">
          <a
            href="https://cal.com/0xaquawolf/discovery"
            className="grid px-3 font-semibold place-items-center rounded-xl bg-white py-3 text-center text-sm text-black transition-all hover:bg-transparent hover:text-white hover:shadow-alt-cta xl:px-6 xl:py-3 xl:text-lg duration-300"
          >
            Contact me
          </a>
          <a
            href="https://github.com/TiagoCoder2022"
            target="_blank"
            className="flex px-3 font-semibold gap-1 place-items-center rounded-xl py-3 text-center text-sm text-white transition-all hover:bg-white hover:text-black hover:shadow-cta xl:px-8 xl:py-3 xl:text-lg duration-300"
          >
            <span>Github</span>
            <FiArrowUpRight size={20}/>
          </a>
        </div>
      </div>
    </section>
  );
}
 
export default Hero;