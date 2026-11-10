import { Currency } from '../types';

export function formatPrice(amountInINR: number, _currency: Currency = 'INR'): string {
  // Format in Indian numbering system
  const formatted = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0,
  }).format(amountInINR);
  return `₹${formatted}`;
}

