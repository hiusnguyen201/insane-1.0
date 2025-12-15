import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return <div className="max-w-screen-xl mx-auto p-24">{children}</div>;
}

export default Container;
