import { CartItem } from '../types';
import { MULTI_BOOK_TIERS } from '../data/books';

export interface MultiBookOffer {
  count: number;
  price: number;
  label: string;
  /** Total of the individual prices before the flat multi-book price is applied. */
  subtotal: number;
  /** Rupees taken off so the cart lands on the flat tier price. */
  amount: number;
}

/**
 * Applies the "any 3 / any 5 / all 10" flat pricing.
 * Tiers are counted on distinct single copies, so extra copies of the same
 * book keep their normal price instead of silently discounting the whole cart.
 */
export const getMultiBookOffer = (items: CartItem[]): MultiBookOffer | null => {
  if (items.length === 0) return null;
  if (items.some((item) => item.quantity > 1)) return null;

  const tier = MULTI_BOOK_TIERS.slice()
    .sort((a, b) => b.count - a.count)
    .find((t) => items.length >= t.count);
  if (!tier) return null;

  const subtotal = items.reduce((sum, item) => sum + item.book.price * item.quantity, 0);
  const amount = Math.max(0, subtotal - tier.price);
  if (amount <= 0) return null;

  return { ...tier, subtotal, amount };
};
