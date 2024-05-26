import { Stack } from "@chakra-ui/react";

interface RightLandingSidebarProps {
  className: string;
}

export default function RightLandingSidebar({
  className,
}: RightLandingSidebarProps) {
  return (
    <div
      className={`${className} text-center lg:border-l border-l-zinc-700 p-4`}
    >
      <Stack className="sticky top-5">
        <p className="mx-auto text-xs font-extralight animate-bounce">
          Currently listening
        </p>
        <iframe
          className="mx-2 rounded w-full sm:w-64"
          src="https://open.spotify.com/embed/track/3qhlB30KknSejmIvZZLjOD?utm_source=generator"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </Stack>
    </div>
  );
}
