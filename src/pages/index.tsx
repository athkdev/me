import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/nav";

import { ReactElement } from "react";
import { Center } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }: { children: ReactElement }) {
  return (
    <Center>
      <h1>This is the main page</h1>
    </Center>
  );
}
