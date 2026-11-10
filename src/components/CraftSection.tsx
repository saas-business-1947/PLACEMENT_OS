import React from 'react';
import { Type, ShieldCheck, HeartHandshake, Eye, BookOpen, Layers } from 'lucide-react';

export const CraftSection: React.FC = () => {
  return (
    <section id="craft" className="py-20 md:py-28 border-t border-stone-200/80 bg-stone-100/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-wider text-stone-500 font-medium mb-3">
            Standards & Publishing Ethos
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-medium tracking-tight text-stone-900 mb-6 leading-tight">
            How we engineer digital books for enduring attention.
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Most digital books are hasty conversions of print files—plagued by broken
            hyphenation, floating captions, and rigid lock-ins. Folio & Lumen treats the digital screen as its own typographical canvas.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="p-8 bg-white rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-800 mb-6">
                <Type className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-stone-400 mb-2">01. Typographic Calibration</div>
              <h3 className="font-editorial text-2xl font-medium text-stone-900 mb-3">
                Optical Kerning & E-Ink Testing
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Every chapter is hand-calibrated for optical line lengths (65–72 characters per line). Footnotes open contextually, math symbols render cleanly as vector glyphs, and high-contrast serifs are compensated for e-ink refresh cycles.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100 text-[11px] text-stone-400">
              Validated on Kindle Scribe, Kobo Sage, and iPad Pro.
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 bg-white rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-800 mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-stone-400 mb-2">02. Genuine DRM-Freedom</div>
              <h3 className="font-editorial text-2xl font-medium text-stone-900 mb-3">
                You Own What You Buy
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We believe readers should retain custody of their intellectual library. All files are completely DRM-free. You can archive them on private backup drives, convert between formats, or print personal hard copies without permission gates.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100 text-[11px] text-stone-400">
              Universal compatibility across all reading software.
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 bg-white rounded-2xl border border-stone-200/80 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-800 mb-6">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-stone-400 mb-2">03. Author-Centric Economics</div>
              <h3 className="font-editorial text-2xl font-medium text-stone-900 mb-3">
                80% Direct Royalty Rate
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Traditional publishing houses pay authors only 8–15% of net receipts. By eliminating unnecessary distribution middlemen and platform rent-seeking, we pay 80% directly to the scholars, architects, and essayists behind each monograph.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100 text-[11px] text-stone-400">
              Supporting sustainable long-form scholarship.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
