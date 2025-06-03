import { ReactElement, useState } from "react";
import dynamic from "next/dynamic";
import SectionHeader from "./SectionHeader";
import ProjectTitle from "./ProjectTitle";
import StackingCards, {
  StackingCardItem,
} from "@/fancy/components/blocks/stacking-cards";

interface ProjectProps {
  className?: string;
}

interface Project {
  title: string;
  desc: string;
  sourceUrl: string;
  imgUrl: string;
  hostedUrl: string;
  blogUrl: string;
}

const projects: Project[] = [
  {
    title: "This site!",
    desc: "Built in Next.js, hosted on GitHub pages, this site is kind of like the initial screening of knowing me - to know me more, lets network!",
    sourceUrl: "https://github.com/athkdev/me",
    imgUrl: "https://cdn.athk.dev/gif/thissite.gif",
    hostedUrl: "https://athk.dev",
    blogUrl: "https://blog.athk.dev/projects/portfolio",
  },
  {
    title: "Present - a presentation app",
    desc: "A presentation app designed beautifully by keeping an animation-first approach in mind making it easier to make academic presentations",
    sourceUrl: "https://github.com/athkdev/present",
    imgUrl: "https://cdn.athk.dev/gif/present.gif",
    hostedUrl: "https://present.athk.dev/present",
    blogUrl: "https://blog.athk.dev/projects/present",
  },
  {
    title: "Minecraft chunk with Procedural Terrain Generation",
    desc: "",
    sourceUrl: "https://github.com/athkdev/minecraft",
    imgUrl: "/cdn/gif/minecraft.gif",
    hostedUrl: "https://minecraft.athk.dev/",
    blogUrl: "https://blog.athk.dev/projects/minecraft-chunk-generator",
  },
  {
    title: "My tech blog",
    desc: "My blog where I post leetcode explainations, algorithm notes and random stuff related to current tech",
    sourceUrl: "https://github.com/athkdev/blog",
    imgUrl: "https://cdn.athk.dev/gif/thissite.gif",
    hostedUrl: "https://blog.athk.dev/",
    blogUrl: "https://blog.athk.dev/projects/portfolio",
  },
  {
    title: "The Asylum Nightmares",
    desc: "A third person horror game made using Unreal Engine 5 as part of capstone project for CSYE 7270 at Northeastern University",
    sourceUrl: "https://github.com/athkdev",
    imgUrl: "https://cdn.athk.dev/gif/game_ue5.gif",
    hostedUrl: "https://youtu.be/Ya-qxkFE-30",
    blogUrl: "https://blog.athk.dev/projects/portfolio",
  },
  {
    title: "ImageVibe - NFT Marketplace",
    desc: "Diving my hands into the web3 dApp ecosystems with Ethereum, Solidity, ether.js, and wallet integration. The project makes use of the ERC 721 standard for minting NFTs or Non-Fungible Tokens. The NFTs are created on IPFS p2p network, and the website is hosted on IPFS too!",
    sourceUrl: "https://github.com/athkdev/",
    imgUrl: "https://cdn.athk.dev/gif/image_vibe.gif",
    hostedUrl: "",
    blogUrl: "https://blog.athk.dev/projects/portfolio",
  },
  {
    title: "WheresMyBlock - blockchain analyzer",
    desc: "A frontend application that helps blockchain enthusiasts to explore the current whereabouts of Bitcoin by keeping track of blockchain and cryptocurrency fundamentals such as block height, node location and latency, exchange rate, transactios, senders and receivers.",
    sourceUrl: "https://github.com/athkdev/",
    imgUrl: "https://cdn.athk.dev/gif/btc_explorer.gif",
    hostedUrl: "",
    blogUrl: "https://blog.athk.dev/projects/portfolio",
  },
  {
    title: "Edeetor - developer tools",
    desc: "Local code editor and runtime in the browser",
    sourceUrl: "https://github.com/athkdev/edeetor",
    imgUrl: "https://cdn.athk.dev/gif/edeetor.gif",
    hostedUrl: "",
    blogUrl: "https://blog.athk.dev/projects/portfolio",
  },
  {
    title: "Go-pomo - pomodoro in the terminal",
    desc: "Pomodoro app in the terminal with preset times",
    sourceUrl: "https://github.com/athkdev/go-pomo",
    imgUrl: "https://cdn.athk.dev/gif/go-pomo.gif",
    hostedUrl: "",
    blogUrl: "https://blog.athk.dev/projects/portfolio",
  },
];

const LazyProjectCard = dynamic(() => import("./ProjectCard"));

export default function Projects({ className }: ProjectProps): ReactElement {
  const [currentProject, setCurrentProject] = useState<string>("");

  function onHover(url: string) {
    setCurrentProject(() => url);
  }

  return (
    <section className={`min-h-screen min-w-full ${className}`}>
      <SectionHeader className="mb-10">
        some projects i&apos;ve built
      </SectionHeader>

      <StackingCards totalCards={projects.length} scaleMultiplier={0.07}>
        {projects?.map(
          ({ title, sourceUrl, desc, imgUrl, hostedUrl, blogUrl }, i) => {
            return (
              <StackingCardItem
                index={i}
                key={title.toLowerCase()}
                className="mb-20"
              >
                <LazyProjectCard
                  key={title.toLowerCase()}
                  title={title}
                  sourceUrl={sourceUrl}
                  desc={desc}
                  hostedUrl={hostedUrl}
                  blogUrl={blogUrl}
                  imgUrl={
                    imgUrl.length > 0
                      ? imgUrl
                      : "https://www.icegif.com/wp-content/uploads/2023/01/icegif-162.gif"
                  }
                  className={``}
                />
              </StackingCardItem>
            );
          }
        )}
      </StackingCards>

      <div className="grid grid-row-2 sm:grid-cols-2 gap-4 my-4 sm:-mx-20"></div>
    </section>
  );
}
