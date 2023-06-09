import EmailForResume from "@/components/EmailForResume";
import Nav from "@/components/nav";
import "@/styles/globals.css";
import { TAILWIND } from "../shared/styles";
import { CustomStyles } from "../shared/types";

import { ChakraProvider, Divider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
const _ = require("lodash");

const _initStyles: CustomStyles = {
  colorClass: TAILWIND.color.primary,
  backgroundClass: TAILWIND.background.primary,
};

export default function App({ Component, pageProps }: AppProps) {
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [darkModeToggle, setDarkModeToggle] = useState<boolean>(true); // this value will come from the cookies just like the _initStyles

  const [styles, setStyles] = useState<CustomStyles>(_initStyles);

  useEffect(() => {
    setStyles((prev: CustomStyles) => {
      const tmp = _.cloneDeep(prev);
      tmp.colorClass = darkModeToggle
        ? TAILWIND.color.secondary
        : TAILWIND.color.primary;

      tmp.backgroundClass = darkModeToggle
        ? TAILWIND.background.primary
        : TAILWIND.background.secondary;

      return tmp;
    });
  }, [darkModeToggle]);

  return (
    <ChakraProvider>
      <div className={`${styles.backgroundClass} ${styles.colorClass}`}>
        <Nav
          key="nav"
          resumeModalOpen={resumeModalOpen}
          setResumeModalOpen={setResumeModalOpen}
          darkModeToggle={darkModeToggle}
          setDarkModeToggle={setDarkModeToggle}
          setStyles={setStyles}
        />
        <Divider />
        <EmailForResume open={resumeModalOpen} setOpen={setResumeModalOpen} />
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}
