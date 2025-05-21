import * as React from "react"

import { cn } from "../../lib/utils"

function Input({
  className,
  type,
  prefix,
  suffix,
  ...props
}: React.ComponentProps<"input"> & {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}) {
  return (
    <div className="relative flex items-center w-full">
      {prefix && (
        <div className="absolute left-3 flex items-center pointer-events-none">
          {prefix}
        </div>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-gray/40 flex h-10 w-full min-w-0 rounded-md border bg-white px-4 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-10 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-danger/20 aria-invalid:border-danger-light",
          prefix && "pl-10",
          suffix && "pr-10",
          className
        )}
        {...props}
      />
      {suffix && (
        <div className="absolute right-3 flex items-center pointer-events-none">
          {suffix}
        </div>
      )}
    </div>
  );
}

export { Input }
