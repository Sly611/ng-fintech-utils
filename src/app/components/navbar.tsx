"use client";

import { Package } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080808]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="/" className="group flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center border border-white/20 bg-white text-black transition-colors group-hover:bg-blue-500 group-hover:text-white">
            <span className="text-[10px] font-bold">NG</span>
          </div>

          <span className="text-sm font-medium tracking-tight text-white">
            NG_FINTECH_UTILS
          </span>
        </a>

        <div className="flex items-center gap-6 text-xs text-white/45">
          <a href="#sandbox" className="transition-colors hover:text-white">
            PLAYGROUND
          </a>

          <a
            href="https://pypi.org/project/ng-fintech-utils/0.1.0/"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 transition-colors hover:text-white sm:flex"
          >
            <Package className="h-3.5 w-3.5" />
            PYTHON_SDK
          </a>

          <a
            href="https://github.com/Sly611/ng-fintech-api"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-white/50 transition-colors hover:text-white"
          >
            <SiGithub className="h-4 w-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
