import { Stack } from "@chakra-ui/react";

interface RightLandingSidebarProps {
  className: string;
}

function Spotify() {
  return (
    <article>
      <p className="mx-auto text-xs animate-bounce">currently listening</p>
      <iframe
        className="mx-2 rounded w-full sm:w-64"
        src="https://open.spotify.com/embed/track/2OwIGCjx7e7J1HHdAqIv21"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </article>
  );
}

function CatOfTheWeek() {
  return (
    <article>
      <p className="mx-auto text-xs animate-bounce">cat of the week</p>
      <img
        src="/cdn/cat-of-the-week.jpg"
        alt="Cat of the week"
        className="rounded w-64 object-cover"
      />
    </article>
  );
}

export default function RightLandingSidebar({
  className,
}: RightLandingSidebarProps) {
  return (
    <section
      className={`${className} text-center lg:border-l lg:border-dashed border-l-zinc-700 p-4`}
    >
      <div className="sticky top-5 flex flex-col gap-4">
        <Spotify />
      </div>
    </section>
  );
}
