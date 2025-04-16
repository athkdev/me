import { ReactElement } from "react";

interface BulletedListProps {
  key: string;
  array: string[];
  className?: string;
}

export default function BulletedList({
  key,
  array,
  className,
}: BulletedListProps): ReactElement {
  return (
    <p key={key} className={`${className} `}>
      {array.map((element, i) => {
        return (
          <span
            key={i}
            className="text-xs odd:text-stone-300 even:text-stone-500"
          >
            {element} {i < array.length - 1 ? " • " : null}
          </span>
        );
      })}
    </p>
  );
}
