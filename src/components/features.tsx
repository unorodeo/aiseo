import { Timer, Zap, ZoomIn } from "lucide-react";

import type { LucideIcon } from "lucide-react";
import React from "react";
import { Section } from "./ui/section";

const features = [
  {
    icon: Timer,
    heading: "Performance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.",
  },
  {
    icon: ZoomIn,
    heading: "Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.",
  },
  {
    icon: Zap,
    heading: "Innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.",
  },
];

export const Features: React.FC = () => {
  return (
    <Section>
      <div className="container">
        <p className="mb-4 text-sm text-muted-foreground lg:text-base">
          OUR VALUES
        </p>
        <h2 className="text-3xl font-medium lg:text-4xl">Why Choose Us?</h2>
        <div className="grid gap-6 mt-14 lg:mt-20 lg:grid-cols-3">
          {features.map((f, index) => (
            <Card
              key={index}
              icon={f.icon}
              heading={f.heading}
              description={f.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

function Card({
  icon: Icon,
  heading,
  description,
}: {
  icon: LucideIcon;
  heading: string;
  description: string;
}) {
  return (
    <div className="p-5 border rounded-lg bg-muted/60">
      <span className="flex items-center justify-center mb-8 rounded-full size-12 bg-background">
        <Icon className="size-6" />
      </span>
      <h3 className="mb-2 text-xl font-medium">{heading}</h3>
      <p className="leading-7 text-muted-foreground">{description}</p>
    </div>
  );
}
