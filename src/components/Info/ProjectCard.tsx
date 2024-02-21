import { Link } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ProjectCardProps {
  key: string;
  title: string;
  url: string;
  desc: string;
  className?: string;
}

export default function ProjectCard({
  key,
  title,
  url,
  desc, 
  className,
}: ProjectCardProps): ReactElement {
  return (
    <Link href={url} isExternal>
      <div
        key={key}
        className={`p-2 relative flex flex-col justify-between rounded border-2 border-white text-white font-semibold h-48 hover:-translate-y-1 hover:bg-amber-500 transition hover:ease-in-out ${className}`}
        title={desc}
      >
        <span className="text-base font-extrabold">{title}</span>
        <span className="text-sm font-thin no-underline">{desc}</span>
        <p className="bg-white text-black mt-2 text-xs"></p>
      </div>
    </Link>
  );
}
