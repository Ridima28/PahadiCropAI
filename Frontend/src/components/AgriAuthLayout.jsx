import React from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import logoIcon from "../assets/logo-icon.png";

const FARM_IMAGE = "https://media.base44.com/images/public/6a3534844c438e52a1cea354/744c47b9f_generated_image.png";

export default function AgriAuthLayout({ title, subtitle, children, footer, backTo }) {
  return (
    <div className="min-h-screen flex">
      {/* Left — Farm Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-[#0D1B1E]">
        <div
          className="absolute inset-0 animate-ken-burns"
          style={{
            backgroundImage: `url(${FARM_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B1E]/30 via-transparent to-[#0D1B1E]/50" />
        <div className="absolute inset-0 bg-[#2D6A4F]/10 mix-blend-overlay" />

        {/* Leaf vein overlay pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          viewBox="0 0 800 1200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M400 0 Q410 300 400 600 Q390 900 400 1200" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M400 200 Q320 150 200 180" stroke="white" strokeWidth="0.3" fill="none" />
          <path d="M400 200 Q480 140 600 170" stroke="white" strokeWidth="0.3" fill="none" />
          <path d="M400 400 Q300 360 180 390" stroke="white" strokeWidth="0.3" fill="none" />
          <path d="M400 400 Q500 350 620 380" stroke="white" strokeWidth="0.3" fill="none" />
          <path d="M400 600 Q310 560 200 590" stroke="white" strokeWidth="0.3" fill="none" />
          <path d="M400 600 Q490 550 600 580" stroke="white" strokeWidth="0.3" fill="none" />
          <path d="M400 800 Q290 770 170 800" stroke="white" strokeWidth="0.3" fill="none" />
          <path d="M400 800 Q510 760 630 790" stroke="white" strokeWidth="0.3" fill="none" />
          <path d="M400 1000 Q320 970 220 1000" stroke="white" strokeWidth="0.3" fill="none" />
          <path d="M400 1000 Q490 960 590 990" stroke="white" strokeWidth="0.3" fill="none" />
        </svg>

        <div className="absolute bottom-0 left-0 right-0 p-12">
          <p className="text-white/60 text-sm font-medium tracking-widest uppercase">
            Cultivated Intelligence
          </p>
          <p className="text-white/40 text-xs mt-2 max-w-sm leading-relaxed">
            Your AI-powered farming companion - rooted in data, growing with you.
          </p>
        </div>
      </div>

      {/* Right — Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 lg:px-16 py-12 bg-white">
        <div className="w-full max-w-[420px]">
          {/* Brand */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2.5 mb-6">
              
<img src={logoIcon} alt="logo" className="w-20 h-29 object-contain" />
              
              <span className="text-md font-semibold tracking-[0.2em] text-[#2D6A4F] uppercase">
                PahadiCrop 
              </span>
            </div>
            <h1 className="text-[2rem] font-extrabold text-[#1B4332] leading-tight tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-[#6B7280] mt-2 text-[15px] leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {children}

          {footer && (
            <div className="mt-8 text-center text-[14px] text-[#6B7280]">
              {footer}
            </div>
          )}

          {backTo && (
            <div className="mt-6 text-center">
              <Link
                to={backTo}
                className="text-[13px] text-[#2D6A4F] font-medium hover:underline underline-offset-4 decoration-[#52B788]/50 transition-colors"
              >
                ← Back to login
              </Link>
            </div>
          )}

          {/* Mobile image hint */}
          <div className="lg:hidden mt-3 rounded-2xl overflow-hidden h-32 bg-[#0D1B1E] relative">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `url(${FARM_IMAGE})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-2 text-white/80">
                <Leaf className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase">PahadiCrop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}