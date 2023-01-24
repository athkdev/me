import { useRouter } from "next/router";
import { ReactElement, ReactNode } from "react";

export default function BlogTemplate(): ReactElement {
  const { query } = useRouter();

  return <p>This is from BlogTemplate. ID: {query.id}</p>;
}
