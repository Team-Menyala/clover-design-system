import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { FaArrowRight } from "react-icons/fa";

import { cn } from "../../lib/utils"
import { LoadingIcon } from "../loading";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-normal transition-all active:scale-95 cursor-pointer disabled:hover:scale-100 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 aria-invalid:border-danger",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-background shadow-xs hover:bg-primary/80 focus-visible:ring-primary-dark/20 disabled:bg-primary/60 disabled:hover:bg-primary/60",
        danger:
          "bg-danger text-background shadow-xs hover:bg-danger/80 focus-visible:ring-danger-dark/20 disabled:bg-danger/60 disabled:hover:bg-danger/60",
        outline:
          "bg-white text-foreground shadow-xs hover:bg-gray/10 border border-gray/40 focus-visible:ring-gray/40 disabled:bg-gray/20 disabled:hover:bg-gray/20",
        secondary:
          "bg-secondary text-background shadow-xs hover:bg-secondary/80 focus-visible:ring-secondary-dark/20 disabled:bg-secondary/60 disabled:hover:bg-secondary/60",
        ghost:
          "hover:bg-gray/10 disabled:bg-gray/20 disabled:hover:bg-gray/20",
      },
      size: {
        default: "h-11 px-5 py-3 has-[*svg]:px-4",
        sm: "h-9 rounded-md gap-1.5 px-3 [*svg:not([class*='size-'])]:size-3",
        lg: "h-12 rounded-md px-8 has-[*svg]:px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const buttonInsideVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap px-0",
  {
    variants: {
      size: {
        default: "",
        sm: "gap-1.5 [*svg:not([class*='size-'])]:size-3",
        lg: "",
        icon: "size-9",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export type ButtonType = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    loading?: boolean,
    arrow?: boolean
  }

function Button({
  className,
  variant,
  size,
  asChild = false,
  disabled,
  arrow = false,
  loading = false,
  children,
  ...props
}: ButtonType) {
  const Comp = asChild && !loading ? Slot : "button";
  const Comp2 = asChild && loading ? Slot : "div";
  const Disabled = disabled || loading;

  let Children = arrow ? <>{children}<FaArrowRight /></> : children;
  Children = loading ? (
    <div className="relative">
      <Comp2 className={cn("invisible", buttonInsideVariants({ size, className }))}>{Children}</Comp2>
      <div className="absolute inset-0 flex items-center justify-center">
        <LoadingIcon className="animate-spin size-5" />
      </div>
    </div>
  ) : Children;

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }), loading ? "cursor-wait" : "disabled:cursor-not-allowed")}
      children={Children}
      disabled={Disabled}
      {...props}
    />
  )
}

export { Button, buttonVariants }