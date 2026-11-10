import { Book } from './data/books';

export type Currency = 'INR';

export interface CartItem {
  book: Book;
  quantity: number;
  format: string;
}

export interface ReaderSettings {
  theme: 'paper' | 'sepia' | 'dark';
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  fontFamily: 'serif' | 'sans';
}

export interface OrderConfirmation {
  orderId: string;
  customerName: string;
  collegeName?: string;
  email: string;
  phone?: string;
  upiId?: string;
  items: CartItem[];
  total: number;
  currency: Currency;
  date: string;
  licenseKey: string;
}

