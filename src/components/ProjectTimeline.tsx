import { Center, Divider } from "@chakra-ui/react";
import { ReactElement } from "react";
import ReactFlow, { Background, Controls, Node } from "reactflow";
import "reactflow/dist/style.css";
import ProjectCard from "./ProjectCard";

interface ProjectTimelineProps {
  classes: string;
}

export default function ProjectTimeline({
  classes,
}: ProjectTimelineProps): ReactElement {
  const projects = [
    {
      title: "Project Name",
      desc: "This is some random description",
    },
    {
      title: "TLL - The Learner's Language",
      desc: "It's a great compiler.",
    },
    {
      title: "Project Name",
      desc: "This is some random description",
    },
    {
      title: "Project Name",
      desc: "This is some random description",
    },
  ];

  return (
    <div
      className={`${classes} grid grid-flow-row grid-cols-3 gap-4 sm:h-[calc(100vh-80px)]`}
    >
      {projects.map((project) => {
        return <ProjectCard title={project.title} desc={project.desc} />;
      })}
    </div>
  );
}
