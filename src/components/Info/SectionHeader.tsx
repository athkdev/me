import { ReactElement, ReactNode } from "react";
import { headerFont, primaryFont } from "@/shared/fonts";

interface TSectionHeaderProps {
  children: ReactNode;
}

export default function SectionHeader({
  children,
}: TSectionHeaderProps): ReactElement {
  return (
    <p
      className={`mb-2 ${primaryFont.className} text-black`}
    >
      {children}
    </p>
  );
}
