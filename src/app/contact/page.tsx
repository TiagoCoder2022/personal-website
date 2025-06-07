import { ContactForm } from "@/components/contact-form";
import { socialMedia } from "../data";
import Image from "next/image";

const ContactPage = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen mt-14 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
        <div className="">
          <h2 className="text-2xl lg:text-5xl max-w-md font-semibold text-start my-2 text-text-primary">
            Let&apos;s start a <span className="text-[#0070f3]">project</span>{" "}
            together
          </h2>
          <ContactForm />
        </div>

        <div className="flex flex-col justify-start rounded-3xl w-full py-10 lg:py-8 bg-bg-800 px-6">
          <div className="flex justify-center flex-col items-center">
            <div className="py-2 px-4 rounded-full bg-bg-600 flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-sky-500"></span>
              </span>

              <p className="text-sm">Available for work</p>
            </div>

            <div className=" flex items-center justify-center border-2 border-bg-600 rounded-full overflow-hidden w-28 h-28 my-5">
              <div className="rounded-full overflow-hidden w-24 h-24">
                <Image
                  src="/profile-pic.jpeg"
                  alt="contact"
                  width={200}
                  height={200}
                />
              </div>
            </div>

            <p className="text-center text-text-secondary">
              My inbox is always open, Whether you have a project or just want
              to say Hi. I would love to hear from you. Feel free to contact me
              and I&apos;ll get back to you.
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 mt-8">
            {socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.link}
                className="flex justify-center items-center size-5 text-text-secondary hover:text-text-primary transition-all"
                target="_blank"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
