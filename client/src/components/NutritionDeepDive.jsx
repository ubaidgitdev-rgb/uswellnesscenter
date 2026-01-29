import React from 'react';
import { motion } from 'framer-motion';

const NutritionDeepDive = () => {
    return (
        <section className="py-10 bg-forest-950 text-cream-50 overflow-hidden relative">
            <div className="container-fluid">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-forest-400 font-bold uppercase tracking-[0.4em] text-[8px] block mb-4 px-1 border-l-2 border-forest-400"
                        >
                            The Science
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-serif leading-tight tracking-tight mb-6"
                        >
                            Why <span className="italic text-forest-300">Metabolism</span> <br />Defines Health.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-base text-forest-200/70 font-light leading-relaxed mb-10 max-w-xl"
                        >
                            We focus on nourishment. By optimizing metabolic flexibility, we signal your body to thrive.
                        </motion.p>

                        <div className="space-y-6">
                            {[
                                { title: "Protein Priority", desc: "Builds lean tissue and triggers satiety." },
                                { title: "Metabolic Fats", desc: "Fuels hormonal optimization and clarity." },
                                { title: "Fiber Synthesis", desc: "Supports microbiome and stability." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.05) }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-8 h-8 rounded-lg border border-forest-500/30 flex items-center justify-center text-forest-400 font-serif text-sm font-bold group-hover:bg-forest-400 group-hover:text-forest-950 transition-all">
                                        0{i + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-serif font-bold text-white mb-0.5">{item.title}</h4>
                                        <p className="text-forest-200/40 text-[12px] font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 rounded-[2rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-xl max-w-sm mx-auto"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1579154234431-15509746f332?auto=format&fit=crop&q=80&w=2000"
                                alt="Scientific Nutrition"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default NutritionDeepDive;
