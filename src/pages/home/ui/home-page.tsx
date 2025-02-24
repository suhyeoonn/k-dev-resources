import { CategorySection } from "./category-section";
import { ContributeSection } from "./contribute-section";
import { SiteHeader } from "./site-header";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <CategorySection />
        <ContributeSection />
      </main>
    </div>
  );
}
