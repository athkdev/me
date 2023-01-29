import { ReactElement } from "react";
import Title from "./Title";

interface JobDetailsProps {
  children: ReactElement;
}

export default function JobDetails(props: any): ReactElement {
  return <div className="sm:col-span-4">{props.children}</div>;
}
