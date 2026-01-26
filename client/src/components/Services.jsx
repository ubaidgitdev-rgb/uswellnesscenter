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
        <section className="py-16 bg-cream-50 overflow-hidden" id="services">
            <div className="container-fluid">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-gold-600 font-bold uppercase tracking-[0.3em] text-xs block mb-4 px-1 border-l-2 border-gold-500"
                        >
                            Our Expertise
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-serif text-forest-950 leading-[0.9] tracking-tighter"
                        >
                            The Science of <span className="italic text-forest-600">Human Optimization</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-forest-700 max-w-sm text-base font-light leading-relaxed mb-2"
                    >
                        We combine ancestral wisdom with cutting-edge metabolic research to decode your unique biological blueprint.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="group relative glass p-8 overflow-hidden"
                        >
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-sage-50 rounded-full group-hover:scale-150 transition-transform duration-700 -z-10 opacity-50" />

                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="text-4xl mb-8 block"
                            >
                                {service.icon}
                            </motion.div>

                            <h3 className="text-2xl font-serif font-bold text-forest-950 mb-4 group-hover:text-forest-700 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-forest-700 mb-8 leading-relaxed font-light text-base">
                                {service.description}
                            </p>
                            <a href={service.link} className="inline-flex items-center text-forest-950 font-black uppercase tracking-widest text-[10px] group-hover:gap-4 gap-2 transition-all">
                                <span className="border-b-2 border-gold-500/30 group-hover:border-gold-500">View Protocol</span>
                                <span className="text-gold-600">→</span>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Our Process Section - Completely Redesigned */}
                <div className="relative rounded-[30px] bg-forest-950 text-cream-50 p-10 lg:p-16 overflow-hidden border border-white/5">
                    {/* Background Decorative */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=2000"
                            alt="Nutrition Background"
                            className="w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/80 to-transparent" />
                    </div>

                    <div className="relative z-10">
                        <div className="text-center mb-16">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-gold-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block"
                            >
                                Protocol Workflow
                            </motion.span>
                            <h2 className="text-3xl md:text-5xl font-serif">A <span className="italic text-gold-500 italic">Continuous</span> Feedback Loop</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-white/10 -z-0" />

                            {[
                                { step: "01", title: "Assessment", desc: "Data-driven analysis of your biomarkers and lifestyle via clinical testing." },
                                { step: "02", title: "Strategy", desc: "Dynamic nutrition modeling tailored to your unique metabolic signature." },
                                { step: "03", title: "Integration", desc: "Seamless implementation with personalized coaching and real-time adjustments." },
                                { step: "04", title: "Scaling", desc: "Ongoing optimization to ensure long-term metabolic flexibility and vigor." }
                            ].map((p, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.3 }}
                                    className="relative flex flex-col items-center md:items-start text-center md:text-left"
                                >
                                    <div className="w-20 h-20 rounded-full glass flex items-center justify-center text-gold-500 font-serif text-2xl font-bold mb-8 border-white/10 shadow-2xl relative z-10 group-hover:border-gold-500 transition-colors">
                                        {p.step}
                                        <div className="absolute inset-0 rounded-full bg-gold-500/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
                                    </div>
                                    <h4 className="text-xl font-serif font-bold mb-3">{p.title}</h4>
                                    <p className="text-forest-200/70 text-sm leading-relaxed font-light">{p.desc}</p>
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
