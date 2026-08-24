import { ArrowRight } from "lucide-react";
import TechnicalArt from "./technical-art";

export default function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-white/[0.08]">
      <div className="absolute inset-0 tech-grid opacity-40" />
      <div className="absolute inset-0 hero-glow" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_1fr] lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <div className="mb-8 inline-flex items-center gap-3 border border-white/[0.12] bg-white/[0.02] px-3 py-2 text-[10px] uppercase tracking-[0.15em] text-white/50">
            <span className="status-pulse h-1.5 w-1.5 rounded-full bg-blue-500" />
            V0.1.0 / SANDBOX_LIVE
          </div>

          <h1 className="max-w-3xl text-2xl font-medium leading-[1.05] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            Nigerian bank data,
            <br />
            <span className="text-white/35">served instantly.</span>
          </h1>

          <p className="mt-8 max-w-xl text-xs leading-7 text-white/45 sm:text-base">
            A fast, developer-first REST API for Nigerian fintech applications.
            Access structured bank data, routing information and USSD utilities
            with zero configuration.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <a
              href="#sandbox"
              className="group flex h-10 items-center gap-3 rounded-lg bg-white px-5 text-xs font-medium text-black transition-colors hover:bg-blue-500 hover:text-white"
            >
              OPEN_PLAYGROUND
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="https://github.com/Sly611/ng-fintech-api"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 items-center gap-3 rounded-lg border border-white/[0.12] px-5 text-xs text-white/60 transition-colors hover:border-white/25 hover:text-white"
            >
              VIEW_SOURCE
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 border-t border-white/[0.08] pt-5 text-[9px] uppercase tracking-[0.15em] text-white/25">
            <span>REST API</span>
            <span>JSON</span>
            <span>EDGE READY</span>
            <span>MIT</span>
          </div>
        </div>

        <TechnicalArt />
      </div>
    </header>
  );
}
