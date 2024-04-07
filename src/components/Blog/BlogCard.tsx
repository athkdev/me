import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Image, Link } from "@chakra-ui/react";

interface BlogCardProps {
  imageUrl: string;
  title: string;
  imageAltText?: string;
  blogUrl: string;
}

export default function BlogCard({
  imageUrl,
  title,
  imageAltText,
  blogUrl,
}: BlogCardProps) {
  return (
    <>
      <Link href={blogUrl}>
        <div className="border border-neutral-200 p-2 rounded hover:-translate-y-2 transition ease-in-out">
          <Image
            src={imageUrl}
            alt={imageAltText ?? "Blog image."}
            borderRadius="md"
            width={300}
            className=""
          />
          <p className="mt-2 text-xs sm:text-base">{title}</p>
        </div>
      </Link>
    </>
  );
}
