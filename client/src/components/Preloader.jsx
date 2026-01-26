import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] bg-forest-950 flex flex-col items-center justify-center text-cream-50"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative"
            >
                <h1 className="text-4xl md:text-6xl font-serif tracking-tighter mb-4">
                    Well<span className="italic text-gold-500">Nutrition</span>
                </h1>
                <div className="w-full h-px bg-white/10 relative overflow-hidden">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-gold-500"
                        style={{ width: `${percentage}%` }}
                    />
                </div>
                <div className="mt-4 flex justify-between items-center text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">
                    <span>Optimizing Protocol</span>
                    <span>{percentage}%</span>
                </div>
            </motion.div>

            {/* Decorative background elements */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none"
            />
        </motion.div>
    );
};

export default Preloader;
