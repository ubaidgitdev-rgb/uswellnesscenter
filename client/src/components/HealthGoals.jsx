import React from 'react';
import { motion } from 'framer-motion';

const goals = [
    {
        id: 1,
        title: "Weight Loss",
        description: "Sustainable fat loss strategies tailored to your metabolism.",
        icon: "⚖️"
    },
    {
        id: 2,
        title: "Weight Gain",
        description: "Build lean muscle mass with nutrient-dense meal planning.",
        icon: "💪"
    },
    {
        id: 3,
        title: "Anti-Aging/Reverse Aging",
        description: "Cellular rejuvenation through antioxidant-rich protocols.",
        icon: "⏳"
    },
    {
        id: 4,
        title: "Health Improvement",
        description: "Optimize energy levels and boost overall vitality.",
        icon: "🌿"
    },
    {
        id: 5,
        title: "Digestive Health",
        description: "Heal your gut microbiome for better absorption and immunity.",
        icon: "🍎"
    },
    {
        id: 6,
        title: "Cholesterol Control",
        description: "Heart-healthy plans to manage lipids naturally.",
        icon: "❤️"
    }
];

const HealthGoals = () => {
    return (
        <section className="py-12 bg-cream-50 overflow-hidden relative">
            <div className="container-fluid">
                <div className="text-center mb-10">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-forest-500 font-bold uppercase tracking-[0.4em] text-[8px] block mb-2"
                    >
                        Targeted Wellness
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl font-serif text-forest-950 mb-4 tracking-tight"
                    >
                        Achieve Your <span className="italic text-forest-500">Peak Vitality</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 40 }}
                        className="h-1 bg-forest-400 mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {goals.map((goal, index) => (
                        <motion.div
                            key={goal.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white border border-forest-100/50 p-6 rounded-[1.5rem] hover:shadow-lg transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-forest-50 rounded-bl-[2rem] -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-forest-500 group-hover:text-white transition-all duration-500 shadow-sm">
                                    {goal.icon}
                                </div>
                                <h3 className="text-lg font-serif font-bold text-forest-950 mb-2 group-hover:text-forest-600 transition-colors">
                                    {goal.title}
                                </h3>
                                <p className="text-forest-700/70 leading-relaxed font-light text-[13px] mb-4">
                                    {goal.description}
                                </p>
                                <div className="pt-3 border-t border-forest-50 flex justify-between items-center group-hover:border-forest-100 transition-colors">
                                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-forest-400 group-hover:text-forest-600 transition-colors">
                                        View Protocol
                                    </span>
                                    <motion.span
                                        animate={{ x: [0, 3, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="text-forest-500 font-black text-xs"
                                    >
                                        →
                                    </motion.span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default HealthGoals;
