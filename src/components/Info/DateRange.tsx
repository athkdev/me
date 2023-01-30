import { ReactElement } from "react";

interface DateRangeProps {
  start: string;
  end?: string;
  current?: boolean;
  className?: string;
}

export default function DateRange({
  start,
  end,
  current,
  className,
}: DateRangeProps): ReactElement {
  return (
    <p key={start} className={`${className} text-neutral-400 sm:col-span-2`}>
      {start} - {current ? "present" : end}
    </p>
  );
}
