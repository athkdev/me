import BlogCard from "@/components/Blog/BlogCard";
import { Center, Grid, Stack } from "@chakra-ui/react";

export default function Blog() {
  return (
    <Center className="m-6">
      <Stack>
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
