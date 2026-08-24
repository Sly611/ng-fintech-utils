"use client";

import { Check, Copy, Loader2, Play, Terminal } from "lucide-react";
import { useState } from "react";

const BASE_URL = "https://ng-fintech-utils.vercel.app";
const endpoints = [
  {
    value: "/api/banks",
    label: "api/banks",
    description: "ALL BANKS",
  },
  {
    value: "/api/banks/access-bank",
    label: "api/banks/access-bank",
    description: "BY SLUG",
  },
  {
    value: "/api/banks/058",
    label: "api/banks/058",
    description: "BY CODE",
  },
];

export default function ApiPlayground() {
  const [endpoint, setEndpoint] = useState("/api/banks");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [latency, setLatency] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const handleRunRequest = async () => {
    setLoading(true);
    setResponse(null);
    setStatus(null);
    setLatency(null);

    const startTime = performance.now();

    try {
      const res = await fetch(`${BASE_URL}${endpoint}`);
      const endTime = performance.now();
      const data = await res.json();

      setStatus(res.status);
      setLatency(Math.round(endTime - startTime));
      setResponse(JSON.stringify(data, null, 2));
    } catch {
      const endTime = performance.now();

      setStatus(500);
      setLatency(Math.round(endTime - startTime));
      setResponse(
        JSON.stringify(
          {
            success: false,
            error: "Failed to execute request",
          },
          null,
          2,
        ),
      );
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (!response) return;

    await navigator.clipboard.writeText(response);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const selectedEndpoint = endpoints.find((item) => item.value === endpoint);

  return (
    <section id="sandbox" className="scroll-mt-24 border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        {/* Section heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 text-[9px] uppercase tracking-[0.2em] text-white/25">
              02 / PLAYGROUND
            </div>

            <h2 className="text-2xl font-medium tracking-tight text-white">
              Test the API.
            </h2>
          </div>

          <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/25">
            LIVE_REQUEST_CONSOLE
          </div>
        </div>

        {/* Console */}
        <div className="border border-white/[0.11] bg-[#0b0b0b]">
          {/* Request bar */}
          <div className="border-b border-white/[0.08] p-3 sm:p-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex h-10 flex-1 items-center border border-white/[0.08] bg-black">
                <div className="flex h-full items-center border-r border-white/[0.08] px-4 text-[10px] font-medium text-blue-400">
                  GET
                </div>

                <div className="flex min-w-0 flex-1 items-center">
                  <span className="px-3 text-xs text-white/25">/</span>

                  <select
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                    className="h-full w-full appearance-none bg-transparent pr-3 font-mono text-xs text-white/75 outline-none"
                  >
                    {endpoints.map((item) => (
                      <option
                        key={item.value}
                        value={item.value}
                        className="bg-[#0b0b0b]"
                      >
                        {item.label} — {item.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={handleRunRequest}
                disabled={loading}
                className="flex h-10 items-center justify-center gap-2 rounded-lg bg-white px-5 text-xs font-medium text-black transition-colors hover:bg-blue-500 hover:text-white disabled:opacity-40 sm:w-auto"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    RUNNING
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5 fill-current" />
                    RUN_REQUEST
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Response */}
          <div className="p-4 sm:p-6">
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-white/35">
                  <Terminal className="h-3.5 w-3.5" />
                  RESPONSE
                </div>

                {status !== null && (
                  <span
                    className={`font-mono text-[10px] ${
                      status === 200 ? "text-blue-400" : "text-red-400"
                    }`}
                  >
                    {status} {status === 200 ? "OK" : "ERROR"}
                  </span>
                )}

                {latency !== null && (
                  <span className="font-mono text-[10px] text-white/25">
                    {latency}ms
                  </span>
                )}
              </div>

              {response && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 self-start text-[10px] uppercase tracking-[0.1em] text-white/30 transition-colors hover:text-white sm:self-auto"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-blue-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}

                  {copied ? "COPIED" : "COPY_JSON"}
                </button>
              )}
            </div>

            <div className="relative border border-white/[0.06] bg-black">
              <div className="absolute right-4 top-4 text-[9px] uppercase tracking-[0.15em] text-white/15">
                JSON
              </div>

              <pre className="no-scrollbar min-h-[260px] max-h-[420px] overflow-x-auto p-5 pt-12 text-xs leading-6 text-white/55">
                <code>
                  {response || (
                    <>
                      <span className="text-white/20">
                        // Click RUN_REQUEST to execute
                        {"\n"}
                        // a live API request.
                      </span>
                      <span className="cursor-blink ml-1 text-blue-400">_</span>
                    </>
                  )}
                </code>
              </pre>
            </div>
          </div>

          {/* Console footer */}
          <div className="flex flex-col gap-2 border-t border-white/[0.08] px-4 py-3 text-[9px] uppercase tracking-[0.12em] text-white/20 sm:flex-row sm:items-center sm:justify-between">
            <span>ENDPOINT / {selectedEndpoint?.description}</span>

            <span>HTTPS / JSON / REST</span>
          </div>
        </div>
      </div>
    </section>
  );
}
