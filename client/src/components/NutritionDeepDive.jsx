import React from 'react';
import { motion } from 'framer-motion';

const NutritionDeepDive = () => {
    return (
        <section className="py-32 bg-forest-950 text-cream-50 overflow-hidden">
            <div className="container-fluid">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-gold-500 font-bold uppercase tracking-[0.4em] text-[10px] block mb-8 px-1 border-l-2 border-gold-500"
                        >
                            The Science
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-8xl font-serif leading-[0.85] tracking-tighter mb-10"
                        >
                            Why <span className="italic text-sage-400">Metabolism</span> <br />Defines Health.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-forest-200/80 font-light leading-relaxed mb-16 max-w-xl"
                        >
                            Most diets focus on deprivation. We focus on nourishment. By optimizing your metabolic flexibility, we signal your body to thrive, utilizing fuel efficiently without the inflammatory crash.
                        </motion.p>

                        <div className="space-y-12">
                            {[
                                { title: "Protein Priority", desc: "Builds lean tissue and triggers satiety hormone signaling." },
                                { title: "Metabolic Fats", desc: "Fuels hormonal optimization and sustained cognitive clarity." },
                                { title: "Fiber Synthesis", desc: "Supports microbiome diversity and glycemic stability." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="flex items-start gap-6 group"
                                >
                                    <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 font-serif text-lg font-bold group-hover:bg-gold-500 group-hover:text-forest-950 transition-all">
                                        0{i + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-serif font-bold text-white mb-2">{item.title}</h4>
                                        <p className="text-forest-200/50 font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative z-10 rounded-[40px] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1579154234431-15509746f332?auto=format&fit=crop&q=80&w=2000"
                                alt="Scientific Nutrition"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent" />
                        </motion.div>

                        {/* Interactive Background Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-20 -left-20 w-80 h-80 border border-white/5 rounded-full z-0 border-dashed"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 w-96 h-96 bg-gold-500/10 rounded-full z-0 blur-[80px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default NutritionDeepDive;
