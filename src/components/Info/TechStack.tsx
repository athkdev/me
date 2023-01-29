import { ReactElement } from "react";

interface TechStackProps {
  array: string[];
}

export default function TechStack({ array }: TechStackProps): ReactElement {
  return (
    <p className="mt-2 text-neutral-400">
      {array.map((element, i) => {
        return (
          <span className="text-neutral-400 text-xs">
            {element} {i < array.length - 1 ? " • " : null}
          </span>
        );
      })}
    </p>
  );
}
