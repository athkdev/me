import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section className={``}>
      <SectionHeader>about</SectionHeader>
      <p className="text-neutral-400 ">
        I&apos;m Atharva. I am a software engineer based out of Boston, MA. I
        specialize in fullstack engineering, application development and cloud
        infrastructure. I am an AI enthusiast with a focus on Gen AI and
        transformer architecture with PyTorch and absolutely love prompt
        engineering!
      </p>
      <p className="text-neutral-400 mt-4">
        I enjoy building dynamic, creative products from start to finish.
        Focused on developing intuitive experiences that constantly grow and
        improve based on user metrics. Always shipping!
      </p>
      <p className="text-neutral-400 mt-4">
        I am a HUGE mechanical keyboard enthusiast. At the moment, I am using
        the{" "}
        <a
          className="italic underline underline-offset-4"
          href="https://rkgamingstore.com/products/r75-75-wired-gaming-keyboard"
        >
          Royal Kludge R75
        </a>{" "}
        with Silver Creamy Linear Switches.
      </p>
      <p className="mt-4 flex items-center text-xs text-neutral-400">
        <span className="mr-2 inline-flex h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        Open to roles from May &apos;25.
      </p>
    </section>
  );
}
