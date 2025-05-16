import { ReactElement } from "react";
import Info from "@/components/Info/index";
import RightLandingSidebar from "@/components/RightLandingSidebar";

import { GoogleAnalytics } from "@next/third-parties/google";

export default function Home({ children }: { children: ReactElement }) {
  return (
    <section className="flex relative justify-center min-h-screen bg-white">
      <Info className="m-4" />
      <RightLandingSidebar className="absolute -bottom-44 lg:inset-y-0 lg:right-0 text-neutral-600" />
      <GoogleAnalytics gaId="G-DS9411FNK4" />
    </section>
  );
}
