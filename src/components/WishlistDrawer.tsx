import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book } from '../data/books';
import { formatPrice } from '../utils/format';
import { X, Trash2, ShoppingBag, BookOpen } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistBooks: Book[];
  onRemoveWishlist: (bookId: string) => void;
  onAddToCart: (book: Book) => void;
  onOpenSampleReader: (book: Book) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistBooks,
  onRemoveWishlist,
  onAddToCart,
  onOpenSampleReader,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs"
          />

          {/* Drawer Sheet */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-md bg-[#FAF8F5] dark:bg-stone-900 h-full shadow-2xl flex flex-col justify-between border-l border-stone-200 dark:border-stone-800 z-10 transition-colors"
          >
        <div className="p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-editorial text-2xl font-semibold text-stone-900 dark:text-stone-100">
              Saved Playbooks
            </h2>
            <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">
              ({wishlistBooks.length})
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close saved playbooks"
            className="p-1.5 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlistBooks.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-editorial text-xl text-stone-800 dark:text-stone-100 mb-2">
                No saved playbooks yet
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400 max-w-xs mx-auto">
                Bookmark books in the catalog to sample chapters or purchase before your placement drives.
              </p>
            </div>
          ) : (
            wishlistBooks.map((book) => (
              <div
                key={book.id}
                className="p-4 bg-white dark:bg-stone-950 rounded-xl border border-stone-200/70 dark:border-stone-800 flex gap-4 shadow-xs"
              >
                <div className="w-16 h-22 rounded-md overflow-hidden bg-stone-100 dark:bg-stone-900 shrink-0 border border-stone-200/50 dark:border-stone-800">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-editorial text-base font-semibold text-stone-900 dark:text-stone-100 leading-snug line-clamp-1">
                        {book.title}
                      </h3>
                      <button
                        onClick={() => onRemoveWishlist(book.id)}
                        className="text-stone-400 hover:text-rose-600 dark:text-stone-500 dark:hover:text-rose-400 transition-colors cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400 mb-1">
                      {book.category}
                    </p>
                    <div className="text-xs font-bold font-mono text-stone-900 dark:text-stone-100">
                      {formatPrice(book.price, 'INR')}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-stone-100 dark:border-stone-800">
                    <button
                      onClick={() => {
                        onOpenSampleReader(book);
                        onClose();
                      }}
                      className="px-2.5 py-1 text-xs bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 rounded text-stone-800 dark:text-stone-200 flex items-center gap-1 cursor-pointer border border-transparent dark:border-stone-750"
                    >
                      <BookOpen className="w-3 h-3 text-stone-600 dark:text-stone-400" />
                      <span>Sample</span>
                    </button>
                    <button
                      onClick={() => {
                        onAddToCart(book);
                      }}
                      className="px-3 py-1 text-xs bg-stone-900 hover:bg-stone-800 dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-stone-950 rounded flex items-center gap-1 cursor-pointer shadow-xs font-medium"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 text-xs font-semibold text-stone-800 dark:text-stone-200 bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg transition-colors cursor-pointer border border-transparent dark:border-stone-800"
          >
            Continue Browsing
          </button>
        </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
