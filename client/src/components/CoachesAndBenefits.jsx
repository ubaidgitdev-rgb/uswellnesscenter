import React from 'react';
import { motion } from 'framer-motion';
import drLoveleena from '../assets/team/dr-loveleena.png';
import muhammadIrsyad from '../assets/team/muhammad-irsyad.png';
import drDavidHeber from '../assets/team/dr-david-heber.png';

const coaches = [
    {
        name: "Dr. Loveleena Nadir",
        role: "Chief Medical Officer",
        bio: "Veteran physician specializing in integrative metabolic health and hormone optimization with over 20 years of clinical experience.",
        image: drLoveleena
    },
    {
        name: "Muhammad Irsyad",
        role: "Digital Health Architect",
        bio: "Specialist in health informatics and performance nutrition, bridging the gap between clinical science and digital wellness solutions.",
        image: muhammadIrsyad
    },
    {
        name: "Dr. David Heber",
        role: "Chairman, Scientific Advisory Board",
        bio: "World-renowned nutritionist and author, focusing on personalized nutrition and the science of metabolic wellness.",
        image: drDavidHeber
    }
];

const CoachesAndBenefits = () => {
    return (
        <section className="py-10 bg-forest-50/50 overflow-hidden relative">
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-forest-100/50 blur-[120px] rounded-full -z-10" />

            <div className="container-fluid">
                <div className="flex flex-col lg:flex-row gap-8 items-center mb-10">
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-forest-600 font-bold uppercase tracking-[0.4em] text-[8px] block mb-3 px-2 border-l-4 border-forest-500"
                        >
                            Our Scientific Clinic
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl md:text-5xl font-serif text-forest-950 leading-tight tracking-tight mb-4"
                        >
                            World-Class <br /><span className="italic text-forest-500">Expertise.</span>
                        </motion.h2>
                        <p className="text-base text-forest-800/80 font-light leading-relaxed max-w-xl">
                            Our clinic is powered by leading scientists who transform biological data into life-changing protocols.
                        </p>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
                        {[
                            { title: 'Board Certified', desc: 'Expert medical doctors' },
                            { title: 'Clinical Precision', desc: 'Data-driven protocols' },
                            { title: 'Nutritional Science', desc: 'Advanced dietary research' },
                            { title: 'Personalized Care', desc: 'Tailored to your biology' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.05 }}
                                className="bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/40"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-forest-400 mb-2" />
                                <span className="text-forest-950 font-bold uppercase tracking-widest text-[8px] block mb-1">{item.title}</span>
                                <p className="text-forest-700 text-[10px] font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {coaches.map((coach, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-forest-100 mb-4 shadow-md">
                                <motion.img
                                    src={coach.image}
                                    alt={coach.name}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-forest-950 mb-1">{coach.name}</h3>
                            <p className="text-forest-500 text-[8px] font-black uppercase tracking-[0.2em] mb-2">{coach.role}</p>
                            <p className="text-forest-700/80 text-xs leading-relaxed font-light">{coach.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoachesAndBenefits;
