import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import { ReactElement } from "react";
import { Center, Divider, Skeleton, Stack } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }: { children: ReactElement }) {
  return (
    <div className="content-body flex justify-center sm:justify-end w-full h-screen">
      <Stack className="sm:border-l border-l-slate-100 p-2">
        <p className="mx-auto text-xs font-extralight animate-bounce">
          Currently listening
        </p>
        (
        <iframe
          className="mx-2 rounded w-full h-44 sm:w-64"
          src="https://open.spotify.com/embed/track/7uoFMmxln0GPXQ0AcCBXRq"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        : <Skeleton />)
        <Divider />
      </Stack>
    </div>
  );
}
