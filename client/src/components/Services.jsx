import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Metabolic Analysis",
        description: "We analyze your unique metabolic rate and hormonal profile to build a nutrition plan that works with your biology, not against it.",
        icon: "🧬",
        link: "#"
    },
    {
        title: "Gut Health Restoration",
        description: "A comprehensive protocol to heal your microbiome, improve digestion, and boost immunity through targeted nutrition.",
        icon: "🌿",
        link: "#"
    },
    {
        title: "Cognitive Performance",
        description: "Nutrition strategies designed to enhance focus, memory, and mental clarity for high-functioning individuals.",
        icon: "🧠",
        link: "#"
    }
];

const Services = () => {
    return (
        <section className="py-8 bg-cream-50 overflow-hidden" id="services">
            <div className="container-fluid">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-8 gap-6">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-forest-500 font-bold uppercase tracking-[0.3em] text-[8px] block mb-2 px-1 border-l-2 border-forest-400"
                        >
                            Our Expertise
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-2xl md:text-4xl font-serif text-forest-950 leading-tight tracking-tight"
                        >
                            The Science of <span className="italic text-forest-500">Human Optimization</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white border border-forest-100/30 p-6 rounded-[1.5rem] overflow-hidden hover:shadow-md transition-all"
                        >
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-forest-50 rounded-full group-hover:scale-150 transition-transform duration-700 -z-10 opacity-50" />

                            <div className="text-3xl mb-4 block">
                                {service.icon}
                            </div>

                            <h3 className="text-lg font-serif font-bold text-forest-950 mb-2 group-hover:text-forest-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-forest-700/80 mb-4 leading-relaxed font-light text-[13px]">
                                {service.description}
                            </p>
                            <a href={service.link} className="inline-flex items-center text-forest-950 font-black uppercase tracking-widest text-[8px] group-hover:gap-3 gap-2 transition-all">
                                <span className="border-b border-forest-200 group-hover:border-forest-500">View Protocol</span>
                                <span className="text-forest-500">→</span>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Our Process Section - Very Compact */}
                <div className="relative rounded-[2rem] bg-forest-500 text-white p-8 lg:p-12 overflow-hidden border border-white/20 shadow-premium">
                    {/* Background Decorative */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=2000"
                            alt="Nutrition Background"
                            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-forest-600/50 via-transparent to-transparent" />
                    </div>

                    <div className="relative z-10">
                        <div className="text-center mb-10">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-white font-black uppercase tracking-[0.5em] text-[8px] mb-2 block drop-shadow-sm opacity-80"
                            >
                                Protocol Workflow
                            </motion.span>
                            <h2 className="text-2xl md:text-4xl font-serif drop-shadow-md">A <span className="italic text-forest-200">Continuous</span> Loop</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-white/10 -z-0" />

                            {[
                                { step: "01", title: "Assessment", desc: "Data-driven biomarker analysis." },
                                { step: "02", title: "Strategy", desc: "Tailored metabolic modeling." },
                                { step: "03", title: "Integration", desc: "Personalized coaching support." },
                                { step: "04", title: "Scaling", desc: "Long-term vigor optimization." }
                            ].map((p, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative flex flex-col items-center md:items-start text-center md:text-left group"
                                >
                                    <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white font-serif text-xl font-bold mb-4 border border-white/20 shadow-xl relative z-10 group-hover:bg-white group-hover:text-forest-600 transition-all duration-500">
                                        {p.step}
                                    </div>
                                    <h4 className="text-base font-serif font-bold mb-1">{p.title}</h4>
                                    <p className="text-forest-50 text-[12px] leading-relaxed font-light">{p.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Services;
