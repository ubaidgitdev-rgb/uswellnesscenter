import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] bg-cream-50 flex items-center justify-center px-4 overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-forest-200/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-forest-400/10 rounded-full blur-[100px]" />

            <div className="text-center relative z-10 max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[12rem] md:text-[18rem] font-serif text-forest-900 leading-none tracking-tighter opacity-10 select-none">
                        404
                    </span>
                </motion.div>

                <div className="-mt-20 md:-mt-32">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-4xl md:text-6xl font-serif text-forest-950 mb-6 tracking-tight"
                    >
                        Protocol <span className="italic text-forest-500">Not Found</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-forest-700/70 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-md mx-auto"
                    >
                        The biological data you're looking for seems to have drifted outside our current optimization parameters.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 bg-forest-950 text-cream-50 font-black uppercase tracking-widest text-[10px] rounded-full shadow-2xl hover:bg-forest-800 transition-all"
                            >
                                Recalibrate to Home
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        </div>
    );
};

export default NotFound;
