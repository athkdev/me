import { ReactElement } from "react";
import ProjectCard from "./ProjectCard";

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
    sourceUrl: "https://github.com/AtharvaKamble/atharvakamble.github.io",
    imgUrl: "/thissite.gif",
    hostedUrl: "https://athk.dev",
  },
  {
    title: "Present - a presentation app",
    desc: "A presentation app designed beautifully by keeping an animation-first approach in mind making it easier to make academic presentations",
    sourceUrl: "https://github.com/AtharvaKamble/present",
    imgUrl: "/present.gif",
    hostedUrl: "https://present-self.vercel.app/landing",
  },
  {
    title: "Relations builder",
    desc: "Allows users to add people and add relations between them somewhat close to social networks like FaceBook, LinkedIn, Instagram",
    sourceUrl: "https://github.com/AtharvaKamble/relation-builder",
    imgUrl: "",
    hostedUrl: "",
  },
  {
    title: "TLL - The Learners' Language",
    desc: "A language compiler written in Java as a passion project that implements easier syntax by trying to get as close to everyday lingo",
    sourceUrl: "https://github.com/AtharvaKamble/tll",
    imgUrl: "",
    hostedUrl: "",
  },
  {
    title: "The Asylum Nightmares",
    desc: "A third person horror game made using Unreal Engine 5 as part of capstone project for CSYE 7270 at Northeastern University",
    sourceUrl: "https://github.com/AtharvaKamble/tll",
    imgUrl: "",
    hostedUrl: "https://youtu.be/Ya-qxkFE-30",
  },
  {
    title: "ImageVibe - NFT Marketplace",
    desc: "Diving my hands into the web3 dApp ecosystems with Ethereum, Solidity, ether.js, and wallet integration. The project makes use of the ERC 721 standard for minting NFTs or Non-Fungible Tokens. The NFTs are created on IPFS p2p network, and the website is hosted on IPFS too!",
    sourceUrl: "https://github.com/AtharvaKamble/tll",
    imgUrl: "",
    hostedUrl: "",
  },
  {
    title: "WheresMyBlock - blockchain explorer for the Bitcoin ecosystem",
    desc: "A frontend application that helps blockchain enthusiasts to explore the current whereabouts of Bitcoin by keeping track of blockchain and cryptocurrency fundamentals such as block height, node location and latency, exchange rate, transactios, senders and receivers.",
    sourceUrl: "https://github.com/AtharvaKamble/tll",
    imgUrl: "",
    hostedUrl: "",
  },
];

export default function Projects({ className }: ProjectProps): ReactElement {
  return (
    <div className={`${className}`}>
      <p className="mb-2">Projects</p>
      <div className="grid grid-row-2 sm:grid-cols-2 gap-4 my-4">
        {projects?.map(({ title, sourceUrl, desc, imgUrl, hostedUrl }) => {
          return (
            <ProjectCard
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
