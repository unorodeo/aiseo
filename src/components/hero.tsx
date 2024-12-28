import { Button } from "@/components/ui/button";
import React from "react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/cn";
import { focusRing } from "./ui/focuses";

export const Hero: React.FC = () => {
  return (
    <Section className="py-32">
      <div className="container text-center">
        <div className="flex flex-col max-w-screen-lg gap-6 mx-auto">
          <h1 className="text-3xl font-extrabold lg:text-6xl">
            Productive SEO Powered By Artificial Intelligence
          </h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            Unlock the full potential of your website with our AI-powered SEO
            tool. Analyze, optimize, and rank higher effortlessly using
            cutting-edge algorithms. Drive more traffic, improve visibility, and
            achieve measurable results today.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-10 md:flex-row">
          <input
            type="text"
            name="waitlist"
            id="waitlist"
            className={cn(
              "h-12 w-full md:w-80 text-base placeholder:text-muted-foreground bg-background border-2 border-input ring-offset-2 rounded-md px-3",
              focusRing
            )}
            placeholder="Enter your email address"
          />
          <Button
            size="lg"
            className="w-full text-base md:w-auto"
          >
            Join waitlist
          </Button>
        </div>
      </div>
    </Section>
  );
};
