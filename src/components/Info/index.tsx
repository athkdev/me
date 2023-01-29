import { ReactElement } from "react";
import RightLandingSidebar from "../RightLandingSidebar";
import About from "./About";
import WorkExperience from "./WorkExperience";

interface InfoProps {
  className: string;
}

export default function Info({ className }: InfoProps): ReactElement {
  return (
    <div className={`${className}  lg:w-2/5 text-sm min-h-full`}>
      <About />
      <WorkExperience className="mt-10" />
    </div>
  );
}
