import BgGradient from "@/components/common/bg-gradient";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <div className="flex flex-col">
      <BgGradient/>
        <HeroSection/>
      </div>
      {/* <DemoSection/> */}
      {/* <HowItWorkSection/>
      <PricingSection/>
      <CTASection/> */}
    </div>
  );
}
