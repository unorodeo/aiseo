import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import { focusRing } from "./ui/focuses";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Integrations", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "Twitter", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "LinkedIn", href: "#" },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="px-8 py-12 border-t bg-muted/30">
      <nav className="grid grid-cols-2 gap-8 lg:grid-cols-6">
        <div className="col-span-2 mb-8 lg:mb-0">
          <Link
            href={"/"}
            className={cn(
              "rounded-lg p-1 inline-flex items-center justify-center text-2xl font-semibold whitespace-nowrap",
              focusRing
            )}
          >
            Ai✺SEO
          </Link>
          <div className="mt-2">
            <p className="w-4/6 text-sm font-medium text-muted-foreground">
              Productive search engine optimization tool powered by artifical
              intelligence.
            </p>
          </div>
        </div>
        {sections.map((section, sectionIdx) => (
          <div key={sectionIdx}>
            <h3 className="mb-4 font-bold">{section.title}</h3>
            <ul className="space-y-4 text-muted-foreground">
              {section.links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="font-medium hover:text-primary"
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <div className="flex flex-col justify-between gap-4 pt-8 mt-24 text-sm font-medium border-t text-muted-foreground md:flex-row md:items-center">
        <p>© 2024 AiSEO LLC. All rights reserved.</p>
        <ul className="flex gap-4">
          <li className="underline hover:text-primary">
            <a href="#"> Terms and Conditions</a>
          </li>
          <li className="underline hover:text-primary">
            <a href="#"> Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
