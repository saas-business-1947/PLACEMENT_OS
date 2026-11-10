import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book } from '../data/books';
import { FULL_EBOOK_CONTENTS } from '../data/fullBookContents';
import { ReaderSettings } from '../types';
import { formatPrice } from '../utils/format';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Coffee,
  ShoppingBag,
  Download,
  FileText,
  List,
} from 'lucide-react';

interface ReaderModalProps {
  book: Book;
  onClose: () => void;
  onAddToCart: (book: Book) => void;
  allBooks: Book[];
  onSwitchBook: (book: Book) => void;
}

export const ReaderModal: React.FC<ReaderModalProps> = ({
  book,
  onClose,
  onAddToCart,
  allBooks,
  onSwitchBook,
}) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'chapter' | 'cheatsheet'>('chapter');
  const [settings, setSettings] = useState<ReaderSettings>({
    theme: 'paper',
    fontSize: 'base',
    fontFamily: 'sans',
  });

  const fullEdition = FULL_EBOOK_CONTENTS[book.id];
  const chapters = fullEdition?.chapters || [
    {
      chapterNumber: 'Chapter 01',
      chapterTitle: book.excerpt.title,
      content: book.excerpt.content.join('\n\n'),
    },
  ];

  const totalChapters = chapters.length;
  const currentChapter = chapters[activeChapterIndex] || chapters[0];

  const themeClasses = {
    paper: 'bg-[#FAF8F5] text-stone-900 border-stone-200',
    sepia: 'bg-[#F4ECD8] text-[#3A2F25] border-[#E2D5BA]',
    dark: 'bg-[#18181B] text-[#E4E4E7] border-stone-800',
  }[settings.theme];

  const themeControlBg = {
    paper: 'bg-stone-100 text-stone-800',
    sepia: 'bg-[#EBDDC0] text-[#3A2F25]',
    dark: 'bg-stone-800 text-stone-200',
  }[settings.theme];

  const fontSizeClass = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base sm:text-lg leading-relaxed sm:leading-loose',
    lg: 'text-lg sm:text-xl leading-relaxed sm:leading-loose',
    xl: 'text-xl sm:text-2xl leading-relaxed sm:leading-loose',
  }[settings.fontSize];

  const handleDownloadFullBook = () => {
    const textData = `=================================================================
${book.title.toUpperCase()}
${book.subtitle}
Author: ${book.author}
Edition: 2026 Campus Placement Edition · PlacementOS
=================================================================

PROBLEM ADDRESSED:
${book.problemSolved}

SYNOPSIS:
${book.synopsis}

=================================================================
TABLE OF CONTENTS & FULL CHAPTERS
=================================================================

${chapters
  .map(
    (c) => `--- ${c.chapterNumber}: ${c.chapterTitle} ---

${c.content}
`
  )
  .join('\n\n=================================================================\n\n')}

=================================================================
PRINTABLE CAMPUS CHEAT SHEET
=================================================================
${fullEdition?.printableCheatSheet || 'Review the core chapters before test day.'}

=================================================================
End of Edition · PlacementOS Student Editions
=================================================================`;

    const blob = new Blob([textData], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${book.id}-complete-edition.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/80 backdrop-blur-sm flex flex-col justify-between animate-in fade-in duration-200">
      {/* Top Reading Toolbar */}
      <header
        className={`h-16 px-4 sm:px-8 border-b flex items-center justify-between gap-4 transition-colors ${themeClasses}`}
      >
        <div className="flex items-center gap-3 truncate">
          <span className="text-xs uppercase tracking-wider text-amber-700 font-bold hidden sm:inline">
            PlacementOS Digital Reader
          </span>
          <span className="text-stone-400 hidden sm:inline" aria-hidden="true">·</span>
          <span className="font-editorial text-lg font-bold truncate">
            {book.title}
          </span>
        </div>

        {/* Reader Customization Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Chapter vs Cheatsheet Toggle */}
          <div className={`flex items-center p-0.5 rounded-lg text-xs font-semibold ${themeControlBg}`}>
            <button
              onClick={() => setViewMode('chapter')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer flex items-center gap-1 ${
                viewMode === 'chapter' ? 'bg-white dark:bg-stone-900 shadow-xs text-stone-900 dark:text-white' : 'opacity-70'
              }`}
            >
              <List className="w-3 h-3" />
              <span>Chapters</span>
            </button>
            <button
              onClick={() => setViewMode('cheatsheet')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer flex items-center gap-1 ${
                viewMode === 'cheatsheet' ? 'bg-white dark:bg-stone-900 shadow-xs text-stone-900 dark:text-white' : 'opacity-70'
              }`}
            >
              <FileText className="w-3 h-3" />
              <span>Cheat Sheet</span>
            </button>
          </div>

          {/* Theme Switcher */}
          <div className={`flex items-center p-1 rounded-lg ${themeControlBg}`}>
            <button
              onClick={() => setSettings((s) => ({ ...s, theme: 'paper' }))}
              title="Warm Paper"
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                settings.theme === 'paper' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-500'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setSettings((s) => ({ ...s, theme: 'sepia' }))}
              title="Sepia"
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                settings.theme === 'sepia' ? 'bg-[#F4ECD8] text-[#3A2F25] shadow-xs' : 'text-stone-500'
              }`}
            >
              <Coffee className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setSettings((s) => ({ ...s, theme: 'dark' }))}
              title="Dark Room"
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                settings.theme === 'dark' ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-500'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Font Size Selector */}
          <div className={`hidden sm:flex items-center p-0.5 rounded-lg text-xs ${themeControlBg}`}>
            <button
              onClick={() => setSettings((s) => ({ ...s, fontSize: 'sm' }))}
              className={`px-2 py-1 rounded cursor-pointer ${
                settings.fontSize === 'sm' ? 'bg-white dark:bg-stone-900 shadow-xs font-bold' : ''
              }`}
            >
              A-
            </button>
            <button
              onClick={() => setSettings((s) => ({ ...s, fontSize: 'base' }))}
              className={`px-2 py-1 rounded cursor-pointer ${
                settings.fontSize === 'base' ? 'bg-white dark:bg-stone-900 shadow-xs font-bold' : ''
              }`}
            >
              A
            </button>
            <button
              onClick={() => setSettings((s) => ({ ...s, fontSize: 'lg' }))}
              className={`px-2 py-1 rounded cursor-pointer ${
                settings.fontSize === 'lg' ? 'bg-white dark:bg-stone-900 shadow-xs font-bold' : ''
              }`}
            >
              A+
            </button>
          </div>

          {/* Quick Download Full Book */}
          <button
            onClick={handleDownloadFullBook}
            title="Download Complete Edition Text/PDF"
            className={`p-2 rounded-lg transition-colors cursor-pointer ${themeControlBg} hover:opacity-80 flex items-center gap-1.5 text-xs font-semibold`}
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Download Full Guide</span>
          </button>

          {/* Close Reader */}
          <button
            onClick={onClose}
            aria-label="Exit Reader"
            className="p-2 rounded-lg hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Reading Canvas */}
      <main className={`flex-1 overflow-y-auto px-6 py-10 sm:py-14 ${themeClasses}`}>
        <div className="max-w-3xl mx-auto">
          {viewMode === 'chapter' ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentChapter.chapterNumber}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                {/* Chapter Header */}
                <div className="mb-8 pb-6 border-b border-current/15">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <div className="text-xs uppercase tracking-widest opacity-60 font-mono">
                      {currentChapter.chapterNumber} of {totalChapters}
                    </div>

                    {/* Chapter Jump Selector */}
                    <div className="flex items-center gap-2 text-xs">
                      <span className="opacity-60 hidden sm:inline">Jump to:</span>
                      <select
                        value={activeChapterIndex}
                        onChange={(e) => setActiveChapterIndex(Number(e.target.value))}
                        aria-label="Select chapter"
                        className="bg-transparent border border-current/20 rounded-md py-1 px-2 text-xs focus:outline-none cursor-pointer"
                      >
                        {chapters.map((c, idx) => (
                          <option key={idx} value={idx} className="text-stone-900 bg-white">
                            {c.chapterNumber}: {c.chapterTitle}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <h1 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                    {currentChapter.chapterTitle}
                  </h1>
                  <p className="text-xs opacity-75 font-normal">
                    From <span className="font-semibold">{book.title}</span> by {book.author}
                  </p>
                </div>

                {/* Chapter Prose Content */}
                <div
                  className={`${fontSizeClass} ${
                    settings.fontFamily === 'serif' ? 'font-editorial' : 'font-sans'
                  } space-y-5 text-justify sm:text-left transition-all whitespace-pre-line leading-relaxed`}
                >
                  {currentChapter.content}
                </div>

                {/* End of Chapter Navigation */}
                <div className="mt-14 pt-8 border-t border-current/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-80">
                  <span>
                    {activeChapterIndex < totalChapters - 1
                      ? `Next: ${chapters[activeChapterIndex + 1]?.chapterTitle}`
                      : 'Final Chapter of this Playbook'}
                  </span>

                  {activeChapterIndex < totalChapters - 1 && (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setActiveChapterIndex((i) => i + 1)}
                      className="px-4 py-2 rounded-lg border border-current/30 hover:bg-current/10 font-semibold cursor-pointer"
                    >
                      Read Next Chapter →
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            /* Printable Cheat Sheet View */
            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-stone-900 rounded-2xl border border-current/20 shadow-xs">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-current/10">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold opacity-60">
                      Emergency Quick Revision Sheet
                    </span>
                    <h2 className="font-editorial text-2xl font-bold">
                      {book.title} — One-Page Matrix
                    </h2>
                  </div>
                  <button
                    onClick={handleDownloadFullBook}
                    className="px-3 py-1.5 text-xs font-bold bg-amber-300 text-stone-900 rounded-lg hover:bg-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download File</span>
                  </button>
                </div>

                <div className="font-mono text-xs whitespace-pre-line leading-relaxed opacity-90 p-4 bg-stone-50 dark:bg-stone-800/50 rounded-xl border border-current/10">
                  {fullEdition?.printableCheatSheet || 'Review the core chapters before test day.'}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Bar */}
      <footer
        className={`px-4 sm:px-8 py-3.5 border-t flex flex-wrap items-center justify-between gap-4 transition-colors ${themeClasses}`}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveChapterIndex((p) => Math.max(0, p - 1))}
            disabled={activeChapterIndex === 0}
            className="p-2 rounded-lg border border-current/20 flex items-center gap-1 text-xs cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous Chapter</span>
          </button>

          <span className="text-xs font-mono px-2 opacity-70">
            Chapter {activeChapterIndex + 1} / {totalChapters}
          </span>

          <button
            onClick={() => setActiveChapterIndex((p) => Math.min(totalChapters - 1, p + 1))}
            disabled={activeChapterIndex >= totalChapters - 1}
            className="p-2 rounded-lg border border-current/20 flex items-center gap-1 text-xs cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed font-medium"
          >
            <span className="hidden sm:inline">Next Chapter</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Switch Book Dropdown */}
        <div className="hidden lg:flex items-center gap-2 text-xs opacity-80">
          <span>Read another book:</span>
          <select
            value={book.id}
            onChange={(e) => {
              const selected = allBooks.find((b) => b.id === e.target.value);
              if (selected) {
                onSwitchBook(selected);
                setActiveChapterIndex(0);
              }
            }}
            aria-label="Select ebook"
            className="bg-transparent border border-current/20 rounded-md py-1 px-2 text-xs focus:outline-none cursor-pointer"
          >
            {allBooks.map((b) => (
              <option key={b.id} value={b.id} className="text-stone-900 bg-white">
                {b.title}
              </option>
            ))}
          </select>
        </div>

        {/* Purchase CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              onAddToCart(book);
              onClose();
            }}
            className="px-4 py-2 text-xs font-bold bg-stone-900 text-white dark:bg-white dark:text-stone-900 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Own DRM-Free Offline Edition ({formatPrice(book.price, 'INR')})</span>
          </button>
        </div>
      </footer>
    </div>
  );
};
