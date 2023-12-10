/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <div className="h-screen">
      <h1 className="absolute font-title font-bold text-center items-center max-w-2xl pt-[35vh] drop-shadow-lg  text-pale text-5xl md:text-7xl md:pl-20 md:text-start">
        Hello! I'm Nick. I enjoy building things with code.
      </h1>
      <div className="fixed h-screen w-screen -z-10 bg-right">
        <Image
        className="bg-right object-cover"
          src="/mountainnick.jpg"
          alt="harbour"
          quality={100}
          fill
          sizes="100vw"
          priority
        />
      </div>

      <div className="text-pale text-2xl flex justify-center gap-5 pt-[75vh] drop-shadow-lg">
        <a
          href="https://www.linkedin.com/in/nick-ko-382b6675/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 hover:opacity-50"
        >
          <SiLinkedin />
        </a>
        <a
          href="https://github.com/iamnickko"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 hover:opacity-50"
        >
          <SiGithub />
        </a>
      </div>
    </div>
  );
}
