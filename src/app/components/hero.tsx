import { ArrowRight, ExternalLink } from "lucide-react";
import TechnicalArt from "./technical-art";

export default function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-white/[0.08]">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute inset-0 hero-glow" />

      <div className="relative mx-auto grid min-h-[620px] max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div className="relative z-10 max-w-xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="flex items-center gap-2 border border-white/[0.1] bg-white/[0.02] px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-white/45">
              <span className="status-pulse h-1.5 w-1.5 rounded-full bg-blue-500" />
              API / V0.1.0
            </span>

            <span className="text-[9px] uppercase tracking-[0.18em] text-white/20">
              SANDBOX LIVE
            </span>
          </div>

          <h1 className="text-4xl font-medium leading-[1.08] tracking-[-0.055em] text-white sm:text-5xl lg:text-[4rem]">
            The data layer for
            <br />
            <span className="text-white/35">Nigerian fintech.</span>
          </h1>

          <p className="mt-7 max-w-lg text-xs leading-7 text-white/40 sm:text-sm">
            Access Nigerian bank data through a simple, developer-first REST
            API. Bank codes, routing data, USSD utilities and more, ready when
            you need them.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#sandbox"
              className="group flex h-10 items-center gap-3 rounded-lg bg-white px-5 text-[10px] font-medium tracking-[0.08em] text-black transition-all hover:bg-blue-500 hover:text-white"
            >
              EXPLORE API
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="https://github.com/Sly611/ng-fintech-utils"
              target="_blank"
              rel="noreferrer"
              className="group flex h-10 items-center gap-2 rounded-lg border border-white/[0.1] px-5 text-[10px] tracking-[0.08em] text-white/50 transition-colors hover:border-white/20 hover:text-white"
            >
              VIEW SOURCE
              <ExternalLink className="h-3 w-3 opacity-50 transition-opacity group-hover:opacity-100" />
            </a>
          </div>

          <div className="mt-14 flex max-w-md items-center border-t border-white/[0.08] pt-5">
            <div className="flex flex-1 items-center gap-3">
              <span className="text-[9px] text-white/20">01</span>
              <span className="h-px w-6 bg-white/[0.12]" />
              <span className="text-[9px] uppercase tracking-[0.16em] text-white/25">
                REST
              </span>
            </div>

            <div className="flex flex-1 items-center gap-3">
              <span className="text-[9px] text-white/20">02</span>
              <span className="h-px w-6 bg-white/[0.12]" />
              <span className="text-[9px] uppercase tracking-[0.16em] text-white/25">
                JSON
              </span>
            </div>

            <div className="hidden flex-1 items-center gap-3 sm:flex">
              <span className="text-[9px] text-white/20">03</span>
              <span className="h-px w-6 bg-white/[0.12]" />
              <span className="text-[9px] uppercase tracking-[0.16em] text-white/25">
                EDGE
              </span>
            </div>
          </div>
        </div>

        <div>
          <TechnicalArt />
        </div>
      </div>

      <div className="absolute bottom-5 right-8 hidden text-[8px] uppercase tracking-[0.2em] text-white/15 lg:block">
        NG / 09.0820 / 08.6753
      </div>
    </header>
  );
}
