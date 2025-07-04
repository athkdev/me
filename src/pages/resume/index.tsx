import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Atharva Kamble",
  description: "View Atharva Kamble's Resume",
};

export default function Resume() {
  return (
    <div className="min-h-screen">
      <iframe src="/cdn/resume.pdf" className="min-h-screen w-full" />
      <GoogleAnalytics gaId="G-DS9411FNK4" />
    </div>
  );
}
