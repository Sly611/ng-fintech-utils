import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ApiPlayground from "./components/api-playground";
import FeatureGrid from "./components/feature-grid";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      <Hero />

      <ApiPlayground />

      <FeatureGrid />

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-[9px] uppercase tracking-[0.12em] text-white/20 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <span>NG_FINTECH_UTILS / MIT_LICENSE</span>

        <span>BUILT_FOR_THE_NIGERIAN_DEVELOPER_ECOSYSTEM</span>
      </footer>
    </main>
  );
}
