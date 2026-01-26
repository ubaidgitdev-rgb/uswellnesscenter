import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Weight Loss",
        description: "Scientific approaches to healthy weight reduction without compromising nutrition.",
        icon: "⚖️",
        color: "bg-forest-100"
    },
    {
        title: "Weight Gain",
        description: "Strategic muscle building and healthy mass gain programs for all body types.",
        icon: "💪",
        color: "bg-sage-100"
    },
    {
        title: "Healthy Lifestyle",
        description: "Transform your daily habits for long-term health, energy, and mental clarity.",
        icon: "✨",
        color: "bg-forest-100"
    },
    {
        title: "Healthy Ageing",
        description: "Specialized nutrition for seniors to maintain vitality, bone health, and cognitive function.",
        icon: "🌿",
        color: "bg-sage-100"
    },
    {
        title: "Ageing Control",
        description: "Anti-aging nutritional strategies to slow down biological aging processes.",
        icon: "⏳",
        color: "bg-forest-100"
    },
    {
        title: "Child Nutrition",
        description: "Ensuring your children get the right macronutrients for growth and brain development.",
        icon: "👶",
        color: "bg-sage-100"
    },
    {
        title: "Exercise Programs",
        description: "Tailored movement routines that complement your nutritional plan.",
        icon: "🧘",
        color: "bg-forest-100"
    },
    {
        title: "Supplement Packages",
        description: "Premium curated supplements to fill nutritional gaps in your diet.",
        icon: "💊",
        color: "bg-sage-100"
    }
];

const Services = () => {
    return (
        <div className="bg-cream-50 min-h-screen">
            {/* Header */}
            <header className="relative py-40 px-4 text-center bg-forest-900 text-cream-50 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&q=80&w=2000"
                        alt="Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-forest-900/80" />
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-4xl mx-auto relative z-10"
                >
                    <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Expertise</span>
                    <h1 className="text-5xl md:text-7xl font-serif mb-8">Holistic Wellness Services</h1>
                    <p className="text-xl text-forest-200 font-light max-w-2xl mx-auto leading-relaxed">
                        We provide comprehensive nutritional and lifestyle solutions tailored to your unique biological needs.
                    </p>
                </motion.div>
            </header>

            {/* Grid */}
            <section className="py-24 px-4 sm:px-8 lg:px-16 xl:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-[2.5rem] shadow-premium border border-forest-50 flex flex-col items-center text-center group"
                        >
                            <div className={`w-20 h-20 ${service.color} rounded-full flex items-center justify-center text-4xl mb-6 transition-transform duration-500 group-hover:rotate-12`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-serif text-forest-900 mb-4">{service.title}</h3>
                            <p className="text-forest-600 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <button className="mt-auto text-forest-500 font-bold text-xs uppercase tracking-widest hover:text-forest-700 transition-colors">
                                Learn More →
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-24 bg-white">
                <div className="container-fluid grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-forest-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sage-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                        <img
                            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000"
                            alt="Healthy Approach"
                            className="relative z-10 rounded-[3rem] shadow-2xl"
                        />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-serif text-forest-900 leading-tight">Our Scientific Approach to Health and Wealth.</h2>
                        <p className="text-lg text-forest-700 font-light leading-relaxed">
                            At Wellness Coach, we believe that health is the foundation of true wealth. Our programs are designed not just to fix symptoms, but to optimize your entire biological system.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Personalized DNA-based Nutrition",
                                "Continuous Metabolic Monitoring",
                                "Integrative Lifestyle Coaching",
                                "Premium Supplement Integration"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-forest-800 font-medium">
                                    <span className="w-6 h-6 bg-forest-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
