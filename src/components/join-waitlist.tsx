import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";
import { Section } from "./ui/section";
import { cn } from "@/lib/cn";
import { focusRing } from "./ui/focuses";

export const JoinWaitlist: React.FC = () => {
  return (
    <Section>
      <div className="container">
        <div className="flex flex-col w-full gap-16 p-8 overflow-hidden border rounded-lg bg-background/60 md:rounded-xl lg:flex-row lg:items-center lg:p-16">
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Impressed with AI✺SEO
              <br /> Join the waitlist
            </h3>
            <p className="text-muted-foreground lg:text-lg">
              Get the latest news, changelogs, updates, events, promotions and
              more in your inbox! We do not spam.
            </p>
          </div>
          <div className="shrink-0">
            <div className="flex flex-col justify-center gap-2 sm:items-center sm:flex-row">
              <input
                placeholder="Enter your email address"
                className={cn(
                  "h-12 w-full md:min-w-72 text-base placeholder:text-muted-foreground bg-background border-2 border-input ring-offset-2 rounded-md px-3",
                  focusRing
                )}
              />
              <Button className="text-base">Join waitlist</Button>
            </div>
            <p className="mt-2 text-xs text-left text-muted-foreground">
              View our{" "}
              <Link
                href="#"
                className={cn(
                  "underline hover:text-foreground rounded",
                  focusRing
                )}
              >
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
