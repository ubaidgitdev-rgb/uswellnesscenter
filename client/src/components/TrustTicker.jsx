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
        <div className="bg-cream-100/50 py-16 border-y border-forest-100/30 overflow-hidden relative">
            {/* Subtle Gradient Fades on Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream-50 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cream-50 to-transparent z-10" />

            <div className="container-fluid mb-10 text-center">
                <span className="text-forest-400 font-bold uppercase tracking-[0.4em] text-[10px]">
                    Validated by Industry Authorities
                </span>
            </div>

            <div className="flex overflow-hidden group">
                {/* We duplicate the content for a seamless loop effect if using a marquee, 
                   but for now we'll just style the current set beautifully. */}
                <div className="flex items-center justify-around w-full px-4 gap-12 md:gap-24 opacity-40 grayscale hover:opacity-80 transition-all duration-700">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3"
                        >
                            <span className="text-2xl md:text-4xl font-serif font-black text-forest-950 tracking-tighter">
                                {brand.name}
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default TrustTicker;
