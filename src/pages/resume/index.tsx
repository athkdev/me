import { GoogleAnalytics } from "@next/third-parties/google";

export default function Resume() {
  return (
    <div className="min-h-screen">
      <iframe
        src="/cdn/resume.pdf"
        className="min-h-screen w-full"
      />
      <GoogleAnalytics gaId="G-DS9411FNK4" />
    </div>
  );
}
