/* eslint-disable react/no-unescaped-entities */
import {
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiCss3,
  SiMongodb,
} from "react-icons/si";
import SectionWrapper from "./UI/SectionWrapper";
import SectionTitle from "./UI/SectionH2";

export default function Techstack() {
  return (
    <SectionWrapper color="bg-blue">
      <SectionTitle>Preferred Tech Stack</SectionTitle>
      <ul className="font-body text-pale mb-11 grid grid-flow-row auto-rows-auto grid-cols-2 md:grid-cols-3 gap-5 justify-items-center items-center text-2xl">
        <li>
          <SiReact className=" text-5xl mx-auto" />
          <p className="text-lg">React</p>
        </li>
        <li>
          <SiNextdotjs className="text-5xl mx-auto" />
          <p className="text-lg">Next.js</p>
        </li>
        <li>
          <SiTailwindcss className="text-5xl mx-auto" />
          <p className="text-lg">Tailwind</p>
        </li>
        <li>
          <SiHtml5 className="text-5xl mx-auto" />
          <p className="text-lg">HTML</p>
        </li>
        <li>
          <SiCss3 className="text-5xl mx-auto" />
          <p className="text-lg text-center">CSS</p>
        </li>
      </ul>
      <h2 className="font-title font-bold text-pale text-center mb-7 text-2xl md:text-3xl">
        Other Tech I've Used
      </h2>
      <ul className="font-body text-pale grid grid-cols-2 md:grid-cols-3 gap-5 justify-items-center items-center text-lg">
        <li>
          <SiNodedotjs className="text-3xl mx-auto" />
          <p className="text-base">Node.js</p>
        </li>
        <li>
          <SiExpress className="text-3xl mx-auto" />
          <p className="text-base">Express.js</p>
        </li>
        <li>
          <SiMongodb className="text-3xl mx-auto" />
          <p className="text-base">MongoDB</p>
        </li>
      </ul>
    </SectionWrapper>
  );
}
