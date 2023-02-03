import { ReactElement } from "react";

import { Image } from "@chakra-ui/react";

interface BlogHeaderImageProps {
  imageUrl: string;
  imageAltText?: string;
}

export default function BlogHeaderImage({
  imageUrl,
  imageAltText,
}: BlogHeaderImageProps): ReactElement {
  return (
    <Image
      src={imageUrl}
      alt={imageAltText ?? "Blog image."}
      borderRadius="md"
      width={"100%"}
      className="mt-6"
    />
  );
}
