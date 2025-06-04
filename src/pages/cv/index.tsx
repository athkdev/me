import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV | Atharva Kamble",
  description: "View Atharva Kamble's CV",
};

export default function CV() {
  return (
    <div className="min-h-screen">
      <iframe src="/cdn/cv.pdf" className="min-h-screen w-full" />
      <GoogleAnalytics gaId="G-DS9411FNK4" />
    </div>
  );
}
