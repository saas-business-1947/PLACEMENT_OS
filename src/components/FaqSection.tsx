import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Smartphone, Laptop, CheckCircle2 } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Are these ebooks useful for Tier-2, Tier-3 and state university campus drives?',
    answer:
      'Yes, 100%. In fact, these guides were written with non-IIT/NIT students explicitly in mind. While Tier-1 colleges have dedicated corporate networks, students from Tier-2/3 campuses must clear ruthless mass-aptitude screening cuts and off-campus ATS filters. These playbooks level the playing field by teaching you the exact frameworks top hiring managers grade on.',
  },
  {
    question: 'How do I pay in Indian currency (INR / ₹) with Google Pay or PhonePe?',
    answer:
      'We support all standard Indian digital payment methods including UPI (Google Pay, PhonePe, Paytm, CRED, BHIM), Netbanking, and RuPay/Visa/Mastercard Debit and Credit cards. There are zero additional convenience charges.',
  },
  {
    question: 'What file formats will I receive, and can I read them on my phone?',
    answer:
      'Immediately after completing checkout, you can download DRM-free high-resolution PDF and EPUB files. They are formatted specifically for easy reading on smartphones, laptops, tablets, and e-readers. You can also print the one-page cheat sheets to review in your college bus or hostel before test day.',
  },
  {
    question: 'I have an aptitude test or interview tomorrow morning. How fast do I get access?',
    answer:
      'Instant access. The download links appear immediately on your screen as soon as your checkout completes. A permanent backup receipt and download link are also emailed to you right away.',
  },
  {
    question: 'What is the student satisfaction & money-back policy?',
    answer:
      'We have a 7-day unconditional student refund guarantee. If you read the playbooks and feel they did not offer practical, actionable value for your placement preparations, simply email our student support desk and we will refund your payment in full—no questions asked.',
  },
  {
    question: 'How does the All-in-One 10-Book Bundle work?',
    answer:
      'The bundle gives you instant access to all 10 E-Books (Aptitude with AI, Placement AI prompts, GD rounds, salary negotiation, tech learning sprint, work-life balance, time management, focus, sales, and business skills) for a flat ₹899 instead of buying them separately for ₹2,490. You save 64% and get lifetime access.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-24 border-t border-stone-200/80 dark:border-stone-800 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold mb-2">
            Placement Prep Support
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-3">
            Frequently Asked Questions by Final Year Students
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 max-w-lg mx-auto">
            Everything you need to know about formats, UPI payment, device compatibility, and campus relevance.
          </p>
        </div>

        {/* Quick Student Feature Box */}
        <div className="mb-10 p-6 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 shadow-xs">
          <div className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider mb-4">
            Device & Format Readiness
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 bg-stone-50 dark:bg-stone-950 rounded-xl border border-stone-200/50 dark:border-stone-800">
              <div className="font-bold text-stone-900 dark:text-stone-100 mb-1">Mobile & WhatsApp Friendly</div>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-[11px]">
                High-contrast readable PDFs with summary checklists you can read on your phone during college transit.
              </p>
            </div>
            <div className="p-3.5 bg-stone-50 dark:bg-stone-950 rounded-xl border border-stone-200/50 dark:border-stone-800">
              <div className="font-bold text-stone-900 dark:text-stone-100 mb-1">Laptop & Dual Monitor Study</div>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-[11px]">
                Interactive Notion prompt templates and Excel CTC calculators that run seamlessly on Windows, Mac & Linux.
              </p>
            </div>
            <div className="p-3.5 bg-stone-50 dark:bg-stone-950 rounded-xl border border-stone-200/50 dark:border-stone-800">
              <div className="font-bold text-stone-900 dark:text-stone-100 mb-1">100% DRM-Free Ownership</div>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-[11px]">
                No expiring accounts or proprietary reader locks. Download and keep your books forever.
              </p>
            </div>
          </div>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200/80 dark:border-stone-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/50 dark:hover:bg-stone-800/50 transition-colors"
                >
                  <span className="font-semibold text-stone-900 dark:text-stone-100 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-stone-500 dark:text-stone-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-400 dark:text-stone-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed border-t border-stone-100 dark:border-stone-800">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
