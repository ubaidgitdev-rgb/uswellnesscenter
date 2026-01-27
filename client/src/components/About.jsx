import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="bg-cream-50">
            {/* About Hero */}
            <div className="bg-forest-900 py-24 lg:py-32 relative overflow-hidden">
                {/* Abstract Shapes/Background */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-forest-800 rounded-l-full opacity-20 transform translate-x-1/3"></div>

                <div className="container-fluid relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4 block">Our Philosophy</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-cream-50 mb-8 leading-tight">
                            Redefining <span className="italic text-sage-300">Nourishment</span>
                        </h1>
                        <p className="text-xl text-forest-200 font-light leading-relaxed">
                            We believe that true health isn't about restriction. It's about abundance, bio-individuality, and understanding the profound language of your own body.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-24 container-fluid">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] bg-forest-200 rounded-sm overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1000&auto=format&fit=crop" alt="Founder" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-sage-100 -z-10 rounded-full opacity-50"></div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-forest-900 mb-6">Founded on Science,<br />Driven by Result.</h2>
                        <div className="space-y-6 text-forest-700 leading-relaxed mb-12">
                            <p>
                                USWellnessCenter started with a simple question: Why is nutrition so confusing? We stripped away the fads to focus on metabolic flexibility and gut health.
                            </p>
                            <p>
                                Our approach combines clinical data with holistic wisdom. We don't just count calories; we count chemicals, hormones, and happiness.
                            </p>
                        </div>

                        {/* Core Values */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-forest-100">
                            {[
                                { title: "Transparency", desc: "No hidden ingredients, no pseudoscience. Just clinical data." },
                                { title: "Bio-Individuality", desc: "One man's meat is another's poison. We customize for YOU." }
                            ].map((value, i) => (
                                <div key={i}>
                                    <h4 className="text-lg font-serif font-bold text-forest-900 mb-2">{value.title}</h4>
                                    <p className="text-sm text-forest-600 leading-relaxed">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
