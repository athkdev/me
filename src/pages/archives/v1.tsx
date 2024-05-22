import { ReactElement } from "react";
import Info from "@/components/Info/index";
import RightLandingSidebar from "@/components/RightLandingSidebar";

export default function Home({ children }: { children: ReactElement }) {
  return (
    <section className="flex relative justify-center min-h-screen">
      <Info className="m-4" />
      <RightLandingSidebar className="absolute -bottom-44 lg:inset-y-0 lg:right-0" />
    </section>
  );
}
