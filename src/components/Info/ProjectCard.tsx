import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { ReactElement } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface ProjectCardProps {
  key: string;
  title: string;
  sourceUrl: string;
  desc: string;
  className?: string;
  imgUrl: string;
  imgAltText?: string;
  hostedUrl: string;
  blogUrl: string;
}

export default function ProjectCard({
  key,
  title,
  sourceUrl,
  desc,
  className,
  imgUrl,
  hostedUrl,
  blogUrl,
}: ProjectCardProps): ReactElement {
  return (
    <HoverCard>
      <div
        key={key}
        className={`p-3 relative flex flex-col justify-between cursor-pointer rounded border-stone-800 bg-neutral-800  text-white font-semibold transition ${className}`}
      >
        <HoverCardTrigger>
          <span className="text-base text-gray-300">{title}</span>
          {/* <span className="text-sm font-thin no-underline">{desc}</span> */}
          <img src={imgUrl} className="rounded mt-2" />
        </HoverCardTrigger>
        <div className="flex gap-5 mt-2">
          <Link
            href={sourceUrl}
            isExternal
            className="hover:-translate-y-1 transition hover:ease-in-out"
          >
            <span className="text-orange-400 hover:-translate-y-1 transition hover:ease-in-out">
              github <ExternalLinkIcon mx="2px" boxSize={3} />
            </span>{" "}
          </Link>
          {hostedUrl.length > 0 ? (
            <Link
              href={hostedUrl}
              isExternal
              className="hover:-translate-y-1 transition hover:ease-in-out"
            >
              <span className="text-orange-400">
                try out <ExternalLinkIcon mx="2px" boxSize={3} />
              </span>{" "}
            </Link>
          ) : null}

          {blogUrl.length > 0 ? (
            <Link
              href={blogUrl}
              className="hover:-translate-y-1 transition hover:ease-in-out"
            >
              <span className="text-orange-400">
                blog <ExternalLinkIcon mx="2px" boxSize={3} />
              </span>{" "}
            </Link>
          ) : null}
        </div>
      </div>
      <HoverCardContent className="bg-stone-800 opacity-90 border-0">
        {desc}
        <br />
        <br />
        <Link href={sourceUrl} isExternal>
          <span className="text-orange-400">
            github <ExternalLinkIcon mx="2px" boxSize={3} />
          </span>{" "}
        </Link>
      </HoverCardContent>
    </HoverCard>
  );
}
