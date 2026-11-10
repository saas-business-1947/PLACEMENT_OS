import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

/** A single book cover in flight from the Add button to the navbar bag icon. */
export interface FlyingBook {
  id: number;
  from: { x: number; y: number };
  image: string;
}

interface FlyToBagProps {
  book: FlyingBook;
  onDone: (id: number) => void;
  onLanded: () => void;
}

const BOOK_W = 44;
const BOOK_H = 60;

export const FlyToBag: React.FC<FlyToBagProps> = ({ book, onDone, onLanded }) => {
  const [target, setTarget] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const rect = document.getElementById('bag-icon-target')?.getBoundingClientRect();
    if (rect && rect.width > 0) {
      setTarget({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    } else {
      // Bag icon not on screen (e.g. unmounted) — drop the animation quietly.
      onDone(book.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [book.id]);

  if (!target) return null;

  const startX = book.from.x - BOOK_W / 2;
  const startY = book.from.y - BOOK_H / 2;
  const dx = target.x - BOOK_W / 2 - startX;
  const dy = target.y - BOOK_H / 2 - startY;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60]"
      initial={{ x: startX, y: startY, scale: 0.55, opacity: 0, rotate: -10 }}
      animate={{
        x: [startX, startX + dx * 0.55, startX + dx],
        y: [startY, startY + dy * 0.55 - 110, startY + dy],
        scale: [0.55, 1, 0.22],
        opacity: [0, 1, 0.85],
        rotate: [-10, 8, 0],
      }}
      transition={{ duration: 0.8, times: [0, 0.55, 1], ease: 'easeInOut' }}
      onAnimationComplete={() => {
        onLanded();
        onDone(book.id);
      }}
    >
      <div className="w-[44px] h-[60px] rounded-[4px] overflow-hidden bg-stone-800 shadow-xl ring-1 ring-stone-900/25">
        <img src={book.image} alt="" className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};
