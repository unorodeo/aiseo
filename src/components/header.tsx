import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/cn";
import { focusRing } from "@/components/ui/focuses";

export const Header: React.FC = () => {
  return (
    <header className="z-50 bg-transparent">
      <nav className="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl md:px-8">
        <Link
          href={"/"}
          className={cn(
            "rounded-lg p-1 inline-flex items-center justify-center text-2xl font-semibold whitespace-nowrap",
            focusRing
          )}
        >
          Ai✺SEO<Badge className="ml-2 font-mono" variant={"secondary"}>BETA</Badge>
        </Link>

        <div className="flex items-center gap-4">
          <Button
            type="button"
            size={"sm"}
            className="text-base"
          >
            Join waitlist
          </Button>
          <Button
            type="button"
            variant={"secondary"}
            size={"icon"}
          >
            <MenuIcon />
            <span className="sr-only">toggle menu</span>
          </Button>
        </div>
      </nav>
    </header>
  );
};
