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
    <p key={key} className={`${className} text-neutral-400`}>
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
