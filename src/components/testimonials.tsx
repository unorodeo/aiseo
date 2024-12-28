import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Section } from "./ui/section";

export const Testimonials = () => {
  return (
    <Section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <p className="max-w-4xl px-8 mb-16 font-medium lg:text-3xl">
            &ldquo;AiSEO was simple, productive, and fun to use. My team were
            blown away by the amount of analytics gotten from our sites. AiSEO is
            going to be a top contender for SEO platforms.&rdquo;
          </p>
          <div className="flex items-center gap-2 md:gap-4">
            <Avatar className="size-12 md:size-16">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-1.webp" />
              <AvatarFallback>Customer Name</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-sm font-medium md:text-base">John R. Doe</p>
              <p className="text-sm text-muted-foreground md:text-base">
                Software developer @ Acme corp
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
