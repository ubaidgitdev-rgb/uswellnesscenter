import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        id: 1,
        title: "Precision. Potential. Performance.",
        subtitle: "The ultimate clinical protocol for metabolic optimization and sustained vitality.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=2000",
        ctaText: "Start Protocol",
        ctaLink: "/register",
        color: "text-forest-900"
    },
    {
        id: 2,
        title: "Science Beyond the Plate",
        subtitle: "Clinical-grade nutrition tailored to your unique biological signature.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000",
        ctaText: "Clinical Approach",
        ctaLink: "/#services",
        color: "text-forest-900"
    },
    {
        id: 3,
        title: "A New Living Standard",
        subtitle: "Join an elite community redefining the boundaries of human health.",
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&q=80&w=2000",
        ctaText: "Join Council",
        ctaLink: "/register",
        color: "text-forest-900"
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-forest-950">
            {/* Background Slides with subtle parallax */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.15 }}
                    animate={{ opacity: 1, scale: 1.05 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[current].image})` }}
                    />
                    {/* Deep Premium Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-forest-900/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Dynamic Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/4 -right-1/4 w-full h-full bg-sage-500/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, -5, 0],
                        opacity: [0.05, 0.1, 0.05]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-forest-400/10 rounded-full blur-[100px]"
                />
            </div>

            {/* Content Container */}
            <div className="relative h-full container-fluid flex items-center z-10 pt-20">
                <div className="max-w-4xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                                exit: { opacity: 0, transition: { duration: 0.5 } }
                            }}
                        >
                            <motion.div
                                variants={{
                                    hidden: { y: 20, opacity: 0 },
                                    visible: { y: 0, opacity: 1 }
                                }}
                                className="flex items-center gap-4 mb-6"
                            >
                                <div className="h-px w-10 bg-gold-500" />
                                <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs">
                                    Premium Wellness Since 2024
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={{
                                    hidden: { y: 30, opacity: 0 },
                                    visible: { y: 0, opacity: 1 }
                                }}
                                className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream-50 leading-[0.9] mb-6 tracking-tighter"
                            >
                                {slides[current].title.split(' ').map((word, i) => (
                                    <span key={i} className="inline-block mr-[0.2em]">{word}</span>
                                ))}
                            </motion.h1>

                            <motion.p
                                variants={{
                                    hidden: { y: 20, opacity: 0 },
                                    visible: { y: 0, opacity: 0.9 }
                                }}
                                className="text-lg md:text-xl text-cream-100 font-light max-w-2xl mb-10 leading-relaxed"
                            >
                                {slides[current].subtitle}
                            </motion.p>

                            <motion.div
                                variants={{
                                    hidden: { y: 20, opacity: 0 },
                                    visible: { y: 0, opacity: 1 }
                                }}
                                className="flex flex-col sm:flex-row gap-5"
                            >
                                <Link to={slides[current].ctaLink}>
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="group relative px-8 py-4 bg-forest-500 text-cream-50 text-xs font-black uppercase tracking-widest rounded-full transition-all shadow-2xl shadow-forest-500/20 overflow-hidden"
                                    >
                                        <span className="relative z-10">{slides[current].ctaText}</span>
                                        <div className="absolute inset-0 bg-forest-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    </motion.button>
                                </Link>
                                <button className="px-8 py-4 border-2 border-cream-50/20 text-cream-50 text-xs font-black uppercase tracking-widest rounded-full hover:bg-cream-50 hover:text-forest-950 transition-all backdrop-blur-sm">
                                    Meet Coach
                                </button>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Slide Indicators - Modern Vertical Style */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-6">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className="group relative flex items-center justify-end"
                    >
                        <span className={`mr-4 text-[10px] font-bold transition-all duration-300 ${current === i ? 'opacity-100 text-gold-500 translate-x-0' : 'opacity-0 translate-x-4 text-white'}`}>
                            0{i + 1}
                        </span>
                        <div className={`h-12 w-[2px] transition-all duration-500 ${current === i ? 'bg-gold-500 h-16' : 'bg-white/20'}`} />
                    </button>
                ))}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-10 flex items-center gap-4 text-white/40"
            >
                <div className="w-12 h-px bg-white/20" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Explore</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-1.5 h-1.5 rounded-full bg-gold-500"
                />
            </motion.div>
        </section>
    );
};


export default Hero;
