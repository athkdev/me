import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import { ReactElement } from "react";
import Info from "@/components/Info/index";
import RightLandingSidebar from "@/components/RightLandingSidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }: { children: ReactElement }) {
  return (
    <div className="flex relative justify-center h-full">
      <Info className="m-4" />
      <RightLandingSidebar className="absolute -bottom-44 lg:inset-y-0 lg:right-0" />
    </div>
  );
}
