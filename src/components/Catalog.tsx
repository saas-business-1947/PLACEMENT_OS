import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, BUNDLE_DEAL } from '../data/books';
import { formatPrice } from '../utils/format';
import { BookOpen, Bookmark, ShoppingBag, Search, Zap, Check, HelpCircle } from 'lucide-react';

interface CatalogProps {
  books: Book[];
  onSelectBook: (book: Book) => void;
  onOpenSampleReader: (book: Book) => void;
  onAddToCart: (book: Book) => void;
  onAddBundleToCart: () => void;
  wishlistIds: string[];
  onToggleWishlist: (bookId: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

type CategoryFilter =
  | 'All'
  | 'AI & Tech Prep'
  | 'Aptitude & Rounds'
  | 'Communication & GD'
  | 'Career & Business'
  | 'Mental Mastery & Time';

type SortOption = 'curated' | 'price-asc' | 'price-desc' | 'pages-desc';

export const Catalog: React.FC<CatalogProps> = ({
  books,
  onSelectBook,
  onOpenSampleReader,
  onAddToCart,
  onAddBundleToCart,
  wishlistIds,
  onToggleWishlist,
  searchQuery,
  setSearchQuery,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [sortBy, setSortBy] = useState<SortOption>('curated');

  const categories: CategoryFilter[] = [
    'All',
    'AI & Tech Prep',
    'Aptitude & Rounds',
    'Communication & GD',
    'Career & Business',
    'Mental Mastery & Time',
  ];

  const filteredBooks = useMemo(() => {
    return books
      .filter((book) => {
        const matchesCategory =
          activeCategory === 'All' || book.category === activeCategory;
        const matchesSearch =
          searchQuery.trim() === '' ||
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.problemSolved.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'pages-desc') return b.pages - a.pages;
        return 0; // curated order
      });
  }, [books, activeCategory, searchQuery, sortBy]);

  return (
    <section id="catalog" className="py-16 md:py-24 border-t border-stone-200/80 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Placement Bundle Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 p-6 sm:p-8 rounded-2xl bg-stone-900 text-white shadow-xl border border-stone-800 relative overflow-hidden"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-amber-400 text-stone-950 font-bold text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded">
                  All-In-One Campus Bundle
                </span>
                <span className="text-xs text-stone-300 font-mono">
                  10 E-Books · ₹899 Total
                </span>
              </div>

              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight mb-2 text-white">
                {BUNDLE_DEAL.title}
              </h2>

              <p className="text-xs sm:text-sm text-stone-300 mb-6 max-w-2xl leading-relaxed">
                {BUNDLE_DEAL.description} Includes all 10 digital editions, 50+ AI interview prompts,
                speed math cheat sheets, GD transition phrase guides, and fresher salary negotiation templates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-300 mb-6">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>All 10 Full E-Books</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Lifetime Download Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Works on Mobile, Laptop & Kindle</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center bg-stone-800/80 p-6 rounded-xl border border-stone-700">
              <div className="text-[11px] text-stone-400 uppercase tracking-wider mb-1">
                Special Student Price
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl sm:text-4xl font-bold font-mono text-white">
                  {formatPrice(BUNDLE_DEAL.price, 'INR')}
                </span>
                <span className="text-sm text-stone-400 line-through font-mono">
                  {formatPrice(BUNDLE_DEAL.originalPrice, 'INR')}
                </span>
              </div>
              <div className="text-xs text-emerald-400 font-medium mb-4">
                Save ₹1,591 (64% Off Bundle Price)
              </div>

              <motion.button
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.98 }}
                onClick={onAddBundleToCart}
                className="w-full py-3 px-5 text-xs font-bold text-stone-900 bg-amber-300 hover:bg-amber-200 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Zap className="w-4 h-4 fill-stone-900" />
                <span>Get All 10 Books for ₹899</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-wider text-stone-500 dark:text-amber-400 font-semibold mb-2">
              Individual Playbooks · Instant PDF & EPUB
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100">
              Pick the Specific Skill You Need to Crack
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 max-w-md">
            Target your specific weak spot: whether it's clearing Round 1 aptitude, mastering AI interview tools, leading group discussions, or beating anxiety.
          </p>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200/80 dark:border-stone-800">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-900 rounded-xl border border-stone-200/60 dark:border-stone-800">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-white dark:bg-amber-400 text-stone-900 dark:text-stone-950 shadow-xs font-semibold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative min-w-[220px] sm:min-w-[260px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 dark:text-stone-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search aptitude, AI, GD, focus..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-800 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-800 dark:focus:ring-amber-400 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 cursor-pointer"
                >
                  ×
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-400">
              <span className="hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort books"
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 py-1.5 px-3 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-stone-800 dark:focus:ring-amber-400 cursor-pointer"
              >
                <option value="curated">Recommended Order</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="pages-desc">Page Count</option>
              </select>
            </div>
          </div>
        </div>

        {/* Catalog Empty State */}
        {filteredBooks.length === 0 ? (
          <div className="py-20 text-center bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800">
            <p className="font-editorial text-2xl text-stone-800 dark:text-stone-100 mb-2">No playbooks found</p>
            <p className="text-xs text-stone-500 dark:text-stone-400 max-w-sm mx-auto mb-6">
              We couldn't find any books matching "{searchQuery}" in {activeCategory}.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-medium text-stone-800 dark:text-stone-200 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Book Grid: 3-column desktop layout */
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredBooks.map((book, idx) => {
                const isWishlisted = wishlistIds.includes(book.id);

                return (
                  <motion.article
                    layout
                    key={book.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.35,
                      delay: Math.min(idx * 0.05, 0.3),
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 hover:dark:border-stone-700 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300"
                  >
                    <div>
                      {/* Book Cover Frame (3:4 ratio) */}
                      <div
                        className="relative aspect-[3/4] bg-stone-100 dark:bg-stone-950 overflow-hidden cursor-pointer"
                        onClick={() => onSelectBook(book)}
                      >
                        <img
                          src={book.coverImage}
                          alt={`Book cover for ${book.title}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />

                        {/* Bookmark button */}
                        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleWishlist(book.id);
                            }}
                            aria-label={isWishlisted ? 'Remove from saved' : 'Save for later'}
                            className="p-2 rounded-full bg-white/90 dark:bg-stone-900/90 backdrop-blur-xs text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-white dark:hover:bg-stone-800 shadow-xs transition-colors cursor-pointer border border-transparent dark:border-stone-700/50"
                          >
                            <Bookmark
                              className={`w-3.5 h-3.5 ${
                                isWishlisted
                                  ? 'fill-stone-900 text-stone-900 dark:fill-amber-400 dark:text-amber-400'
                                  : ''
                              }`}
                            />
                          </motion.button>
                        </div>

                        {/* Quick action strip visible on hover */}
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between gap-2">
                          <motion.button
                            whileTap={{ scale: 0.96 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenSampleReader(book);
                            }}
                            className="flex-1 py-2 px-3 text-xs font-medium bg-white/95 dark:bg-stone-900/95 hover:bg-white dark:hover:bg-stone-900 text-stone-900 dark:text-stone-100 rounded-md transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>Sample Chapter</span>
                          </motion.button>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              onAddToCart(book);
                            }}
                            className="py-2 px-3 text-xs font-medium bg-stone-900 hover:bg-stone-800 dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-stone-950 rounded-md transition-colors flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                            title="Add to Bag"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Metadata & Description */}
                      <div className="p-5 sm:p-6">
                        <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 font-medium mb-2">
                          <span className="text-stone-800 dark:text-stone-200 font-semibold">{book.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{book.pages} pages</span>
                          <span aria-hidden="true">·</span>
                          <span>{book.readTime}</span>
                        </div>

                        <h3
                          onClick={() => onSelectBook(book)}
                          className="font-editorial text-xl sm:text-2xl font-medium text-stone-900 dark:text-stone-100 hover:text-stone-700 dark:hover:text-amber-300 transition-colors cursor-pointer leading-snug mb-1"
                        >
                          {book.title}
                        </h3>

                        <p className="text-xs text-stone-500 dark:text-stone-400 mb-2 font-normal">
                          By {book.author}
                        </p>

                        {/* Empathy Problem Solved Strip */}
                        <div className="p-2.5 rounded-lg bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/60 text-[11px] text-amber-900 dark:text-amber-200 mb-3 leading-relaxed">
                          <span className="font-semibold text-amber-950 dark:text-amber-300">Solves: </span>
                          {book.problemSolved}
                        </div>

                        <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-2 leading-relaxed">
                          {book.description}
                        </p>
                      </div>
                    </div>

                    {/* Price & Action Baseline */}
                    <div className="p-5 sm:p-6 pt-0 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between gap-3 mt-4">
                      <div>
                        <div className="text-[10px] text-stone-400 dark:text-stone-500 uppercase tracking-wider font-semibold">
                          Instant E-Book
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-bold tabular-nums font-mono text-stone-900 dark:text-stone-100">
                            {formatPrice(book.price, 'INR')}
                          </span>
                          <span className="text-xs text-stone-400 dark:text-stone-500 line-through tabular-nums font-mono">
                            {formatPrice(book.originalPrice, 'INR')}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => onSelectBook(book)}
                          className="px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
                        >
                          TOC & Specs
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => onAddToCart(book)}
                          className="px-3.5 py-1.5 text-xs font-semibold text-white dark:text-stone-950 bg-stone-900 hover:bg-stone-800 dark:bg-amber-400 dark:hover:bg-amber-300 rounded-lg transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Add</span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};
