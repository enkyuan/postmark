import LandingLayout from "./layout";
import { Hero } from "@monorepo/ui/components/hero";
import { Bento } from "@monorepo/ui/components/bento";

export default function LandingPage() {
  return (
    <LandingLayout>
      <div className="flex flex-col items-center justify-center h-full xl:py-32 md:py-60">
        <Hero />
        <Bento />
      </div>
    </LandingLayout>
  );
}
