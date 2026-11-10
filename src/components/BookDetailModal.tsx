import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book } from '../data/books';
import { formatPrice } from '../utils/format';
import {
  X,
  BookOpen,
  ShoppingBag,
  Check,
  Share2,
  Bookmark,
  Sparkles,
} from 'lucide-react';

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
  onAddToCart: (book: Book, format: string) => void;
  onOpenSampleReader: (book: Book) => void;
  isWishlisted: boolean;
  onToggleWishlist: (bookId: string) => void;
}

export const BookDetailModal: React.FC<BookDetailModalProps> = ({
  book,
  onClose,
  onAddToCart,
  onOpenSampleReader,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [selectedFormat, setSelectedFormat] = useState('All Formats Included (PDF + EPUB + Notion Sheet)');
  const [activeTab, setActiveTab] = useState<'synopsis' | 'toc' | 'reviews'>('synopsis');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <AnimatePresence>
      {book && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 14 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#FAF8F5] dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden my-8 z-10 transition-colors"
          >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-20 p-2 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 bg-white/80 dark:bg-stone-800/80 hover:bg-white dark:hover:bg-stone-800 rounded-full transition-colors cursor-pointer shadow-xs border border-transparent dark:border-stone-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Visual Cover & Key Specifications */}
          <div className="md:col-span-5 bg-stone-100 dark:bg-stone-950 p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-200 dark:border-stone-800">
            <div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-stone-200 dark:border-stone-800 mb-6 bg-white dark:bg-stone-900">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Quick specs strip */}
              <div className="space-y-2 text-xs text-stone-600 dark:text-stone-300 bg-white/80 dark:bg-stone-900 p-4 rounded-xl border border-stone-200/60 dark:border-stone-800">
                <div className="flex justify-between py-1 border-b border-stone-100 dark:border-stone-800">
                  <span className="text-stone-400 dark:text-stone-500">Target Audience</span>
                  <span className="font-semibold text-stone-800 dark:text-stone-200">Final Year & Freshers</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100 dark:border-stone-800">
                  <span className="text-stone-400 dark:text-stone-500">Reading Time</span>
                  <span className="font-medium text-stone-800 dark:text-stone-200">{book.readTime} ({book.pages} pages)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100 dark:border-stone-800">
                  <span className="text-stone-400 dark:text-stone-500">Edition Year</span>
                  <span className="font-medium text-stone-800 dark:text-stone-200">{book.publicationYear} Campus Edition</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-400 dark:text-stone-500">DRM & Devices</span>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400">100% DRM-Free (Mobile & PC)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3 text-xs text-stone-500 dark:text-stone-400">
              <button
                onClick={() => onToggleWishlist(book.id)}
                className="flex items-center gap-1.5 py-2 px-3 rounded-lg hover:bg-white dark:hover:bg-stone-900 transition-colors cursor-pointer"
              >
                <Bookmark
                  className={`w-4 h-4 ${
                    isWishlisted ? 'fill-stone-900 text-stone-900 dark:fill-amber-400 dark:text-amber-400' : ''
                  }`}
                />
                <span>{isWishlisted ? 'Saved' : 'Save for Later'}</span>
              </button>

              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 py-2 px-3 rounded-lg hover:bg-white dark:hover:bg-stone-900 transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>{copiedLink ? 'Link Copied!' : 'Share with Batchmate'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module & Editorial Content */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-[#FAF8F5] dark:bg-stone-900">
            <div>
              <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 font-medium mb-2">
                <span className="text-stone-900 dark:text-stone-200 font-semibold">{book.category}</span>
                <span aria-hidden="true">·</span>
                <span>PlacementOS Official Guide</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-stone-900 dark:text-stone-100 tracking-tight mb-1">
                {book.title}
              </h2>

              <p className="text-sm text-stone-600 dark:text-stone-300 mb-2 font-normal">
                {book.subtitle}
              </p>

              <p className="text-xs text-stone-500 dark:text-stone-400 mb-4 italic">
                By {book.author} — {book.authorBio}
              </p>

              {/* Problem Solved Callout */}
              <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200/70 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200 mb-6">
                <div className="font-bold text-amber-950 dark:text-amber-300 mb-0.5">Primary Student Challenge Addressed:</div>
                <div>{book.problemSolved}</div>
              </div>

              {/* Purchase Card Unit */}
              <div className="p-5 bg-white dark:bg-stone-950 rounded-xl border border-stone-200/80 dark:border-stone-800 shadow-xs mb-6">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <div className="text-[11px] text-stone-400 dark:text-stone-500 uppercase tracking-wider font-semibold">
                      Student Discounted Price
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold font-mono text-stone-900 dark:text-stone-100">
                        {formatPrice(book.price, 'INR')}
                      </span>
                      <span className="text-sm text-stone-400 dark:text-stone-500 line-through font-mono">
                        {formatPrice(book.originalPrice, 'INR')}
                      </span>
                      <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                        Save {Math.round((1 - book.price / book.originalPrice) * 100)}%
                      </span>
                    </div>
                  </div>

                  <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/50 px-2 py-1 rounded border border-transparent dark:border-emerald-800/50">
                    Instant PDF Access
                  </span>
                </div>

                {/* Formats included */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-stone-700 dark:text-stone-300 mb-2">
                    Included in Your Download Bundle:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {book.formats.map((fmt) => (
                      <div
                        key={fmt}
                        className="flex items-center gap-2 p-2 bg-stone-50 dark:bg-stone-900 rounded-lg text-stone-700 dark:text-stone-300 border border-stone-200/50 dark:border-stone-800"
                      >
                        <Check className="w-3.5 h-3.5 text-stone-700 dark:text-amber-400" />
                        <span className="truncate">{fmt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => onAddToCart(book, selectedFormat)}
                    className="flex-1 py-3 px-4 text-xs font-semibold text-white dark:text-stone-950 bg-stone-900 hover:bg-stone-800 dark:bg-amber-400 dark:hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag ({formatPrice(book.price, 'INR')})</span>
                  </button>

                  <button
                    onClick={() => {
                      onOpenSampleReader(book);
                      onClose();
                    }}
                    className="py-3 px-4 text-xs font-medium text-stone-800 dark:text-stone-200 bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg transition-colors flex items-center justify-center gap-2 border border-stone-200/60 dark:border-stone-700 cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-stone-600 dark:text-stone-400" />
                    <span>Sample Chapter</span>
                  </button>
                </div>
              </div>

              {/* Editorial Tabs */}
              <div className="border-b border-stone-200 dark:border-stone-800 mb-4 flex gap-6 text-xs font-medium">
                <button
                  onClick={() => setActiveTab('synopsis')}
                  className={`pb-2.5 transition-colors cursor-pointer ${
                    activeTab === 'synopsis'
                      ? 'border-b-2 border-stone-900 dark:border-amber-400 text-stone-900 dark:text-amber-300 font-bold'
                      : 'text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200'
                  }`}
                >
                  Overview & Frameworks
                </button>
                <button
                  onClick={() => setActiveTab('toc')}
                  className={`pb-2.5 transition-colors cursor-pointer ${
                    activeTab === 'toc'
                      ? 'border-b-2 border-stone-900 dark:border-amber-400 text-stone-900 dark:text-amber-300 font-bold'
                      : 'text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200'
                  }`}
                >
                  Table of Contents ({book.toc.length})
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-2.5 transition-colors cursor-pointer ${
                    activeTab === 'reviews'
                      ? 'border-b-2 border-stone-900 dark:border-amber-400 text-stone-900 dark:text-amber-300 font-bold'
                      : 'text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200'
                  }`}
                >
                  Student Reviews
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'synopsis' && (
                <div className="space-y-4 text-xs leading-relaxed text-stone-700 dark:text-stone-300">
                  <p>{book.synopsis}</p>
                  <div className="pt-2">
                    <div className="font-semibold text-stone-900 dark:text-stone-100 mb-2">What you will gain:</div>
                    <ul className="space-y-1.5 list-disc pl-4 text-stone-600 dark:text-stone-400">
                      {book.features.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'toc' && (
                <div className="space-y-2 text-xs">
                  {book.toc.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-baseline justify-between p-2.5 rounded-lg bg-white dark:bg-stone-950 border border-stone-200/50 dark:border-stone-800"
                    >
                      <div>
                        <span className="text-stone-400 dark:text-stone-500 mr-2 font-mono">{item.chapter}</span>
                        <span className="font-medium text-stone-800 dark:text-stone-200">{item.title}</span>
                      </div>
                      <span className="font-mono text-stone-400 dark:text-stone-500 tabular-nums">p. {item.page}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-4 text-xs">
                  {book.reviews.map((rev, idx) => (
                    <blockquote
                      key={idx}
                      className="p-4 bg-white dark:bg-stone-950 rounded-xl border border-stone-200/60 dark:border-stone-800"
                    >
                      <p className="font-editorial text-sm italic text-stone-800 dark:text-stone-200 mb-2">
                        "{rev.quote}"
                      </p>
                      <footer className="text-stone-500 dark:text-stone-400">
                        <span className="font-semibold text-stone-800 dark:text-stone-200">{rev.reviewer}</span>,{' '}
                        <span>{rev.role}</span> · <span className="font-medium">{rev.publication}</span>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-stone-200 dark:border-stone-800 text-center text-[11px] text-stone-400 dark:text-stone-500">
              PlacementOS Editions · Instant DRM-Free Download Access · Zero Lock-In
            </div>
          </div>
        </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
