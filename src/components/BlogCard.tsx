import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
  Container,
  Link,
} from "@chakra-ui/react";

interface BlogCardProps {
  imageUrl: string;
  title: string;
  imageAltText?: string;
}

export default function BlogCard({
  imageUrl,
  title,
  imageAltText,
}: BlogCardProps) {
  return (
    <Link
      href="https://medium.com/@atharvadkamble00/open-source-what-why-how-c8b7d2798573"
      isExternal={true}
    >
      <div className="border border-neutral-200 p-2 rounded hover:-translate-y-2 transition ease-in-out">
        <Image
          src={imageUrl}
          alt={imageAltText ?? "Blog image."}
          borderRadius="md"
          width={300}
          className="hover:-translate-y-2 transition ease-in-out"
        />
        <p className="mt-2 text-xs sm:text-base">{title}</p>
      </div>
    </Link>
  );
}
