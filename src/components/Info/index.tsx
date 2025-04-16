import { ReactElement } from "react";
import RightLandingSidebar from "../RightLandingSidebar";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import { Divider } from "@chakra-ui/react";

interface InfoProps {
  className: string;
}

export default function Info({ className }: InfoProps): ReactElement {
  return (
    <div className={`${className} lg:w-2/5 text-sm`}>
      <About />
      <hr className="mt-10 border-stone-600" />
      <Education className="mt-10" />
      <hr className="mt-10 border-stone-600" />
      <WorkExperience className="mt-10" />
      <hr className="mt-10 border-stone-600" />
      <Projects className="mt-10" />
    </div>
  );
}
