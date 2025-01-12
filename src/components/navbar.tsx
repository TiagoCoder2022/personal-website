"use client"
import Link from "next/link";
import { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }
    return ( 
        <nav className="bg-[#060608] text-white fixed top-0 left-0 right-0 z-[999] px-5">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center md:py-8 py-5">
               <div className="flex items-center space-x-2">
                    <div className="w-8 h-0.5 bg-white"></div>
                    <Link href="/" className="font-semibold text-lg">TIAGO</Link>
               </div>

               <div>
                    <p className="text-[#86868D] hidden md:block">
                        Software Developer <br/> 
                        based in Santa Catarina Brazi
                    </p>
               </div>

               <div className="hidden md:flex items-center space-x-6 font-semibold">
                    <Link href="#case-studies" className="hover:text-gray-400 transition-all duration-200 ease-in">Case Studies</Link>
                    <Link href="#work-experience" className="hover:text-gray-400 transition-all duration-200 ease-in">Experience</Link>
                    <Link href="#hire-me" className="hover:text-gray-400 transition-all duration-200 ease-in">Hire me</Link>
               </div>

               <div className="hidden md:flex items-center justify-end">
                    <button className="bg-gray-700 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200 ease-in">Download CV</button>
               </div>

               <div className="md:hidden">
                    <button className="text-2xl" onClick={toggleDrawer}>
                        {isDrawerOpen ? (
                            <FiX/>
                        ) : (
                            <FiMenu/>
                        )}
                    </button>
               </div>
            </div>

            {
                isDrawerOpen && (
                    <div className="mt-3 bg-gray-800 p-4 rounded-lg md:hidden">
                        <p className="mb-4">
                            Software Developer <br/> 
                            based in Santa Catarina Brazi
                        </p>

                        <Link href="#case-studies" className="block mb-4 hover:text-gray-400 transition-all duration-200 ease-in">Case Studies</Link>
                        <Link href="#work-experience" className="block mb-4 hover:text-gray-400 transition-all duration-200 ease-in">Experience</Link>
                        <Link href="#hire-me" className="block mb-4 hover:text-gray-400 transition-all duration-200 ease-in">Hire me</Link>
                    </div>
                )
            }
        </nav>
     );
}
 
export default Navbar;