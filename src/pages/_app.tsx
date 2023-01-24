import Nav from "@/components/nav";
import "@/styles/globals.css";
import { ChakraProvider, Divider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Nav />
      <Divider />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
