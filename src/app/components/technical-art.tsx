export default function TechnicalArt() {
  return (
    <div className="relative hidden lg:flex lg:items-center lg:justify-center">
      <div className="relative w-full max-w-md border border-white/[0.1] bg-[#080808]">
        <span className="pointer-events-none absolute -left-px -top-px h-3 w-3 border-l border-t border-white/40" />
        <span className="pointer-events-none absolute -right-px -top-px h-3 w-3 border-r border-t border-white/40" />
        <span className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b border-l border-white/40" />
        <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b border-r border-white/40" />

        <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
          <div>
            <div className="mb-1 text-[8px] uppercase tracking-[0.2em] text-white/25">
              API RESPONSE
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded bg-blue-500/10 px-1.5 py-0.5 text-[9px] font-medium text-blue-400">
                GET
              </span>

              <span className="font-mono text-xs text-white/70">
                /api/banks
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="status-pulse h-1.5 w-1.5 rounded-full bg-blue-400" />

            <span className="font-mono text-[9px] text-white/45">200 OK</span>
          </div>
        </div>

        <div className="p-5">
          <div className="mb-5 grid grid-cols-2 gap-2">
            <div className="border border-white/[0.07] bg-white/[0.015] p-3">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-[0.15em] text-white/25">
                  STATUS
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-blue-400/70" />
              </div>

              <div className="font-mono text-sm text-white/80">SUCCESS</div>
            </div>

            <div className="border border-white/[0.07] bg-white/[0.015] p-3">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-[0.15em] text-white/25">
                  RECORDS
                </span>

                <span className="font-mono text-[8px] text-white/20">
                  COUNT
                </span>
              </div>

              <div className="font-mono text-sm text-white/80">24</div>
            </div>
          </div>

          <div className="mb-2 flex items-center justify-between">
            <span className="text-[8px] uppercase tracking-[0.2em] text-white/25">
              BANK_RECORD
            </span>

            <span className="font-mono text-[8px] text-white/15">01 / 24</span>
          </div>

          <div className="border border-white/[0.08] bg-white/[0.015]">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
              <div>
                <div className="mb-1 text-[8px] uppercase tracking-[0.15em] text-white/25">
                  INSTITUTION
                </div>

                <div className="text-xs text-white/80">Access Bank</div>
              </div>

              <div className="flex h-7 w-7 items-center justify-center border border-white/[0.08] text-[8px] text-white/25">
                AB
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="border-r border-white/[0.07] p-4">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-blue-400/60" />

                  <span className="text-[8px] uppercase tracking-[0.15em] text-white/25">
                    BANK_CODE
                  </span>
                </div>

                <div className="font-mono text-sm tracking-wider text-white/70">
                  044
                </div>
              </div>

              <div className="p-4">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-white/30" />

                  <span className="text-[8px] uppercase tracking-[0.15em] text-white/25">
                    USSD
                  </span>
                </div>

                <div className="font-mono text-sm text-white/70">*901#</div>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-px w-4 bg-white/15" />

              <span className="text-[8px] uppercase tracking-[0.15em] text-white/20">
                23 MORE RECORDS
              </span>
            </div>

            <span className="text-[8px] text-white/15">→</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.08] px-5 py-3">
          <div className="flex gap-4 text-[8px] uppercase tracking-[0.15em] text-white/20">
            <span>REST</span>
            <span>JSON</span>
            <span>HTTPS</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[8px] uppercase tracking-[0.15em] text-white/20">
              LATENCY
            </span>

            <span className="font-mono text-[9px] text-white/50">42ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
