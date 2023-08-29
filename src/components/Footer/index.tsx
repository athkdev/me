import { Divider, Heading, Input } from "@chakra-ui/react";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <div className={` ${className}`}>
      <Divider className="flex" orientation="horizontal" />
      This is the footer
    </div>
  );
}
