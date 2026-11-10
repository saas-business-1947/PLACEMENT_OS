import React, { useState } from 'react';
import { ArrowRight, Check, GraduationCap } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-white text-stone-900 flex items-center justify-center text-sm font-bold">
                P
              </span>
              <span className="font-editorial text-2xl font-bold tracking-tight text-white">
                PlacementOS
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              The digital survival companion for final year Indian college students navigating placement drives, AI disruption, aptitude eliminations, and career stress.
            </p>
            <div className="text-xs text-stone-500 pt-2">
              All prices in Indian Rupees (INR ₹) · 100% DRM-Free Digital Delivery.
            </div>
          </div>

          {/* Catalog Links */}
          <div className="md:col-span-2 space-y-3 text-xs">
            <div className="text-stone-200 font-bold uppercase tracking-wider text-[11px]">
              Placement Guides
            </div>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">AI for Placements</a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">Aptitude with AI</a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">GD Round Playbook</a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">Salary Negotiation</a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">Resume & LinkedIn</a>
              </li>
            </ul>
          </div>

          {/* Student Support */}
          <div className="md:col-span-2 space-y-3 text-xs">
            <div className="text-stone-200 font-bold uppercase tracking-wider text-[11px]">
              Assistance
            </div>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">The 6 Student Problems</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Payment with UPI</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Refund Guarantee</a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">10-Book Bundle Deal</a>
              </li>
            </ul>
          </div>

          {/* Student Newsletter */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <div className="text-stone-200 font-bold uppercase tracking-wider text-[11px]">
              Campus Dispatch
            </div>
            <p className="text-stone-400 text-xs leading-relaxed">
              Get weekly free AI interview prompt recipes, speed aptitude shortcuts, and GD cheat sheets sent to your inbox.
            </p>

            {isSubscribed ? (
              <div className="p-3 bg-stone-800 text-emerald-400 rounded-lg flex items-center gap-2 text-xs">
                <Check className="w-4 h-4" />
                <span>You are subscribed to the Campus Dispatch!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@college.edu"
                    className="w-full px-3 py-2 text-xs bg-stone-800/80 border border-stone-700 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-white"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 text-stone-300 hover:text-white transition-colors cursor-pointer"
                    title="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[10px] text-stone-500">
                  Zero spam. Curated specifically for final year students.
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} PlacementOS. Built to help students conquer placements and career stress.
          </div>
          <div className="flex items-center gap-6">
            <span>Instant Digital Delivery</span>
            <span>·</span>
            <span>PDF + EPUB + Cheat Sheets</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
