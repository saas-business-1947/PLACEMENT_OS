import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';
import { BUNDLE_DEAL } from '../data/books';
import { formatPrice } from '../utils/format';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag, Zap } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (bookId: string, delta: number) => void;
  onRemoveItem: (bookId: string) => void;
  onCheckout: (discountAmount: number, promoCode: string) => void;
  onUpgradeToBundle: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onUpgradeToBundle,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState('');

  const rawSubtotal = items.reduce(
    (sum, item) => sum + item.book.price * item.quantity,
    0
  );

  let discountAmount = 0;
  if (appliedPromo === 'STUDENT50') {
    discountAmount = Math.min(rawSubtotal, 50);
  } else if (appliedPromo === 'CAMPUS10') {
    discountAmount = Math.round(rawSubtotal * 0.1);
  }

  const finalTotal = Math.max(0, rawSubtotal - discountAmount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'STUDENT50' || clean === 'CAMPUS10') {
      setAppliedPromo(clean);
      setPromoError('');
    } else {
      setPromoError('Try "STUDENT50" for flat ₹50 off or "CAMPUS10"');
    }
  };

  const hasAllBooks = items.length >= 10;

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
        {/* Header */}
        <div className="p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-editorial text-2xl font-semibold text-stone-900 dark:text-stone-100">
              Your Placement Cart
            </h2>
            <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">
              ({items.reduce((s, i) => s + i.quantity, 0)} {items.length === 1 ? 'guide' : 'guides'})
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-1.5 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Item List / Empty state */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Bundle Upsell Banner if only 1-3 books in cart */}
          {!hasAllBooks && items.length > 0 && rawSubtotal < BUNDLE_DEAL.price && (
            <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/60 text-xs text-amber-950 dark:text-amber-200 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-300">
                <Zap className="w-4 h-4 fill-amber-500 text-amber-600 dark:fill-amber-400 dark:text-amber-300" />
                <span>Student Bundle Deal Available!</span>
              </div>
              <p className="text-[11px] text-amber-800 dark:text-amber-300 leading-relaxed">
                Get ALL 10 E-Books (Aptitude, AI Prep, GD, Negotiation, Tech Sprint, Work-Life) for just <strong>₹899</strong> (Save 64%).
              </p>
              <button
                onClick={onUpgradeToBundle}
                className="w-full py-2 px-3 text-xs font-bold bg-amber-300 hover:bg-amber-400 text-stone-900 rounded-lg transition-colors cursor-pointer"
              >
                Upgrade to All 10 Books for ₹899
              </button>
            </div>
          )}

          {items.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-editorial text-xl text-stone-800 dark:text-stone-100 mb-2">
                Your cart is empty
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400 max-w-xs mx-auto mb-6">
                Pick any of our 10 placement survival playbooks or grab the full bundle for ₹899.
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-white dark:text-stone-950 bg-stone-900 hover:bg-stone-800 dark:bg-amber-400 dark:hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
              >
                Explore Playbooks
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.book.id}
                className="p-4 bg-white dark:bg-stone-950 rounded-xl border border-stone-200/70 dark:border-stone-800 flex gap-4 shadow-xs"
              >
                {/* Book Thumbnail */}
                <div className="w-16 h-22 rounded-md overflow-hidden bg-stone-100 dark:bg-stone-900 shrink-0 border border-stone-200/50 dark:border-stone-800">
                  <img
                    src={item.book.coverImage}
                    alt={item.book.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-editorial text-base font-semibold text-stone-900 dark:text-stone-100 leading-snug line-clamp-1">
                        {item.book.title}
                      </h3>
                      <button
                        onClick={() => onRemoveItem(item.book.id)}
                        aria-label="Remove item"
                        className="text-stone-400 hover:text-rose-600 dark:text-stone-500 dark:hover:text-rose-400 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-stone-500 dark:text-stone-400 mb-1">
                      {item.book.category}
                    </p>

                    <div className="text-[10px] text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-200/50 dark:border-emerald-800/50 inline-block mb-2 font-medium">
                      Instant DRM-Free PDF
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-stone-100 dark:border-stone-800">
                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 bg-stone-100 dark:bg-stone-900 px-2 py-1 rounded-md text-xs">
                      <button
                        onClick={() => onUpdateQuantity(item.book.id, -1)}
                        className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 cursor-pointer"
                        title="Decrease"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono font-medium text-stone-800 dark:text-stone-200 px-1 tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.book.id, 1)}
                        className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 cursor-pointer"
                        title="Increase"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-sm font-bold tabular-nums font-mono text-stone-900 dark:text-stone-100">
                      {formatPrice(item.book.price * item.quantity, 'INR')}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer summary & checkout button */}
        {items.length > 0 && (
          <div className="p-6 border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 space-y-4">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="space-y-1">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400 dark:text-stone-500" />
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Coupon (e.g. STUDENT50 or CAMPUS10)"
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-800 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-800 dark:focus:ring-amber-400"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 py-1.5 text-xs font-semibold bg-stone-100 dark:bg-stone-850 hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 rounded-lg transition-colors cursor-pointer border border-transparent dark:border-stone-700"
                >
                  Apply
                </button>
              </div>

              {appliedPromo && (
                <div className="text-[11px] text-emerald-700 dark:text-emerald-400 flex items-center justify-between font-medium">
                  <span>Coupon {appliedPromo} applied!</span>
                  <button
                    type="button"
                    onClick={() => {
                      setAppliedPromo(null);
                      setPromoCode('');
                    }}
                    className="underline text-stone-500 dark:text-stone-400 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              )}

              {promoError && (
                <div className="text-[11px] text-rose-600 dark:text-rose-400">{promoError}</div>
              )}
            </form>

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-stone-600 dark:text-stone-400 pt-2 border-t border-stone-100 dark:border-stone-800">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono tabular-nums text-stone-900 dark:text-stone-100 font-semibold">
                  {formatPrice(rawSubtotal, 'INR')}
                </span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 dark:text-emerald-400 font-semibold">
                  <span>Student Discount</span>
                  <span className="font-mono tabular-nums">
                    -{formatPrice(discountAmount, 'INR')}
                  </span>
                </div>
              )}

              <div className="flex justify-between text-stone-400 dark:text-stone-500 text-[11px]">
                <span>Delivery & GST</span>
                <span>₹0 (Instant Digital Delivery)</span>
              </div>

              <div className="flex justify-between text-base font-bold text-stone-900 dark:text-stone-100 pt-2 border-t border-stone-100 dark:border-stone-800">
                <span>Total Payable</span>
                <span className="tabular-nums font-mono text-lg text-emerald-800 dark:text-amber-400">
                  {formatPrice(finalTotal, 'INR')}
                </span>
              </div>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2 p-2.5 bg-stone-50 dark:bg-stone-900 rounded-lg text-[11px] text-stone-600 dark:text-stone-400 border border-transparent dark:border-stone-800">
              <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
              <span>Instant direct PDF/EPUB download link provided immediately upon checkout.</span>
            </div>

            {/* Checkout CTA */}
            <button
              onClick={() => onCheckout(discountAmount, appliedPromo || '')}
              className="w-full py-3.5 px-4 text-xs font-bold text-white dark:text-stone-950 bg-stone-900 hover:bg-stone-800 dark:bg-amber-400 dark:hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Proceed to Instant Checkout (UPI / Card)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
