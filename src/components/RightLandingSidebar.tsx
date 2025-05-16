import { Stack } from "@chakra-ui/react";

interface RightLandingSidebarProps {
  className: string;
}

export default function RightLandingSidebar({
  className,
}: RightLandingSidebarProps) {
  return (
    <div
      className={`${className} text-center lg:border-l lg:border-dashed border-l-zinc-700 p-4`}
    >
      <Stack className="sticky top-5">
        <p className="mx-auto text-xs animate-bounce">
          currently listening
        </p>
        <iframe
          className="mx-2 rounded w-full sm:w-64"
          src="https://open.spotify.com/embed/track/2OwIGCjx7e7J1HHdAqIv21"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </Stack>
    </div>
  );
}
