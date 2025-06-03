import { GoogleAnalytics } from "@next/third-parties/google";
import { useState } from "react";

export default function Contact() {
  return (
    <section className={`flex flex-col min-h-screen bg-white`}>
      <div className="mx-auto my-40">
        <p className="text-lg text-neutral-400">
          Mail me at
          <a href="mailto:kamble.ath@northeastern.edu">
            <span className="text-neutral-800 p-1 rounded p-2">
              ath <span className="text-neutral-400">[dot]</span> neue <span className="text-neutral-400">[at]</span> gmail <span className="text-neutral-400">[dot]</span> com 
            </span>
          </a>
        </p>
      </div>

      {/* <BusinessCard />   */}

      <GoogleAnalytics gaId="G-DS9411FNK4" />
    </section>
  );
}


function BusinessCard(): JSX.Element {
  const [hoveredLink, setHoveredLink] = useState<"portfolio" | "twitter" | "github" | "email">("portfolio");

  const linkParts = {
    portfolio: {prefix: "https://", suffix: "", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18"/>
      </svg>
    )},
    twitter: {prefix: "https://x.com/", suffix: "", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
      </svg>
    )},
    github: {prefix: "https://github.com/", suffix: "", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    )},
    email: {prefix: "", suffix: ".neue@gmail.com", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    )}
  };

  return (
    <div className="flex gap-8 p-6 bg-neutral-100 rounded-lg shadow-sm border border-dashed border-neutral-400">
      <div className="flex flex-col gap-3">
        {Object.keys(linkParts).map((link) => (
          <button
            key={link}
            onMouseEnter={() => setHoveredLink(link as keyof typeof linkParts)}
            className={`px-4 py-2 rounded transition-all flex items-center gap-2 ${
              hoveredLink === link 
                ? "bg-neutral-200 text-neutral-800" 
                : "bg-white text-neutral-500 hover:bg-neutral-50"
            }`}
          >
            {linkParts[link as keyof typeof linkParts].icon}
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="flex items-center">
        <p className="text-lg font-mono text-neutral-700">
          <span className="transition-all">{linkParts[hoveredLink].prefix}</span>
          <span className="text-neutral-900">athk.dev</span>
          <span className="transition-all">{linkParts[hoveredLink].suffix}</span>
        </p>
      </div>
    </div>
  );
}