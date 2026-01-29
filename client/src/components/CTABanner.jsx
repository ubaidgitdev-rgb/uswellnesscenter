import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTABanner = () => {
    return (
        <section className="relative py-12 overflow-hidden bg-forest-500 shadow-premium">
            <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545205566-724bc0c63866?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-600/50 via-transparent to-forest-600/30"></div>

            <div className="container-fluid relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <span className="text-white font-black uppercase tracking-[0.4em] text-[8px] mb-3 block drop-shadow-sm opacity-80">
                        Start Your Journey
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight tracking-tight drop-shadow-md">
                        Reclaim Your <span className="italic text-forest-200">Vitality.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link to="/register">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3.5 bg-white text-forest-600 text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-xl hover:bg-forest-50 transition-all border border-white/20"
                        >
                            Begin Assessment
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};


export default CTABanner;
