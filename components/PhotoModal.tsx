import { cn } from "@/lib/utils";
import { ReactElement } from "react";
import { createPortal } from "react-dom";

function PhotoModal({
  children,
  type,
}: {
  children: ReactElement<typeof Image>;
  type?: "square" | "circle";
}) {
  return (
    <>
      <div
        className={cn("cursor-pointer", type === "circle" && "rounded-full")}
      >
        {children}
      </div>

      {createPortal(<div className=""></div>, document.body)}
    </>
  );
}

export default PhotoModal;
