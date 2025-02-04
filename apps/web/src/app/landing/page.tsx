import LandingLayout from "./layout";
import Hero from "@monorepo/ui/components/hero";

export default function LandingPage() {
  return (
    <LandingLayout>
      <div className="flex flex-col items-center justify-center h-full xl:py-32 md:py-24">
        <Hero />
      </div>
    </LandingLayout>
  );
}
