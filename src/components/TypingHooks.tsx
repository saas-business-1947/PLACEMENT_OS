import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Copy, Check, RotateCcw, Sparkles, Layers, ArrowRight } from 'lucide-react';

export const PLACEMENT_HOOKS = [
  "Crack your dream campus offer while your batchmates are still doomscrolling LinkedIn.",
  "Graduate with an offer letter in hand, not a bond you'll regret in six months.",
  "Out-prepare 95% of your branch in just 90 focused minutes a day.",
  "Stop fearing AI taking your job—start using AI to take the offer.",
  "Conquer placement season without the AI panic, aptitude cuts, and burnout.",
];

interface TypingHooksProps {
  onAddBundleToCart?: () => void;
}

export const TypingHooks: React.FC<TypingHooksProps> = ({ onAddBundleToCart }) => {
  const [viewMode, setViewMode] = useState<'simultaneous' | 'cycling'>('simultaneous');

  // --- Simultaneous Typing State ---
  const [simultaneousProgress, setSimultaneousProgress] = useState(0);
  const [simultaneousIsDeleting, setSimultaneousIsDeleting] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const maxLength = Math.max(...PLACEMENT_HOOKS.map((h) => h.length));

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!simultaneousIsDeleting) {
      // Typing forward simultaneously
      if (simultaneousProgress < maxLength) {
        timer = setTimeout(() => {
          setSimultaneousProgress((prev) => prev + 1);
        }, 28);
      } else {
        // Pause when all 5 finished typing
        timer = setTimeout(() => {
          setSimultaneousIsDeleting(true);
        }, 4000);
      }
    } else {
      // Erasing backward simultaneously
      if (simultaneousProgress > 0) {
        timer = setTimeout(() => {
          setSimultaneousProgress((prev) => Math.max(0, prev - 2));
        }, 14);
      } else {
        // Pause briefly before typing again
        timer = setTimeout(() => {
          setSimultaneousIsDeleting(false);
        }, 500);
      }
    }

    return () => clearTimeout(timer);
  }, [simultaneousProgress, simultaneousIsDeleting, maxLength]);

  const handleRestartSimultaneous = () => {
    setSimultaneousIsDeleting(false);
    setSimultaneousProgress(0);
  };

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard?.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // --- Single Rotating Headline State ---
  const [currentHookIdx, setCurrentHookIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeletingSingle, setIsDeletingSingle] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (viewMode !== 'cycling' || isPaused) return;

    const currentFullText = PLACEMENT_HOOKS[currentHookIdx];
    let timer: NodeJS.Timeout;

    if (!isDeletingSingle) {
      if (displayedText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, 32);
      } else {
        timer = setTimeout(() => {
          setIsDeletingSingle(true);
        }, 3000);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        }, 16);
      } else {
        setIsDeletingSingle(false);
        setCurrentHookIdx((prev) => (prev + 1) % PLACEMENT_HOOKS.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeletingSingle, currentHookIdx, viewMode, isPaused]);

  return (
    <div className="w-full mb-6">
      {/* Top Controller: Mode Switcher & Live Indicator */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        {/* Unboxed subtle kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-stone-600 dark:text-stone-400 font-semibold">
          <span className="text-stone-900 dark:text-amber-950 font-bold bg-amber-200/80 dark:bg-amber-400 px-2.5 py-0.5 rounded shadow-xs">
            Final Year Survival Blueprint
          </span>
          <span aria-hidden="true">·</span>
          <span>10 Tactical E-Books</span>
        </div>

        {/* View Mode Toggle Button */}
        <div className="flex items-center p-1 bg-stone-200/70 dark:bg-stone-800/80 rounded-xl text-[11px] font-semibold border border-stone-300/50 dark:border-stone-700/60 shadow-2xs">
          <button
            onClick={() => {
              setViewMode('simultaneous');
              setSimultaneousProgress(0);
              setSimultaneousIsDeleting(false);
            }}
            className={`px-3 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'simultaneous'
                ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-amber-300 shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Simultaneous Typing (All 5)</span>
          </button>

          <button
            onClick={() => {
              setViewMode('cycling');
              setDisplayedText('');
              setIsDeletingSingle(false);
            }}
            className={`px-3 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'cycling'
                ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-amber-300 shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Sequential Headline</span>
          </button>
        </div>
      </div>

      {/* Mode 1: All 5 Hooks Typing Simultaneously */}
      {viewMode === 'simultaneous' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border border-stone-300/80 dark:border-stone-800 bg-white/95 dark:bg-stone-900/90 shadow-xl overflow-hidden backdrop-blur-sm"
        >
          {/* Terminal / Live Console Header */}
          <div className="px-4 sm:px-5 py-3 border-b border-stone-200 dark:border-stone-800 bg-stone-100/90 dark:bg-stone-950/80 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-[11px] text-stone-500 dark:text-stone-400 font-semibold ml-2">
                campus-radar: 5 hooks typing simultaneously
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px]">
              <span className="text-stone-400 dark:text-stone-500 font-mono">
                {simultaneousIsDeleting ? 'clearing...' : 'typing live...'}
              </span>
              <button
                onClick={handleRestartSimultaneous}
                title="Re-run simultaneous typing"
                className="p-1 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-amber-300 rounded hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 5 Stacked Lines Typing Simultaneously */}
          <div className="p-4 sm:p-6 space-y-3 font-editorial">
            {PLACEMENT_HOOKS.map((hook, idx) => {
              const currentSlice = hook.slice(0, simultaneousProgress);
              const isFinishedLine = simultaneousProgress >= hook.length;

              return (
                <div
                  key={idx}
                  className={`group relative p-3 rounded-xl transition-all duration-200 border ${
                    idx === 4
                      ? 'bg-amber-50/70 dark:bg-amber-950/20 border-amber-200/80 dark:border-amber-900/50'
                      : 'bg-stone-50/50 dark:bg-stone-950/40 border-stone-200/60 dark:border-stone-800/80 hover:border-stone-300 dark:hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      {/* Line Number Badge */}
                      <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/80 px-2 py-0.5 rounded shrink-0 select-none mt-0.5">
                        0{idx + 1}
                      </span>

                      {/* Hook Text with Typing Caret */}
                      <div className="text-base sm:text-lg lg:text-xl font-medium tracking-tight text-stone-900 dark:text-stone-100 leading-snug">
                        <span>{currentSlice}</span>
                        {/* Animated Blinking Cursor */}
                        <span
                          className={`inline-block w-2 sm:w-2.5 h-4 sm:h-5 ml-1 bg-amber-500 dark:bg-amber-400 align-middle ${
                            isFinishedLine ? 'animate-pulse opacity-70' : 'animate-ping opacity-100'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Copy Button on Hover */}
                    <button
                      onClick={() => handleCopy(hook, idx)}
                      title="Copy this hook"
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-md cursor-pointer shrink-0"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer note & CTA inside simultaneous terminal */}
          <div className="px-5 py-3 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/60 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500 dark:text-stone-400 font-sans">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>All 5 tactical challenges are solved inside our 10-book digital collection.</span>
            </div>

            {onAddBundleToCart && (
              <button
                onClick={onAddBundleToCart}
                className="font-semibold text-stone-900 dark:text-amber-300 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Unlock All 10 Playbooks (₹899)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </motion.div>
      )}

      {/* Mode 2: Sequential Giant Headline Typewriter */}
      {viewMode === 'cycling' && (
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-stone-900 dark:text-stone-100 leading-[1.08] min-h-[160px] sm:min-h-[190px] lg:min-h-[210px] flex items-center"
            style={{ textWrap: 'balance' }}
          >
            <span>
              {displayedText}
              <span className="inline-block w-3 sm:w-3.5 h-8 sm:h-10 ml-1.5 bg-amber-500 dark:bg-amber-400 align-middle animate-pulse" />
            </span>
          </motion.h1>

          {/* Interactive Hook Selector Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">
            <span className="text-[11px] text-stone-400 dark:text-stone-500 uppercase tracking-wider font-mono mr-1">
              Select Hook:
            </span>
            {PLACEMENT_HOOKS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentHookIdx(i);
                  setDisplayedText('');
                  setIsDeletingSingle(false);
                }}
                className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center justify-center ${
                  currentHookIdx === i
                    ? 'bg-stone-900 dark:bg-amber-400 text-white dark:text-stone-950 shadow-xs scale-105'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                0{i + 1}
              </button>
            ))}

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="ml-2 text-xs text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 underline font-mono cursor-pointer"
            >
              {isPaused ? '▶ Resume' : '⏸ Pause'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
