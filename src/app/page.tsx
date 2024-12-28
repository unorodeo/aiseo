import { FAQs } from "@/components/faqs";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { JoinWaitlist } from "@/components/join-waitlist";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <FAQs />
      <JoinWaitlist />
    </>
  );
}

