import Contact from "@/components/Contact";
import Nav from "@/components/nav";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import { ChakraProvider, Divider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useState } from "react";
const _ = require("lodash");
import { primaryFont } from "@/shared/fonts";

export default function App({ Component, pageProps }: AppProps) {
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  return (
    <ChakraProvider>
      <div className={`bg-zinc-900 text-white ${primaryFont.className}`}>
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
