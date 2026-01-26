import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTABanner = () => {
    return (
        <section className="relative py-40 overflow-hidden bg-forest-950">
            {/* Background Image with sophisticated blend */}
            <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545205566-724bc0c63866?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-forest-950/80"></div>

            {/* Animated Glow Elements */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 blur-[120px] rounded-full"
            />

            <div className="container-fluid relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="text-gold-500 font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">
                        Final Opportunity
                    </span>
                    <h2 className="text-6xl md:text-9xl font-serif text-cream-50 leading-[0.8] tracking-tighter">
                        Reclaim Your <br /><span className="italic text-sage-400">Vitality.</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-cream-100 max-w-2xl mx-auto mb-16 font-light leading-relaxed"
                >
                    The average human cell regenerates every 7 years.
                    Start your transformation today with a clinical-grade metabolic assessment.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <Link to="/register">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-16 py-6 bg-white text-forest-950 text-xs font-black uppercase tracking-[0.3em] rounded-full shadow-2xl hover:bg-gold-500 transition-all"
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
