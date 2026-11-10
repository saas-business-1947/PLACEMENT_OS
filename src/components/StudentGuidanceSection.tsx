import React from 'react';
import { motion } from 'motion/react';
import { Bot, Users, Compass, ShieldAlert, Sparkles, ArrowRight, FileText, Code2 } from 'lucide-react';
import { BUNDLE_DEAL } from '../data/books';
import { formatPrice } from '../utils/format';

interface StudentGuidanceSectionProps {
  onAddBundleToCart: () => void;
}

export const StudentGuidanceSection: React.FC<StudentGuidanceSectionProps> = ({
  onAddBundleToCart,
}) => {
  const problems = [
    {
      icon: Bot,
      problem: 'AI Pressure & Tech Uncertainty',
      tag: 'Problem #1',
      description:
        'Recruiters expect you to know GenAI, Docker, and modern stacks that your college never taught. You feel behind and fear automation.',
      solution: 'AI for Placement Prep + 14-Day Tech Sprint Blueprint',
      action: 'Learn to use AI as your personal mock interviewer instead of fearing it.',
    },
    {
      icon: ShieldAlert,
      problem: 'Round 1 Aptitude Elimination',
      tag: 'Problem #2',
      description:
        'Over 85% of applicants are filtered out before anyone reads their GitHub or resume. 1 mark in speed math decides your entire shortlist.',
      solution: 'Cracking Aptitude with AI',
      action: 'Master the 25 recurring Quant patterns and tactical speed triage.',
    },
    {
      icon: Users,
      problem: 'GD Fish Markets & Interview Freezes',
      tag: 'Problem #3',
      description:
        'Shouting candidates in group discussions drown out your voice, and nerves make you stutter when asked "Tell me about yourself".',
      solution: 'The GD Champion Playbook + Selling Skills for Engineers',
      action: 'Learn non-aggressive leadership phrases and project storytelling frameworks.',
    },
    {
      icon: Compass,
      problem: 'CTC Confusion & Lowball Offers',
      tag: 'Problem #4',
      description:
        'Signing 3-year restrictive service bonds or accepting inflated CTCs without understanding actual in-hand monthly take-home cash.',
      solution: 'Fresher Offer Negotiation + Business Acumen 101',
      action: 'Decode base pay, evaluate multiple offers, and talk like a product owner.',
    },
    {
      icon: FileText,
      problem: 'Resume Rejections & Zero Callbacks',
      tag: 'Problem #5',
      description:
        'Hundreds of applications sent with no replies, because the resume never parsed or the bullets describe duties instead of results.',
      solution: 'Resume That Gets Interviews + LinkedIn & Personal Branding',
      action: 'Rebuild the one-page resume and profile recruiters actually search for.',
    },
    {
      icon: Code2,
      problem: 'Coding Rounds & Technical Assessments',
      tag: 'Problem #6',
      description:
        'Solving hundreds of practice problems but freezing in the 90-minute company test when the timer and test cases are real.',
      solution: 'DSA & Coding Round Survival Guide',
      action: 'Trade random practice for the five patterns and a 30-day revision plan.',
    },
  ];

  return (
    <section id="solutions" className="py-20 md:py-28 border-t border-stone-200/80 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-950/70 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-xs uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold mb-3">
            The Final Year Roadmap
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-6 leading-tight">
            Every challenge you face between Day-1 and graduation has a tactical answer.
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
            College placement isn't a test of natural genius—it's a test of structured preparation,
            emotional composure, and knowing what corporate hiring panels actually grade.
          </p>
        </motion.div>

        {/* 6 Problem-Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 sm:p-7 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 hover:dark:border-stone-700 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 flex items-center justify-center border border-amber-200/50 dark:border-amber-800/60">
                      <Icon className="w-5 h-5 text-stone-800 dark:text-amber-300" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-stone-400 dark:text-stone-500">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                    {item.problem}
                  </h3>

                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 dark:border-stone-800">
                  <div className="text-[10px] uppercase tracking-wider text-stone-400 dark:text-stone-500 font-bold mb-1">
                    The E-Book Solution:
                  </div>
                  <div className="text-xs font-semibold text-stone-900 dark:text-stone-200 mb-1">
                    {item.solution}
                  </div>
                  <div className="text-[11px] text-emerald-800 dark:text-emerald-400 font-medium">
                    → {item.action}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl bg-stone-900 dark:bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-stone-800"
        >
          <div>
            <h3 className="font-editorial text-2xl font-bold mb-1">
              Ready to eliminate placement stress?
            </h3>
            <p className="text-xs text-stone-400 max-w-lg">
              Download the complete 10-book survival kit for {formatPrice(BUNDLE_DEAL.price, 'INR')} or choose the individual playbook for your immediate upcoming drive.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onAddBundleToCart}
            className="px-6 py-3.5 text-xs font-bold bg-amber-300 hover:bg-amber-200 text-stone-950 rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-md flex items-center gap-2"
          >
            <span>Get All 10 Books ({formatPrice(BUNDLE_DEAL.price, 'INR')})</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
