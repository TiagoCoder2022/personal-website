import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/magic-button";
import Footer from "./footer";


const Contact = () => {
  
  return ( 
    <div className="flex flex-col justify-center w-full pt-20 pb-10 max-w-screen-xl mx-auto px-5" id="contact">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-4xl max-w-2xl font-bold text-center">Ready to take <span className="text-purple-300">your</span> digital presence to the next level?</h1>
        <p className="text-lg text-white/80 md:mt-10 my-5 text-center">Let&apos;s work together to build something great. Get in touch with me today.</p>
        <a href="mailto:tiagonewalves@hotmail.com">
          <MagicButton title="Let's get in touch" icon={<FaLocationArrow/>} position="right"/>
        </a>
      </div> 

      <Footer />     
    </div>
   );
}
 
export default Contact;