import React from "react";

export const Separator = (
  { className, orientation = "horizontal", decorative = true, ...props },
  ref
) => {
  return (
    <div
      ref={ref}
      className={`shrink-0 bg-border ${
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"
      } ${className}`}
      {...props}
    />
  );
};

Separator.displayName = "Separator";
