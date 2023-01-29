import Nav from "@/components/nav";
import "@/styles/globals.css";
import { ChakraProvider, Divider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <div className={""}>
        <Nav />
        <Divider />
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}
