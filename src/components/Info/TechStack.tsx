import { ReactElement } from "react";

interface TechStackProps {
  key: string;
  array: string[];
}

export default function TechStack({
  key,
  array,
}: TechStackProps): ReactElement {
  return (
    <p key={key} className="mt-2 text-neutral-400">
      {array.map((element, i) => {
        return (
          <span key={i} className="text-neutral-400 text-xs">
            {element} {i < array.length - 1 ? " • " : null}
          </span>
        );
      })}
    </p>
  );
}
