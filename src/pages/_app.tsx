import Contact from "@/components/Contact";
import Nav from "@/components/nav";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import { ChakraProvider, Divider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useState } from "react";
const _ = require("lodash");

export default function App({ Component, pageProps }: AppProps) {
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  return (
    <ChakraProvider>
      <div className={`bg-black text-white`}>
        <Nav
          key="nav"
          resumeModalOpen={resumeModalOpen}
          setResumeModalOpen={setResumeModalOpen}
        />
        <Divider />
        <Contact open={resumeModalOpen} setOpen={setResumeModalOpen} />
        <Component {...pageProps} />
        <Analytics />
      </div>
    </ChakraProvider>
  );
}
