import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="bg-cream-50 min-h-screen">
            {/* Hero Section */}
            <section className="py-32 px-4 sm:px-8 lg:px-16 xl:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-forest-500 font-bold uppercase tracking-widest text-sm mb-4 block">About Wellness Coach</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-forest-900 leading-tight mb-8">
                            We don't just change diets, we <span className="text-forest-500 italic">transform lives.</span>
                        </h1>
                        <p className="text-xl text-forest-700 font-light leading-relaxed mb-8">
                            Founded by <strong>Ubaidullah</strong>, Wellness Coach is a premier nutrition and health center dedicated to holistic well-being. We combine traditional wisdom with modern nutritional science to help you achieve your peak physical and mental potential.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-3xl font-serif text-forest-900">500+</h4>
                                <p className="text-forest-600 text-sm">Success Stories</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-serif text-forest-900">10+</h4>
                                <p className="text-forest-600 text-sm">Expert Coaches</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] bg-forest-200 rounded-[4rem] overflow-hidden rotate-2 lg:rotate-6">
                            <img
                                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000"
                                alt="Coach Session"
                                className="w-full h-full object-cover -rotate-2 lg:-rotate-6 scale-110"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-premium border border-forest-100 max-w-xs hidden md:block">
                            <p className="text-forest-900 italic font-medium mb-4">"Our mission is to make healthy ageing a reality for everyone."</p>
                            <span className="text-forest-500 font-bold text-xs uppercase">— Ubaidullah</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-forest-900 text-cream-50 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-forest-800 skew-x-12 translate-x-32 z-0 opacity-20" />
                <div className="container-fluid relative z-10">
                    <div className="max-w-3xl mb-20 text-center mx-auto">
                        <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Core Philsophy</h2>
                        <p className="text-forest-200 text-lg font-light">
                            We believe in the intersection of Health and Wealth. A healthy body is the greatest asset you can ever own.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Holistic Harmony",
                                desc: "Treating the body as an interconnected system of physical and mental health."
                            },
                            {
                                title: "Nutritional Integrity",
                                desc: "Focusing on whole foods and high-quality supplements that actual work."
                            },
                            {
                                title: "Sustainable Growth",
                                desc: "Building habits that last a lifetime, not just for a season."
                            }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-8 border border-white/10 rounded-3xl backdrop-blur-sm"
                            >
                                <h3 className="text-2xl font-serif mb-4 text-gold-500">{value.title}</h3>
                                <p className="text-forest-200 text-sm leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-serif text-forest-900 leading-tight">Ready to meet your Wellness personal Coach?</h2>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-forest-500 text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl shadow-forest-500/20"
                    >
                        Join the Movement
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default About;
