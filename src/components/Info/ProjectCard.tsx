import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { ReactElement, useState } from "react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

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


        < HoverCard >
            <HoverCardTrigger>
                <div
                    key={key}
                    className={`p-2 relative flex flex-col justify-between cursor-pointer rounded border-2 border-white text-white font-semibold h-60 hover:-translate-y-1 transition hover:ease-in-out ${className}`}
                >
                    <span className="text-base font-extrabold">{title}</span>
                    <span className="text-sm font-thin no-underline">{desc}</span>
                    <p className="bg-white text-black mt-2 text-[9px]"></p>
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="bg-gray-900 border-0">
                {desc}
                <br />
                <br />
                <Link href={url} isExternal><span className="text-sky-800">github <ExternalLinkIcon mx="2px" boxSize={3} /></span> </Link>
            </HoverCardContent>
        </HoverCard >
    );
}
