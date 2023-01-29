import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import { ReactElement } from "react";
import { Center, Divider, Skeleton, Stack } from "@chakra-ui/react";
import ProjectTimeline from "@/components/ProjectTimeline";
import Info from "@/components/Info/index";
import RightLandingSidebar from "@/components/RightLandingSidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }: { children: ReactElement }) {
  return (
    // <div className="flex flex-col sm:flex-row sm:justify-center min-h-screen">
    //   <Info className="" />
    //   <div className="text-center sm:border-l border-l-zinc-700 p-4">
    //     <Stack className="sticky top-5">
    //       <p className="mx-auto text-xs font-extralight animate-bounce">
    //         Currently listening
    //       </p>
    //       <iframe
    //         className="mx-2 rounded w-full sm:w-64"
    //         src="https://open.spotify.com/embed/track/7uoFMmxln0GPXQ0AcCBXRq"
    //         allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    //         loading="lazy"
    //       ></iframe>
    //     </Stack>
    //   </div>
    // </div>
    <div className="flex relative justify-center h-full">
      <Info className="m-4" />
      <RightLandingSidebar className="absolute -bottom-44 lg:inset-y-0 lg:right-0" />
    </div>
  );
}
