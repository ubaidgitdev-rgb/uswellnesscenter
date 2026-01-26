import React from 'react';
import { motion } from 'framer-motion';

const posts = [
    {
        id: 1,
        image: "/science.png",
        handle: "@sarah_wellness",
        caption: "Week 4 on the protocol and the energy shift is undeniable. 🌱 #wellnutrition"
    },
    {
        id: 2,
        image: "/hero.png",
        handle: "@mark_fits",
        caption: "Finally understanding how to fuel my workouts properly. Game changer."
    },
    {
        id: 3,
        image: "/about-story.png",
        handle: "@eatclean_daily",
        caption: " Meal prep Sunday made easy with the new guide! 🥗"
    },
    {
        id: 4,
        image: "/coach-elena.png",
        handle: "@mindful_eating",
        caption: "Breaking up with diet culture, one balanced plate at a time."
    }
];

const CommunityFeed = () => {
    return (
        <section className="py-32 bg-cream-50 overflow-hidden">
            <div className="container-fluid">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-gold-600 font-bold uppercase tracking-[0.3em] text-[10px] block mb-6 px-1 border-l-2 border-gold-500"
                        >
                            The Collective
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-serif text-forest-950 leading-[0.9] tracking-tighter"
                        >
                            Real Stories. <span className="italic text-forest-600">Profound Change.</span>
                        </motion.h2>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-10 py-5 bg-forest-950 text-cream-50 text-xs font-black uppercase tracking-widest rounded-full shadow-2xl shadow-forest-950/20"
                    >
                        Join The Movement
                    </motion.button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            whileHover={{ y: -15 }}
                            className="group relative aspect-[4/5] overflow-hidden rounded-[30px] bg-forest-100 cursor-pointer shadow-premium"
                        >
                            <img
                                src={post.image}
                                alt={post.caption}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Sophisticated Glow Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <span className="text-gold-500 font-black tracking-widest text-[10px] uppercase mb-4 block">
                                    Verified Client
                                </span>
                                <p className="text-cream-50 text-sm leading-relaxed font-light line-clamp-3">
                                    "{post.caption}"
                                </p>
                                <div className="mt-6 flex items-center gap-3">
                                    <div className="h-px flex-1 bg-white/20" />
                                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Verified Result</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default CommunityFeed;
