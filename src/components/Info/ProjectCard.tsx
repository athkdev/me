import { Link } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ProjectCardProps {
  key: string;
  title: string;
  url: string;
  className?: string;
}

export default function ProjectCard({
  key,
  title,
  url,
  className,
}: ProjectCardProps): ReactElement {
  return (
    <Link href={url} isExternal>
      <div
        key={key}
        className={`p-2 relative rounded-sm bg-white text-black font-semibold hover:-translate-y-1 hover:bg-amber-500 hover:text-white transition hover:ease-in-out ${className}`}
      >
        {title}
        <p className="bg-white text-black mt-2 text-xs"></p>
      </div>
    </Link>
  );
}
