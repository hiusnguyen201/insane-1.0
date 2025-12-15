"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type Props = Exclude<ImageProps, "alt" | "src" | "className"> & {
  alt: string;
  src: string;
  className?: string;
  wrapperClassName?: string;
};

export default function Avatar({
  alt,
  src,
  className,
  wrapperClassName,
  ...rest
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative items-center rounded-full justify-center size-40",
        wrapperClassName
      )}
    >
      {!loaded && <Skeleton className="size-full rounded-full" />}

      <Image
        loading="lazy"
        width={320}
        height={320}
        className={cn(
          "size-full object-cover rounded-full",
          !loaded ? "invisible" : "visible",
          className
        )}
        onLoadingComplete={() => setLoaded(true)}
        alt={alt}
        src={src}
        {...rest}
      />
    </div>
  );
}
