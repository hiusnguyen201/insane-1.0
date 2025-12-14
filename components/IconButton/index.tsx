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

const sizeValues = {
  small: "size-10",
  medium: "size-12",
  large: "size-14",
};

export type IconButtonProps = {
  href?: string;
  tooltip?: string;
  hidden?: boolean;
  title?: string;
  className?: string;
  onClick?: () => void;
  size?: keyof typeof sizeValues;
  icon?: LucideIcon;
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
}: IconButtonProps) {
  if (hidden) return;

  const Comp = href ? Link : Button;
  const hasTooltip = !!tooltip;

  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <div className="size-10 hover:size-14 p-2 flex items-center justify-center aspect-square transition-all group">
          <TooltipTrigger asChild>
            <Comp
              href={href ?? "#"}
              onClick={onClick}
              className={cn(
                "inline-flex items-center justify-center group-hover:shrink-0 hover:bg-accent cursor-pointer rounded-lg [&>svg]:size-4",
                sizeValues[size],
                className
              )}
            >
              {Icon && <Icon />}
              {title}
            </Comp>
          </TooltipTrigger>
        </div>
        {hasTooltip && (
          <TooltipContent
            align="center"
            sideOffset={8}
            className="bg-black text-white dark:bg-white dark:text-black font-medium text-sm border-0"
          >
            <p>{tooltip}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}

export default IconButton;
