export default function TechnicalArt() {
  return (
    <div className="relative hidden h-[440px] w-full lg:block">
      {/* Outer frame */}
      <div className="absolute inset-8 border border-white/[0.07]" />

      {/* Corner markers */}
      <div className="absolute left-8 top-8 h-4 w-4 border-l border-t border-white/30" />
      <div className="absolute right-8 top-8 h-4 w-4 border-r border-t border-white/30" />
      <div className="absolute bottom-8 left-8 h-4 w-4 border-b border-l border-white/30" />
      <div className="absolute bottom-8 right-8 h-4 w-4 border-b border-r border-white/30" />

      {/* Header metadata */}
      <div className="absolute left-14 top-14">
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
          API / BANKING DATA
        </p>

        <p className="mt-2 text-[10px] text-white/40">NIGERIA</p>
      </div>

      <div className="absolute right-14 top-14 text-right">
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
          STATUS
        </p>

        <div className="mt-2 flex items-center justify-end gap-2 text-[9px] text-blue-400">
          <span className="status-pulse h-1.5 w-1.5 rounded-full bg-blue-400" />
          OPERATIONAL
        </div>
      </div>

      {/* API request flow */}
      <div className="absolute left-1/2 top-[45%] w-[70%] -translate-x-1/2 -translate-y-1/2">
        {/* Connection line */}
        <div className="absolute left-1/2 top-[72px] h-16 w-px -translate-x-1/2 bg-white/[0.12]" />

        {/* API node */}
        <div className="relative mx-auto w-44 border border-white/[0.14] bg-[#080808] px-5 py-4">
          <div className="flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-[0.15em] text-white/30">
              ENDPOINT
            </span>

            <span className="text-[9px] text-blue-400">GET</span>
          </div>

          <div className="mt-3 font-mono text-sm text-white/80">/api/banks</div>

          <div className="mt-3 flex items-center justify-between border-t border-white/[0.07] pt-3">
            <span className="text-[9px] text-white/25">RESPONSE</span>

            <span className="text-[9px] text-blue-400">200 OK</span>
          </div>
        </div>

        {/* Data nodes */}
        <div className="mt-16 grid grid-cols-2 gap-3">
          <div className="border border-white/[0.09] bg-[#080808] p-4">
            <div className="text-[9px] uppercase tracking-[0.15em] text-white/25">
              BANKS
            </div>

            <div className="mt-2 font-mono text-lg text-white/70">24+</div>

            <div className="mt-1 text-[8px] uppercase text-white/20">
              INSTITUTIONS
            </div>
          </div>

          <div className="border border-white/[0.09] bg-[#080808] p-4">
            <div className="text-[9px] uppercase tracking-[0.15em] text-white/25">
              NUBAN
            </div>

            <div className="mt-2 font-mono text-lg text-white/70">READY</div>

            <div className="mt-1 text-[8px] uppercase text-white/20">
              ROUTING_DATA
            </div>
          </div>
        </div>
      </div>

      {/* Bottom metadata */}
      <div className="absolute bottom-14 left-14 flex gap-6 text-[8px] uppercase tracking-[0.18em] text-white/20">
        <span>REST</span>
        <span>JSON</span>
        <span>HTTPS</span>
      </div>

      <div className="absolute bottom-14 right-14 text-right">
        <div className="font-mono text-[10px] text-white/30">42ms</div>

        <div className="mt-1 text-[8px] uppercase tracking-[0.15em] text-white/15">
          AVG_LATENCY
        </div>
      </div>
    </div>
  );
}
