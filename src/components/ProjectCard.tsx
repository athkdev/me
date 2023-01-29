import { Divider, Link } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ProjectCardProps {
  key: string;
  title: string;
  desc: string;
}

export default function ProjectCard({
  key,
  title,
  desc,
}: ProjectCardProps): ReactElement {
  return (
    <div
      key={key}
      className="p-2 border border-red-200 hover:border-red-800 bg-slate-100 rounded hover:-translate-y-1 hover:transition hover:ease-in-out duration-100"
    >
      <p className="font-bold">{title}</p>
      <Divider />
      <p>{desc}</p>
    </div>
  );
}
