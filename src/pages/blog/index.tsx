import BlogCard from "@/components/Blog/BlogCard";
import { Button, Center, Grid, Link, Stack } from "@chakra-ui/react";
import { useState } from "react";

export default function Blog() {
  const [isHover, setIsHover] = useState<boolean>(false);
  function handleHover() {
    setIsHover((prevState) => !prevState);
  }

  return (
    <Center className="m-6">
      <Stack className="text-center">
        <div className="text-xs mb-4 p-4 bg-neutral-800 rounded">
          Check out my Leetcode resources on Notion.{" "}
          <Link
            href="https://adkio.notion.site/adkio/Leetcode-w-me-753a277aeab2456d9773478ef0d11a3c"
            className="m-2"
            isExternal
          >
            <Button
              colorScheme="yellow"
              size="xs"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              className="hover:text-white hover:-translate-y-0.5 transition ease-in-out relative"
            >
              Go to the resources
              <p
                className={`text-white bg-transparent text-xs absolute -right-40 ${
                  !isHover ? "hidden" : null
                }`}
              >
                Psst! Opens in a new tab.
              </p>
            </Button>
          </Link>
        </div>
        <p className="mb-2 mx-auto text-xs sm:text-base">These are my blogs!</p>
        <div className="grid grid-cols-2 gap-6">
          <BlogCard
            imageUrl="https://miro.medium.com/max/640/1*4aUPydBnK6n-i3oI0eWVkw.gif"
            imageAltText="Homer simpson clones and Peter Griffin."
            title="Open-source. What? Why? How?"
          />

          <BlogCard
            imageUrl="https://miro.medium.com/max/640/1*4aUPydBnK6n-i3oI0eWVkw.gif"
            imageAltText="Homer simpson clones and Peter Griffin."
            title="New blog post number 2"
          />
          <BlogCard
            imageUrl="https://miro.medium.com/max/828/1*BHzsQDZbRtoemiSlXmd3RA.gif"
            imageAltText="Homer simpson clones and Peter Griffin."
            title="New blog post number 3"
          />
        </div>
      </Stack>
    </Center>
  );
}
