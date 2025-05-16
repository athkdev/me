import { ReactElement } from "react";

interface TitleProps {
  name: string;
  className?: string;
}

export default function Title({ name, className }: TitleProps): ReactElement {
  return <p className={`${className} text-neutral-800`}>{name}</p>;
}
