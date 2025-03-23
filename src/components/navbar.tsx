import { FiMenu, FiTerminal } from "react-icons/fi";

const Navbar = () => {
  return ( 
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="px-5 mx-auto max-w-3xl">
        <div className="flex justify-between items-center md:border md:border-white/15 md:p-2.5 rounded-xl">
          <div className="flex items-center font-semibold">
            <FiTerminal />          
            <span>TIAGO</span>
          </div>

          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm md:text-base">
              <a href="#" className=" text-white/70 hover:text-white transition">Home</a>
              <a href="#about" className=" text-white/70 hover:text-white transition">About</a>
              <a href="#projects" className=" text-white/70 hover:text-white transition">Projects</a>
              <a href="#contact" className=" text-white/70 hover:text-white transition">Contact</a>
            </nav>
          </div>

          <div className="flex gap-4 items-center">
          <button className="transform rounded-lg bg-black px-4 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Download CV
          </button>
            <FiMenu size={30} className="md:hidden"/>
          </div>
        </div>
      </div>
    </header>
   );
}
 
export default Navbar;

