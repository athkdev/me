import { ReactElement, ReactNode } from "react";
import {headerFont} from "@/shared/fonts";

interface TSectionHeaderProps {
  children: ReactNode;
}

export default function SectionHeader({
  children,
}: TSectionHeaderProps): ReactElement {
  return (
    <p
      className={`mb-2 text-4xl ${headerFont.className} font-extrabold text-stone-400`}
    >
      {children}
    </p>
  );
}
