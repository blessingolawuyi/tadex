import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1500); // 1.5 seconds to allow for the blinking effect
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl"
        animate={{ opacity: [1, 0, 1, 0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img
          src="/logo.png"
          alt="Tadex Environmental Logo"
          className="h-24 md:h-32 w-auto object-contain"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/300x120/ffffff/22c55e?text=Tadex+Logo' }}
        />
      </motion.div>
    </motion.div>
  );
}
