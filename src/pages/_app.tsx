import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Nav from "@/components/nav";
import "@/styles/globals.css";
import { ChakraProvider, Divider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  return (
    <ChakraProvider>
      <div className={""}>
        <Nav
          key="nav"
          resumeModalOpen={resumeModalOpen}
          setResumeModalOpen={setResumeModalOpen}
        />
        <Divider />
        <Contact open={resumeModalOpen} setOpen={setResumeModalOpen} />
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}
