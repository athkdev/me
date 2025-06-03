import { ReactElement, ReactNode } from "react";
import { headerFont, primaryFont } from "@/shared/fonts";

interface TSectionHeaderProps {
  children: ReactNode;
  className?: string;
}

export default function SectionHeader({
  children,
  className,
}: TSectionHeaderProps): ReactElement {
  return (
    <p
      className={`mb-2 ${primaryFont.className} text-black ${className}`}
    >
      {children}
    </p>
  );
}
