import React from 'react';
import { motion } from 'framer-motion';

const brands = [
    { name: "Vogue", opacity: 0.6 },
    { name: "Healthline", opacity: 0.7 },
    { name: "Men's Health", opacity: 0.6 },
    { name: "Forbes", opacity: 0.7 },
    { name: "Goop", opacity: 0.6 }
];

const TrustTicker = () => {
    return (
        <div className="bg-cream-100/30 py-6 border-y border-forest-100/20 overflow-hidden relative">
            {/* Subtle Gradient Fades on Edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream-50 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream-50 to-transparent z-10" />

            <div className="container-fluid mb-4 text-center">
                <span className="text-forest-400 font-bold uppercase tracking-[0.4em] text-[8px] opacity-60">
                    Validated by Industry Authorities
                </span>
            </div>

            <div className="flex overflow-hidden">
                <div className="flex items-center justify-around w-full px-4 gap-8 md:gap-16 opacity-30 grayscale hover:opacity-60 transition-all duration-700">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3"
                        >
                            <span className="text-xl md:text-2xl font-serif font-black text-forest-950 tracking-tighter">
                                {brand.name}
                            </span>
                            <div className="w-1 h-1 rounded-full bg-forest-400" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default TrustTicker;
