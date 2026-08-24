import { Code2, Shield, Zap } from "lucide-react";

const features = [
  {
    number: "01",
    icon: Zap,
    title: "EDGE_FAST",
    description:
      "Runs on serverless edge infrastructure for low-latency responses wherever your application is deployed.",
  },
  {
    number: "02",
    icon: Shield,
    title: "RATE_LIMITED",
    description:
      "Protected with a sliding-window rate limiter to keep the API reliable and resistant to abuse.",
  },
  {
    number: "03",
    icon: Code2,
    title: "PYTHON_SDK",
    description:
      "Use the companion Python package to integrate Nigerian banking utilities directly into your workflow.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-12">
          <div className="mb-3 text-[9px] uppercase tracking-[0.2em] text-white/25">
            03 / SYSTEM
          </div>

          <h2 className="text-2xl font-medium tracking-tight text-white">
            Built for developers.
          </h2>
        </div>

        <div className="grid border-l border-white/[0.08] md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.number}
                className="group border-r border-t border-white/[0.08] p-6 transition-colors hover:bg-white/[0.02] sm:p-8"
              >
                <div className="mb-16 flex items-start justify-between">
                  <span className="font-mono text-[10px] text-white/20">
                    {feature.number}
                  </span>

                  <Icon className="h-4 w-4 text-white/30 transition-colors group-hover:text-blue-400" />
                </div>

                <h3 className="mb-4 text-sm font-medium tracking-tight text-white">
                  {feature.title}
                </h3>

                <p className="max-w-sm text-xs leading-6 text-white/35">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
