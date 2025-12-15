import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { JSX, ReactNode } from "react";

const sizeValues = {
  icon: "size-5",
  small: "size-10",
  medium: "size-12",
  large: "size-14",
  auto: "",
};

export type IconButtonProps = {
  href?: string;
  tooltip?: string;
  hidden?: boolean;
  title?: string;
  className?: string;
  onClick?: () => void;
  size?: keyof typeof sizeValues;
  icon?: LucideIcon | JSX.ElementType;
  animationHover?: boolean;
  placement?: "top" | "right" | "bottom" | "left";
  children?: ReactNode;
  align?: "center" | "start" | "end";
  tooltipContent?: ReactNode;
  alwaysShowTooltipContent?: boolean;
};

function IconButton({
  href,
  tooltip,
  title,
  className,
  onClick,
  size = "medium",
  icon: Icon,
  hidden,
  animationHover = true,
  placement = "bottom",
  align = "center",
  children,
  tooltipContent,
  alwaysShowTooltipContent = undefined,
}: IconButtonProps) {
  if (hidden) return;

  const Comp = href ? Link : Button;
  const hasTooltip = !!tooltip;

  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip open={alwaysShowTooltipContent}>
        <div
          className={cn(
            "inline-flex items-center justify-center aspect-square",
            animationHover && "group transition-all size-10 hover:size-14 p-2"
          )}
        >
          <TooltipTrigger asChild>
            <Comp
              href={href ?? "#"}
              onClick={onClick}
              className={cn(
                "inline-flex p-0 bg-transparent hover:bg-transparent items-center justify-center cursor-pointer rounded-lg [&>svg]:size-4",
                sizeValues[size],
                animationHover && "group-hover:shrink-0 hover:bg-accent",
                className
              )}
            >
              {Icon && <Icon />}
              {title}
              {children}
            </Comp>
          </TooltipTrigger>
        </div>
        {hasTooltip && (
          <TooltipContent
            updatePositionStrategy="always"
            side={placement}
            align={align}
            sideOffset={8}
            className="shadow-none bg-transparent p-0 rounded-none border-0"
          >
            {!tooltipContent ? (
              <div className="px-3 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md shadow-md font-medium text-sm">
                {tooltip}
              </div>
            ) : (
              tooltipContent
            )}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}

export default IconButton;
