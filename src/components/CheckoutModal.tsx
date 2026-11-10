import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem, OrderConfirmation } from '../types';
import { formatPrice } from '../utils/format';
import { FULL_EBOOK_CONTENTS } from '../data/fullBookContents';
import {
  X,
  CheckCircle2,
  Download,
  CreditCard,
  QrCode,
  ShieldCheck,
  Smartphone,
  Copy,
  Check,
  Building,
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  discountAmount: number;
  promoCode: string;
  onOrderComplete: (order: OrderConfirmation) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  discountAmount,
  promoCode,
  onOrderComplete,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card'>('upi');
  const [upiId, setUpiId] = useState('student@oksbi');
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8821');
  const [expiry, setExpiry] = useState('08/28');
  const [cvc, setCvc] = useState('412');
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<OrderConfirmation | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);

  const rawSubtotal = items.reduce(
    (sum, item) => sum + item.book.price * item.quantity,
    0
  );
  const finalTotal = Math.max(0, rawSubtotal - discountAmount);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const order: OrderConfirmation = {
        orderId: `POS-${Math.floor(10000 + Math.random() * 90000)}`,
        customerName: name || 'Final Year Student',
        collegeName: college || 'Engineering / Management College',
        email: email || 'student@college.edu',
        phone: phone || '+91 98765 43210',
        upiId: paymentMethod === 'upi' ? upiId : undefined,
        items: [...items],
        total: finalTotal,
        currency: 'INR',
        date: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        licenseKey: `POS-2026-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
      };

      setCompletedOrder(order);
      onOrderComplete(order);
      setIsProcessing(false);
      setStep('success');
    }, 900);
  };

  const handleDownloadFile = (bookId: string, bookTitle: string, formatName: string) => {
    const fullEdition = FULL_EBOOK_CONTENTS[bookId];

    let fileBody = `=================================================================
PLACEMENTOS - OFFICIAL CAMPUS PLACEMENT EDITION (2026)
Title: ${bookTitle}
Format: ${formatName}
Order ID: ${completedOrder?.orderId || 'POS-2026-001'}
Licensed to: ${completedOrder?.customerName || 'Student'} (${completedOrder?.email || 'student@domain.edu'})
College: ${completedOrder?.collegeName || 'Campus'}
Universal Student License Key: ${completedOrder?.licenseKey || 'POS-KEY-2026'}
=================================================================\n\n`;

    if (fullEdition) {
      fileBody += `AUTHOR: ${fullEdition.author}
VERSION: ${fullEdition.version}
WORD COUNT: ${fullEdition.wordCount}

=================================================================
FULL CHAPTERS & ACTIONABLE BLUEPRINT
=================================================================

${fullEdition.chapters
  .map(
    (ch) => `### ${ch.chapterNumber}: ${ch.chapterTitle} ###

${ch.content}`
  )
  .join('\n\n=================================================================\n\n')}

=================================================================
PRINTABLE CAMPUS CHEAT SHEET
=================================================================
${fullEdition.printableCheatSheet}
`;
    } else {
      fileBody += `Complete guidebook chapters, AI interview prompts, and speed formulas included.\n`;
    }

    fileBody += `\n=================================================================
End of Edition · Keep offline for hostel and exam day revisions.
=================================================================`;

    const blob = new Blob([fileBody], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${bookTitle.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${formatName.toLowerCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copyLicense = () => {
    if (completedOrder?.licenseKey) {
      navigator.clipboard?.writeText(completedOrder.licenseKey);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#FAF8F5] dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden my-8 z-10 transition-colors"
          >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-white dark:bg-stone-950">
          <div>
            <h2 className="font-editorial text-2xl font-bold text-stone-900 dark:text-stone-100">
              {step === 'form' ? 'Instant Student Checkout' : 'Order Confirmed · Ready to Read'}
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              {step === 'form' ? 'Instant delivery of your DRM-Free E-Books' : 'Direct downloads unlocked below'}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close checkout"
            className="p-1.5 text-stone-400 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-100 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Order summary */}
            <div className="p-4 bg-white dark:bg-stone-950 rounded-xl border border-stone-200/80 dark:border-stone-800 text-xs flex justify-between items-center">
              <div>
                <span className="text-stone-500 dark:text-stone-400">Selected Guides: </span>
                <span className="font-bold text-stone-900 dark:text-stone-100">
                  {items.length} {items.length === 1 ? 'E-Book' : 'E-Books'}
                </span>
                {promoCode && (
                  <span className="text-emerald-700 dark:text-emerald-400 ml-2 font-medium">· Coupon {promoCode}</span>
                )}
              </div>
              <span className="text-xl font-bold font-mono text-emerald-800 dark:text-amber-400">
                {formatPrice(finalTotal, 'INR')}
              </span>
            </div>

            {/* Student details */}
            <div className="space-y-4">
              <div className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
                1. Student Delivery Details
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-stone-600 dark:text-stone-400 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rohan Sharma"
                    className="w-full px-3 py-2 text-xs bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-800 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-800 dark:focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs text-stone-600 dark:text-stone-400 mb-1">
                    College / University Name
                  </label>
                  <input
                    type="text"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    placeholder="e.g. VIT Vellore / NIT Trichy / DTU"
                    className="w-full px-3 py-2 text-xs bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-800 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-800 dark:focus:ring-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-stone-600 dark:text-stone-400 mb-1">
                    Email Address (For PDF Delivery) *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rohan@gmail.com"
                    className="w-full px-3 py-2 text-xs bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-800 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-800 dark:focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs text-stone-600 dark:text-stone-400 mb-1">
                    WhatsApp Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-xs bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-800 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-800 dark:focus:ring-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Payment method */}
            <div className="space-y-4 pt-2 border-t border-stone-200 dark:border-stone-800">
              <div className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
                2. Select Indian Payment Mode
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    paymentMethod === 'upi'
                      ? 'border-stone-900 dark:border-amber-400 bg-white dark:bg-stone-950 text-stone-900 dark:text-amber-300 shadow-xs'
                      : 'border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-600 dark:text-stone-400'
                  }`}
                >
                  <QrCode className="w-4 h-4 text-emerald-700 dark:text-amber-400" />
                  <span>UPI / QR / GPay / PhonePe</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'border-stone-900 dark:border-amber-400 bg-white dark:bg-stone-950 text-stone-900 dark:text-amber-300 shadow-xs'
                      : 'border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-600 dark:text-stone-400'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Debit / Credit Card / Netbanking</span>
                </button>
              </div>

              {paymentMethod === 'upi' ? (
                <div className="p-4 bg-white dark:bg-stone-950 rounded-xl border border-stone-200/80 dark:border-stone-800 space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200/60 dark:border-stone-800">
                    <div className="w-12 h-12 bg-white dark:bg-stone-950 rounded-lg border border-stone-200 dark:border-stone-700 flex items-center justify-center font-bold text-xs font-mono dark:text-amber-400">
                      UPI
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900 dark:text-stone-100">
                        Zero Convenience Fee on UPI
                      </div>
                      <div className="text-[11px] text-stone-500 dark:text-stone-400">
                        Supports Google Pay, PhonePe, Paytm, CRED & BHIM.
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-stone-500 dark:text-stone-400 mb-1">
                      Enter UPI ID / VPA
                    </label>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="username@okhdfcbank"
                      className="w-full px-3 py-2 text-xs font-mono bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-stone-800 dark:focus:ring-amber-400"
                    />
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-white dark:bg-stone-950 rounded-xl border border-stone-200/80 dark:border-stone-800 space-y-3">
                  <div>
                    <label className="block text-[11px] text-stone-500 dark:text-stone-400 mb-1">
                      Debit / Credit Card Number
                    </label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-mono bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-stone-800 dark:focus:ring-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-stone-500 dark:text-stone-400 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        className="w-full px-3 py-2 text-xs font-mono bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-stone-800 dark:focus:ring-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-stone-500 dark:text-stone-400 mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                        className="w-full px-3 py-2 text-xs font-mono bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-stone-800 dark:focus:ring-amber-400"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 px-4 text-xs font-bold text-white dark:text-stone-950 bg-stone-900 hover:bg-stone-800 dark:bg-amber-400 dark:hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Generating Secure Student License...</span>
                ) : (
                  <span>
                    Pay {formatPrice(finalTotal, 'INR')} & Unlock Downloads Instantly
                  </span>
                )}
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-stone-400 dark:text-stone-500">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                <span>100% Student Money-Back Guarantee · Keep PDFs Forever</span>
              </div>
            </div>
          </form>
        ) : (
          /* Order Completed State */
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3 border border-emerald-300 dark:border-emerald-700/50">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-stone-900 dark:text-stone-100 mb-1">
                You're All Set, {completedOrder?.customerName}!
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 max-w-md mx-auto">
                Order <span className="font-mono font-bold text-stone-900 dark:text-amber-300">{completedOrder?.orderId}</span> is confirmed. A copy of your receipt and access links has been sent to{' '}
                <span className="font-semibold text-stone-900 dark:text-stone-100">{completedOrder?.email}</span>.
              </p>
            </div>

            {/* License details */}
            <div className="p-4 bg-white dark:bg-stone-950 rounded-xl border border-stone-200/80 dark:border-stone-800 flex items-center justify-between text-xs">
              <div>
                <span className="text-stone-400 dark:text-stone-500 block text-[10px] uppercase tracking-wider font-semibold">
                  Universal Student License Key
                </span>
                <span className="font-mono font-bold text-stone-900 dark:text-stone-100">
                  {completedOrder?.licenseKey}
                </span>
              </div>
              <button
                onClick={copyLicense}
                className="px-2.5 py-1 text-xs bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded text-stone-700 dark:text-stone-200 flex items-center gap-1 cursor-pointer font-medium border border-transparent dark:border-stone-700"
              >
                {copiedKey ? <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedKey ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Direct Downloads List */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider flex items-center justify-between">
                <span>Instant Download Access (DRM-Free)</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{completedOrder?.items.length} Files Ready</span>
              </div>

              {completedOrder?.items.map((item) => (
                <div
                  key={item.book.id}
                  className="p-4 bg-white dark:bg-stone-950 rounded-xl border border-stone-200/80 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.book.coverImage}
                      alt={item.book.title}
                      className="w-10 h-14 object-cover rounded bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shrink-0"
                    />
                    <div>
                      <h4 className="font-editorial text-base font-semibold text-stone-900 dark:text-stone-100">
                        {item.book.title}
                      </h4>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400">
                        {item.book.pages} pages · High-Res PDF + EPUB
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDownloadFile(item.book.id, item.book.title, 'PDF')}
                      className="px-3 py-1.5 text-xs font-bold bg-stone-900 hover:bg-stone-800 dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-stone-950 rounded-lg flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </button>
                    <button
                      onClick={() => handleDownloadFile(item.book.id, item.book.title, 'EPUB')}
                      className="px-3 py-1.5 text-xs font-medium bg-stone-100 hover:bg-stone-200 dark:bg-stone-850 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 rounded-lg flex items-center gap-1.5 cursor-pointer border border-stone-200/60 dark:border-stone-700"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>EPUB</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Done button */}
            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full py-3 px-4 text-xs font-bold text-stone-800 dark:text-stone-200 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg transition-colors cursor-pointer border border-transparent dark:border-stone-700"
              >
                Return to Campus Store
              </button>
            </div>
          </div>
        )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
