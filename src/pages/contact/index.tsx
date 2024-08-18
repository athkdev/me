import { GoogleAnalytics } from "@next/third-parties/google";

export default function Contact() {
  return (
    <section className={`flex flex-col min-h-screen`}>
      <div className="mx-auto my-40">
        <p className="text-lg">
          Send an email to me at{" "}
          <a href="mailto:kamble.ath@northeastern.edu">
            <code className="bg-gray-800 p-1 text-white rounded hover:bg-gray-700 hover:cursor-pointer">
              kamble [dot] ath [at] northeastern [dot] edu
            </code>
          </a>
        </p>
      </div>

      <GoogleAnalytics gaId="G-DS9411FNK4" />
    </section>
  );
}
