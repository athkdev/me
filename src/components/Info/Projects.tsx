import { ReactElement } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectProps {
    className?: string;
}

interface Project {
    title: string;
    desc: string;
    url: string;
}

const projects: Project[] = [
    {
        title: "This site!",
        desc: "Built in Next.js, hosted on GitHub pages, this site is kind of like the initial screening of knowing me - to know me more, lets network!",
        url: "https://github.com/AtharvaKamble/atharvakamble.github.io",
    },
    {
        title: "Present",
        desc: "A presentation app designed beautifully by keeping an animation-first approach in mind making it easier to make academic presentations",
        url: "https://present-self.vercel.app/landing",
    },
    {
        title: "Relations builder",
        desc: "Allows users to add people and add relations between them somewhat close to social networks like FaceBook, LinkedIn, Instagram",
        url: "https://github.com/AtharvaKamble/relation-builder",
    },
    {
        title: "TLL - The Learners' Language",
        desc: "A language compiler written in Java as a passion project that implements easier syntax by trying to get as close to everyday lingo",
        url: "https://github.com/AtharvaKamble/tll",
    },

];

export default function Projects({ className }: ProjectProps): ReactElement {
    return (
        <div className={`${className}`}>
            <p className="mb-2">Projects</p>
            <div className="grid grid-row-2 sm:grid-cols-3 gap-4 my-4">
                {projects?.map(({ title, url, desc }) => {
                    return (
                        <ProjectCard key={title.toLowerCase()} title={title} url={url} desc={desc} />
                    );
                })}
            </div>
        </div>
    );
}
