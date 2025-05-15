import BgGradient from "@/components/common/bg-gradient";
import DemoSection from "@/components/home/demo-section";
import HeroSection from "@/components/home/hero-section";
import HowItWorkSection from "@/components/home/howItWorkSection";

export default function Home() {
  return (
    <div className="relative w-full h-full">
        {/* <BgGradient/> */}
      <div className="flex flex-col">
        <HeroSection/>
        <DemoSection/>
      <HowItWorkSection/>
      </div>
      {/* <PricingSection/>
      <CTASection/> */}
    </div>
  );
}
