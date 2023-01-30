import { ReactElement } from "react";
import Title from "./Title";

interface DetailsProps {
  children: ReactElement;
}

export default function Details(props: any): ReactElement {
  return <div className="sm:col-span-4">{props.children}</div>;
}
