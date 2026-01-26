import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Is this approach suitable for vegans/vegetarians?",
        answer: "Absolutely. Our nutrition protocols are biology-first, meaning we adapt to your ethical and dietary choices while ensuring you get the complete amino acid and micronutrient profile your body needs."
    },
    {
        question: "Do I need to count calories?",
        answer: "We believe in intuitive structure over rigid counting. While we track macros initially to establish a baseline, our goal is to teach you to eat intuitively so you're not chained to an app forever."
    },
    {
        question: "How quickly will I see results?",
        answer: "Most members report improved energy and digestion within the first 7 days. Physical composition changes typically become noticeable around weeks 3-4 as your metabolism adapts."
    },
    {
        question: "Can I work with a dedicated coach?",
        answer: "Yes! Our Premium and Elite tiers include 1:1 access to a certified nutritionist who provides weekly check-ins, plan adjustments, and real-time support."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-32 bg-cream-50 overflow-hidden relative">
            <div className="container-fluid max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gold-600 font-bold uppercase tracking-[0.4em] text-[10px] block mb-4"
                    >
                        Intellectual Base
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif text-forest-950 mb-6 tracking-tighter"
                    >
                        Common <span className="italic text-forest-600">Inquiries.</span>
                    </motion.h2>
                    <div className="h-1 w-20 bg-gold-500 mx-auto" />
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass rounded-[30px] border-white/40 overflow-hidden transition-all duration-500 ${activeIndex === index ? 'shadow-premium border-gold-500/20' : ''}`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full text-left p-8 flex justify-between items-center focus:outline-none"
                            >
                                <span className={`text-xl md:text-2xl font-serif font-bold transition-colors duration-300 ${activeIndex === index ? 'text-forest-950' : 'text-forest-800'}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-forest-100 transition-all duration-500 ${activeIndex === index ? 'bg-forest-950 border-forest-950 rotate-45' : ''}`}>
                                    <span className={`text-2xl transition-colors ${activeIndex === index ? 'text-white' : 'text-forest-400'}`}>
                                        +
                                    </span>
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className="px-8 pb-8">
                                            <div className="h-px bg-forest-100/50 mb-8" />
                                            <p className="text-forest-700 leading-relaxed text-lg font-light">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-forest-100/30 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};


export default FAQ;
