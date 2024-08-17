import { ReactElement } from "react";
import dynamic from "next/dynamic";

interface ProjectProps {
  className?: string;
}

interface Project {
  title: string;
  desc: string;
  sourceUrl: string;
  imgUrl: string;
  hostedUrl: string;
}

const projects: Project[] = [
  {
    title: "This site!",
    desc: "Built in Next.js, hosted on GitHub pages, this site is kind of like the initial screening of knowing me - to know me more, lets network!",
    sourceUrl: "https://github.com/AtharvaKamble/me",
    imgUrl: "https://cdn.athk.dev/gif/thissite.gif",
    hostedUrl: "https://athk.dev",
  },
  {
    title: "Present - a presentation app",
    desc: "A presentation app designed beautifully by keeping an animation-first approach in mind making it easier to make academic presentations",
    sourceUrl: "https://github.com/AtharvaKamble/present",
    imgUrl: "https://cdn.athk.dev/gif/present.gif",
    hostedUrl: "https://present.athk.dev/present",
  },
  {
    title: "Minecraft chunk with Procedural Terrain Generation",
    desc: "",
    sourceUrl: "https://github.com/AtharvaKamble/minecraft",
    imgUrl: "https://cdn.athk.dev/gif/minecraft.gif",
    hostedUrl: "https://minecraft.athk.dev/",
  },
  {
    title: "My tech blog",
    desc: "My blog where I post leetcode explainations, algorithm notes and random stuff related to current tech",
    sourceUrl: "https://github.com/AtharvaKamble/blog",
    imgUrl: "https://cdn.athk.dev/gif/thissite.gif",
    hostedUrl: "https://blog.athk.dev/",
  },
  {
    title: "The Asylum Nightmares",
    desc: "A third person horror game made using Unreal Engine 5 as part of capstone project for CSYE 7270 at Northeastern University",
    sourceUrl: "https://github.com/AtharvaKamble",
    imgUrl: "https://cdn.athk.dev/gif/game_ue5.gif",
    hostedUrl: "https://youtu.be/Ya-qxkFE-30",
  },
  {
    title: "ImageVibe - NFT Marketplace",
    desc: "Diving my hands into the web3 dApp ecosystems with Ethereum, Solidity, ether.js, and wallet integration. The project makes use of the ERC 721 standard for minting NFTs or Non-Fungible Tokens. The NFTs are created on IPFS p2p network, and the website is hosted on IPFS too!",
    sourceUrl: "https://github.com/AtharvaKamble/",
    imgUrl: "https://cdn.athk.dev/gif/image_vibe.gif",
    hostedUrl: "",
  },
  {
    title: "WheresMyBlock - blockchain analyzer",
    desc: "A frontend application that helps blockchain enthusiasts to explore the current whereabouts of Bitcoin by keeping track of blockchain and cryptocurrency fundamentals such as block height, node location and latency, exchange rate, transactios, senders and receivers.",
    sourceUrl: "https://github.com/AtharvaKamble/",
    imgUrl: "https://cdn.athk.dev/gif/btc_explorer.gif",
    hostedUrl: "",
  },
  {
    title: "Edeetor - developer tools",
    desc: "Local code editor and runtime in the browser",
    sourceUrl: "https://github.com/AtharvaKamble/edeetor",
    imgUrl: "https://cdn.athk.dev/gif/edeetor.gif",
    hostedUrl: "",
  },
  {
    title: "Go-pomo - pomodoro in the terminal",
    desc: "Pomodoro app in the terminal with preset times",
    sourceUrl: "https://github.com/AtharvaKamble/go-pomo",
    imgUrl: "https://cdn.athk.dev/gif/go-pomo.gif",
    hostedUrl: "",
  },
];

const LazyProjectCard = dynamic(() => import("./ProjectCard"));

export default function Projects({ className }: ProjectProps): ReactElement {
  return (
    <div className={`${className}`}>
      <p className="mb-2">Projects</p>
      <div className="grid grid-row-2 sm:grid-cols-2 gap-4 my-4">
        {projects?.map(({ title, sourceUrl, desc, imgUrl, hostedUrl }) => {
          return (
            <LazyProjectCard
              key={title.toLowerCase()}
              title={title}
              sourceUrl={sourceUrl}
              desc={desc}
              hostedUrl={hostedUrl}
              imgUrl={
                imgUrl.length > 0
                  ? imgUrl
                  : "https://www.icegif.com/wp-content/uploads/2023/01/icegif-162.gif"
              }
            />
          );
        })}
      </div>
    </div>
  );
}
