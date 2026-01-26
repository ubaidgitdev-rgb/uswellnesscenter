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
        <section className="py-32 bg-cream-50 overflow-hidden">
            <div className="container-fluid">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gold-600 font-bold uppercase tracking-[0.4em] text-[10px] block mb-4"
                    >
                        Targeted Wellness
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif text-forest-950 mb-8 tracking-tighter"
                    >
                        Achieve Your <span className="italic text-forest-600">Peak Vitality</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        className="h-1 bg-gold-500 mx-auto"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {goals.map((goal, index) => (
                        <motion.div
                            key={goal.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -15 }}
                            className="group glass p-10 rounded-[30px] border-white/40 hover:border-gold-500/20 transition-all duration-500"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-sage-50 flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:bg-forest-950 group-hover:rotate-6 transition-all duration-500 shadow-sm group-hover:shadow-xl">
                                {goal.icon}
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-forest-950 mb-4 group-hover:text-forest-700 transition-colors">
                                {goal.title}
                            </h3>
                            <p className="text-forest-700/80 leading-relaxed font-light text-lg mb-8">
                                {goal.description}
                            </p>
                            <div className="pt-6 border-t border-forest-100 flex justify-between items-center group-hover:border-gold-500/20 transition-colors">
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-forest-950">
                                    Explore Protocol
                                </span>
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="text-gold-600 font-black"
                                >
                                    →
                                </motion.span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default HealthGoals;
