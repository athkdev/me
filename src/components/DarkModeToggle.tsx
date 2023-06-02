import { MoonIcon, SunIcon } from "@chakra-ui/icons";

interface DarkModeToggleProps {
  toggle: boolean;
  setToggle: any;
  className?: string;
}

export default function DarkModeToggle({
  toggle,
  setToggle,
  className,
}: DarkModeToggleProps) {
  return (
    <span
      className={`p-2 rounded cursor-pointer ${className}`}
      onClick={() => setToggle((prev: boolean) => !prev)}
    >
      {toggle ? <SunIcon /> : <MoonIcon />}
    </span>
  );
}
