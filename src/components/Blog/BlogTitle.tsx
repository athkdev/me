import { ReactElement } from "react";

interface BlogTitleProps {
  title: string;
  className?: string;
}

export default function BlogTitle({
  className,
  title,
}: BlogTitleProps): ReactElement {
  return (
    <h1
      className={`${className} text-xl md:text-4xl font-extrabold mt-6 text-center`}
    >
      {title}
    </h1>
  );
}
