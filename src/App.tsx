/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BOOKS, Book, BUNDLE_DEAL } from './data/books';
import { CartItem, OrderConfirmation } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { BookDetailModal } from './components/BookDetailModal';
import { ReaderModal } from './components/ReaderModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { StudentGuidanceSection } from './components/StudentGuidanceSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FlyToBag, FlyingBook } from './components/FlyToBag';
import { getMultiBookOffer } from './utils/pricing';
import { Check, ShoppingBag, Zap } from 'lucide-react';

export default function App() {
  // Persistence in localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('placement_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('placement_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [readerBook, setReaderBook] = useState<Book | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutDiscount, setCheckoutDiscount] = useState(0);
  const [checkoutPromoCode, setCheckoutPromoCode] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  // "Fly to bag" animation state: last pointer position + books in flight
  const pointerRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const flyIdRef = useRef(0);
  const [flyingBooks, setFlyingBooks] = useState<FlyingBook[]>([]);
  const [bagPulse, setBagPulse] = useState(0);

  useEffect(() => {
    const trackPointer = (e: PointerEvent) => {
      pointerRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('pointerdown', trackPointer, { passive: true });
    return () => window.removeEventListener('pointerdown', trackPointer);
  }, []);

  // Theme toggle state with persistence
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('placement_theme');
      if (saved !== null) {
        return saved === 'dark';
      }
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('placement_theme', isDark ? 'dark' : 'light');
    } catch {
      // ignore
    }
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    try {
      localStorage.setItem('placement_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('placement_wishlist', JSON.stringify(wishlistIds));
    } catch {
      // ignore
    }
  }, [wishlistIds]);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification((curr) => (curr === msg ? null : curr));
    }, 3000);
  };

  const handleAddToCart = (book: Book, format: string = 'Digital Bundle (PDF + EPUB + Cheat Sheets)') => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.book.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.book.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { book, quantity: 1, format }];
    });

    // Send the cover flying into the navbar bag icon.
    flyIdRef.current += 1;
    const flyId = flyIdRef.current;
    setFlyingBooks((prev) => [
      { id: flyId, from: pointerRef.current, image: book.coverImage },
      ...prev,
    ]);

    showNotification(`"${book.title}" added to your bag.`);
  };

  const handleAddBundleToCart = () => {
    // All 10 books go in at their normal price; the 10-book tier in the cart
    // brings the total down to the flat library price.
    const bundleItems: CartItem[] = BOOKS.map((book) => ({
      book,
      quantity: 1,
      format: 'Complete 10-Book Survival Kit Bundle (PDF + EPUB)',
    }));

    setCartItems(bundleItems);
    setIsCartOpen(true);
    showNotification(
      `🎉 All 10 E-Books added — the full library price of ₹${BUNDLE_DEAL.price} is applied in the bag.`
    );
  };

  const handleUpdateQuantity = (bookId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.book.id === bookId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (bookId: string) => {
    setCartItems((prev) => prev.filter((item) => item.book.id !== bookId));
  };

  const handleToggleWishlist = (bookId: string) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(bookId);
      if (exists) {
        return prev.filter((id) => id !== bookId);
      } else {
        const book = BOOKS.find((b) => b.id === bookId);
        if (book) showNotification(`Saved "${book.title}" for later.`);
        return [...prev, bookId];
      }
    });
  };

  const handleCheckout = (discountAmount: number, promoCode: string) => {
    setCheckoutDiscount(discountAmount);
    setCheckoutPromoCode(promoCode);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = (_order: OrderConfirmation) => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.book.price * item.quantity, 0);
  const cartTotal = cartSubtotal - (getMultiBookOffer(cartItems)?.amount ?? 0);
  const wishlistBooks = BOOKS.filter((b) => wishlistIds.includes(b.id));
  const featuredBook = BOOKS[0]; // AI for Placements

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0c0c0e] text-stone-900 dark:text-stone-100 selection:bg-stone-900 selection:text-amber-50 dark:selection:bg-amber-400 dark:selection:text-stone-950 transition-colors duration-300">
      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 24, stiffness: 320 }}
            className="fixed bottom-6 right-6 z-50 bg-stone-900 dark:bg-stone-800 text-white text-xs px-4 py-3 rounded-xl shadow-2xl border border-stone-800 dark:border-stone-700 flex items-center gap-2"
          >
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{notification}</span>
            <button
              onClick={() => setIsCartOpen(true)}
              className="ml-2 underline text-amber-300 hover:text-white cursor-pointer font-semibold"
            >
              View Cart
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Bar Navigation */}
      <Navbar
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        wishlistCount={wishlistIds.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSampleReader={() => setReaderBook(featuredBook)}
        onOpenSearch={() => {
          const catElem = document.getElementById('catalog');
          catElem?.scrollIntoView({ behavior: 'smooth' });
        }}
        onAddBundleToCart={handleAddBundleToCart}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
        bagPulse={bagPulse}
      />

      {/* Book flying into the bag icon */}
      {flyingBooks.map((fb) => (
        <FlyToBag
          key={fb.id}
          book={fb}
          onLanded={() => setBagPulse((p) => p + 1)}
          onDone={(id) => setFlyingBooks((prev) => prev.filter((b) => b.id !== id))}
        />
      ))}

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          featuredBook={featuredBook}
          onSelectBook={setSelectedBook}
          onOpenSampleReader={setReaderBook}
          onAddToCart={handleAddToCart}
          onAddBundleToCart={handleAddBundleToCart}
        />

        {/* Catalog Section with all 10 books */}
        <Catalog
          books={BOOKS}
          onSelectBook={setSelectedBook}
          onOpenSampleReader={setReaderBook}
          onAddToCart={handleAddToCart}
          onAddBundleToCart={handleAddBundleToCart}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Student Problems & Solutions Guidance */}
        <StudentGuidanceSection onAddBundleToCart={handleAddBundleToCart} />

        {/* Student FAQ & Compatibility */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <BookDetailModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
        onAddToCart={(book, format) => {
          handleAddToCart(book, format);
          setSelectedBook(null);
        }}
        onOpenSampleReader={setReaderBook}
        isWishlisted={selectedBook ? wishlistIds.includes(selectedBook.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {readerBook && (
        <ReaderModal
          book={readerBook}
          onClose={() => setReaderBook(null)}
          onAddToCart={handleAddToCart}
          allBooks={BOOKS}
          onSwitchBook={setReaderBook}
        />
      )}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
        onUpgradeToBundle={handleAddBundleToCart}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistBooks={wishlistBooks}
        onRemoveWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onOpenSampleReader={(book) => {
          setReaderBook(book);
          setIsWishlistOpen(false);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        discountAmount={checkoutDiscount}
        promoCode={checkoutPromoCode}
        onOrderComplete={handleOrderComplete}
      />
    </div>
  );
}
