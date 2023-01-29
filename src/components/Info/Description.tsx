import { ReactElement } from "react";
import Title from "./Title";

interface DescriptionProps {
  children: ReactElement;
}

export default function Description(props: any): ReactElement {
  return <div className="mb-8">{props.children}</div>;
}
