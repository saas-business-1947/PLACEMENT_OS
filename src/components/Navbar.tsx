import React from 'react';
import { ShoppingBag, Bookmark, Search, GraduationCap, Sparkles, Sun, Moon } from 'lucide-react';
import { Currency } from '../types';
import { formatPrice } from '../utils/format';

interface NavbarProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  wishlistCount: number;
  onOpenWishlist: () => void;
  onOpenSampleReader: () => void;
  onOpenSearch: () => void;
  onAddBundleToCart: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  cartTotal,
  onOpenCart,
  wishlistCount,
  onOpenWishlist,
  onOpenSampleReader,
  onOpenSearch,
  onAddBundleToCart,
  isDark,
  onToggleTheme,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 dark:bg-[#121214]/95 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800 transition-colors">
      {/* Slim Top Notice Banner */}
      <div className="bg-stone-900 dark:bg-stone-950 text-stone-200 py-1.5 px-4 text-center text-[11px] sm:text-xs font-medium flex items-center justify-center gap-2 border-b border-stone-800/50">
        <span className="text-amber-300 font-semibold">Campus Placement Special:</span>
        <span>Get all 10 E-Books for ₹899 (Save 64%) with instant PDF downloads</span>
        <button
          onClick={onAddBundleToCart}
          className="ml-2 underline text-amber-200 hover:text-white cursor-pointer font-semibold"
        >
          Grab Bundle →
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#top"
          className="flex items-center gap-2 font-editorial text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 hover:text-stone-700 dark:hover:text-stone-300 transition-colors whitespace-nowrap shrink-0"
        >
          <span className="w-8 h-8 rounded-lg bg-stone-900 dark:bg-amber-400 text-amber-100 dark:text-stone-950 flex items-center justify-center text-sm font-sans font-bold transition-colors">
            P
          </span>
          <span>PlacementOS</span>
        </a>

        {/* Zone 2: 4-5 concise single-line text links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600 dark:text-stone-400">
          <a
            href="#catalog"
            className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0"
          >
            All 10 E-Books
          </a>
          <button
            onClick={onAddBundleToCart}
            className="text-stone-900 dark:text-amber-300 font-semibold hover:text-stone-700 dark:hover:text-amber-200 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1"
          >
            <span>All-Access Bundle</span>
            <span className="text-[10px] bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 px-1.5 py-0.5 rounded font-mono">₹899</span>
          </button>
          <button
            onClick={onOpenSampleReader}
            className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Sample Chapter
          </button>
          <a
            href="#solutions"
            className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0"
          >
            Why PlacementOS?
          </a>
          <a
            href="#faq"
            className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0"
          >
            Student FAQ
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action Unit */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Quick search affordance */}
          <button
            onClick={onOpenSearch}
            aria-label="Search topics"
            className="p-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to High-Contrast Night Study Mode'}
            title={isDark ? 'Switch to Light Mode' : 'Night Study Mode (High-Contrast)'}
            className="p-2 text-stone-600 dark:text-amber-400 hover:text-stone-900 dark:hover:text-amber-300 hover:bg-stone-100 dark:hover:bg-stone-800/90 rounded-lg transition-all cursor-pointer border border-transparent dark:border-stone-800"
          >
            {isDark ? (
              <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Currency indicator */}
          <div className="hidden sm:flex items-center px-2 py-1 bg-stone-100 dark:bg-stone-800 rounded-lg text-xs font-semibold text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-stone-700/60">
            <span>INR (₹)</span>
          </div>

          {/* Wishlist toggle */}
          {wishlistCount > 0 && (
            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
              title="Saved Ebooks"
            >
              <Bookmark className="w-4 h-4 fill-stone-900 dark:fill-amber-400 text-stone-900 dark:text-amber-400" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-stone-800 dark:bg-amber-400 text-[10px] font-semibold text-white dark:text-stone-950 flex items-center justify-center tabular-nums">
                {wishlistCount}
              </span>
            </button>
          )}

          {/* Primary Cart CTA */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs font-medium text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-white rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Bag</span>
            <span className="bg-stone-800 dark:bg-stone-200 text-amber-200 dark:text-stone-900 px-1.5 py-0.2 rounded text-[11px] tabular-nums font-mono font-bold">
              {cartCount}
            </span>
            {cartTotal > 0 && (
              <span className="hidden sm:inline font-mono border-l border-stone-700 dark:border-stone-300 pl-2">
                {formatPrice(cartTotal, 'INR')}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
