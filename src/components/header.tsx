import { FiMenu, FiTerminal } from "react-icons/fi";

const Header = () => {
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
              <a href="#" className=" text-white/70 hover:text-white transition">About</a>
              <a href="#" className=" text-white/70 hover:text-white transition">Projects</a>
              <a href="#" className=" text-white/70 hover:text-white transition">Contact</a>
            </nav>
          </div>

          <div className="flex gap-4 items-center">
            <div className="h-10 rounded-lg bg-purple-800">
              <button className="relative py-2 rounded-lg px-3 font-medium text-sm bg-gradient-to-b from-white/40 to-[#2F2D2D]/20">                
                <span className="font-semibold text-sm md:text-base">Download CV</span>
              </button>
            </div>
            <FiMenu size={30} className="md:hidden"/>
          </div>
        </div>
      </div>
    </header>
   );
}
 
export default Header;