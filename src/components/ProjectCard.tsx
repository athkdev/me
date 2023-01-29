import { Divider, Link } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ProjectCardProps {
  title: string;
  desc: string;
}

export default function ProjectCard({
  title,
  desc,
}: ProjectCardProps): ReactElement {
  return (
    <div className="p-2 border border-red-200 hover:border-red-800 bg-slate-100 rounded hover:-translate-y-1 hover:transition hover:ease-in-out duration-100">
      <p className="font-bold">{title}</p>
      <Divider />
      <p>{desc}</p>
    </div>
  );
}
