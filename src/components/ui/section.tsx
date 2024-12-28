import React, { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

interface Props extends ComponentPropsWithoutRef<"section"> {
  bleed?: boolean;
}

export const Section: React.FC<Props> = ({
  children,
  className,
  bleed = false,
  ...props
}) => {
  return (
    <section
      className={cn(
        "max-w-6xl mx-auto px-4 md:px-8 py-12",
        {
          "max-w-full py-0": bleed,
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
