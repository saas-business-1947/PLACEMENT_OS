import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, BookOpen, Check, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { Book, BUNDLE_DEAL } from '../data/books';
import { formatPrice } from '../utils/format';
import { TypingHooks } from './TypingHooks';

interface HeroProps {
  featuredBook: Book;
  onSelectBook: (book: Book) => void;
  onOpenSampleReader: (book: Book) => void;
  onAddToCart: (book: Book) => void;
  onAddBundleToCart: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  featuredBook,
  onSelectBook,
  onOpenSampleReader,
  onAddToCart,
  onAddBundleToCart,
}) => {
  return (
    <section id="top" className="relative pt-8 pb-16 md:pt-12 md:pb-22 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Student-focused headline & solution */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Dynamic Typing Hooks (Simultaneous All 5 + Rotating Headline Modes) */}
            <TypingHooks onAddBundleToCart={onAddBundleToCart} />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Practical, zero-fluff digital playbooks created specifically for final-year college
              students. Learn how to use AI to crack coding & HR rounds, beat aptitude tests,
              dominate GDs, negotiate higher CTCs, and keep your sanity intact.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.025, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onAddBundleToCart}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 dark:bg-amber-400 dark:text-stone-950 dark:hover:bg-amber-300 rounded-lg transition-colors shadow-md cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-300 dark:text-stone-950 fill-current" />
                <span>Get All 10 E-Books for {formatPrice(BUNDLE_DEAL.price, 'INR')}</span>
                <span className="text-xs text-stone-400 dark:text-stone-700 line-through font-mono">
                  {formatPrice(BUNDLE_DEAL.originalPrice, 'INR')}
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenSampleReader(featuredBook)}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-stone-800 dark:text-stone-200 bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors border border-stone-200/80 dark:border-stone-800 cursor-pointer shadow-xs"
              >
                <BookOpen className="w-4 h-4 text-stone-600 dark:text-stone-400" />
                <span>Read Free Excerpt</span>
              </motion.button>
            </motion.div>

            {/* Adjacent Trust Proof Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="pt-6 border-t border-stone-200/80 dark:border-stone-800/80 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs text-stone-600 dark:text-stone-400"
            >
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <span>Instant DRM-Free PDF & EPUB</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <span>UPI, GPay & PhonePe Accepted</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <span>Reads on Mobile, Laptop & Kindle</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual Frame highlighting the AI for Placements E-Book */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="relative rounded-2xl overflow-hidden border border-stone-200/80 dark:border-stone-800 shadow-xl bg-white dark:bg-stone-900 group"
            >
              <img
                src={featuredBook.coverImage}
                alt="AI for Placements Ebook Cover"
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />

              {/* Scrim overlay with quick buy info */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold bg-white/10 px-2 py-0.5 rounded backdrop-blur-xs">
                    #1 Most Requested E-Book
                  </span>
                  <span className="text-xs text-stone-300">2026 Edition</span>
                </div>

                <h2 className="font-editorial text-2xl font-medium tracking-tight mb-1 text-white">
                  {featuredBook.title}
                </h2>
                <p className="text-xs text-stone-300 mb-4 line-clamp-2">
                  {featuredBook.subtitle}
                </p>

                <div className="flex items-center justify-between gap-4 pt-3 border-t border-white/20">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold tabular-nums text-white font-mono">
                      {formatPrice(featuredBook.price, 'INR')}
                    </span>
                    <span className="text-xs text-stone-400 line-through tabular-nums font-mono">
                      {formatPrice(featuredBook.originalPrice, 'INR')}
                    </span>
                    <span className="text-[11px] text-amber-300 font-semibold">
                      Save{' '}
                      {Math.round(
                        ((featuredBook.originalPrice - featuredBook.price) /
                          featuredBook.originalPrice) *
                          100
                      )}
                      %
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onSelectBook(featuredBook)}
                      className="px-3.5 py-1.5 text-xs font-medium bg-white/15 hover:bg-white/25 backdrop-blur-xs text-white rounded-md transition-colors cursor-pointer"
                    >
                      Details
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => onAddToCart(featuredBook)}
                      className="px-3.5 py-1.5 text-xs font-semibold bg-white text-stone-900 hover:bg-stone-100 rounded-md transition-colors cursor-pointer shadow-xs"
                    >
                      Add to Bag
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
