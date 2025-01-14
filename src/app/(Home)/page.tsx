import Image from "next/image";
import Hero from "../_components/Hero";
import Features from "../_components/Features";
import HowItWorks from "../_components/HowItWorks";
import Pricing from "../_components/Pricing";
import Benefits from "../_components/Benefits";
import Testimonials from "../_components/Testimonials";
import Security from "../_components/Security";
import Faqs from "../_components/Faqs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Benefits />
      <Testimonials />
      <Security />
      <Faqs />
    </div>
  );
}
