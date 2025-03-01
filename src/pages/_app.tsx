import Contact from "@/components/Contact";
import Nav from "@/components/nav";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Roboto_Condensed, Abel } from "next/font/google";
import localFont from "next/font/local";

import { ChakraProvider, Divider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useState } from "react";
const _ = require("lodash");

const roboto = Roboto_Condensed({ weight: "400", subsets: ["latin"] });
const abel = Abel({ weight: "400", subsets: ["latin"] });

const geist = localFont({
  src: [
    {
      path: "../../public/fonts/Geist[wght].woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

const departureMonoFont = localFont({
  src: [
    {
      path: "../../public/fonts/DepartureMonoNerdFont.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

const overusedGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/OverusedGrotesk-VF.woff",
      //   weight: "400",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  return (
    <ChakraProvider>
      <div className={`bg-zinc-900 text-white ${overusedGrotesk.className}`}>
        {Component?.name.toLowerCase() === "resume" ? (
          <>
            <Component {...pageProps} />
            <Analytics />
          </>
        ) : (
          <>
            <Nav
              key="nav"
              resumeModalOpen={resumeModalOpen}
              setResumeModalOpen={setResumeModalOpen}
            />
            <Divider />
            <Contact open={resumeModalOpen} setOpen={setResumeModalOpen} />
            <Component {...pageProps} />
            <Analytics />
          </>
        )}
      </div>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </ChakraProvider>
  );
}
