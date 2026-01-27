import React from 'react';
import { motion } from 'framer-motion';

const coaches = [
    {
        name: "Dr. Elena Vance",
        role: "Head of Metabolic Health",
        bio: "Former Stanford researcher specializing in hormonal optimization and metabolic flexibility.",
        image: "https://images.unsplash.com/photo-1559839734-2b71f1536785?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Marcus Thorne",
        role: "Performance Nutritionist",
        bio: "Advisor to Olympic athletes, focusing on fuel timing and recovery protocols.",
        image: "https://images.unsplash.com/photo-1537367669-12f51ea0ab61?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Sarah Jenkins",
        role: "Clinical Dietician",
        bio: "Expert in autoimmune dietary protocols and inflammatory markers management.",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800"
    }
];

const CoachesAndBenefits = () => {
    return (
        <section className="py-32 bg-sage-50/30 overflow-hidden">
            <div className="container-fluid">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-gold-600 font-bold uppercase tracking-[0.4em] text-[10px] block mb-8 px-1 border-l-2 border-gold-500"
                        >
                            The Council
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-8xl font-serif text-forest-950 leading-[0.85] tracking-tighter mb-10"
                        >
                            Clinical <br /><span className="italic text-forest-600">Precision.</span>
                        </motion.h2>
                        <p className="text-xl text-forest-800 font-light leading-relaxed mb-16 max-w-xl">
                            USWellnessCenter isn't a generic app. It's a clinical protocol developed by world-class clinicians who understand that valid health advice requires biological context.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                            {[
                                { title: 'Board Certified', desc: 'Specialized metabolic clinicians' },
                                { title: 'Evidence-Based', desc: 'Clinical grade protocols' },
                                { title: 'Live Mentorship', desc: 'Weekly deep-dive sessions' },
                                { title: 'Pure Science', desc: 'Zero pseudo-health bias' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex flex-col gap-2"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                        <span className="text-forest-950 font-black uppercase tracking-widest text-xs">{item.title}</span>
                                    </div>
                                    <p className="text-forest-700 text-sm font-light">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-10">
                        {coaches.map((coach, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 1 }}
                                className="group relative"
                            >
                                <div className="aspect-[4/5] overflow-hidden rounded-[40px] bg-forest-200 mb-8 shadow-premium border border-white">
                                    <motion.img
                                        src={coach.image}
                                        alt={coach.name}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.8 }}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-forest-950 mb-2">{coach.name}</h3>
                                <p className="text-gold-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">{coach.role}</p>
                                <p className="text-forest-700 text-base leading-relaxed font-light">{coach.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default CoachesAndBenefits;
