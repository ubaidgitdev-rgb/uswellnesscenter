import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import HealthGoals from '../components/HealthGoals';
import TrustTicker from '../components/TrustTicker';
import Services from '../components/Services';
import CoachesAndBenefits from '../components/CoachesAndBenefits';
import NutritionDeepDive from '../components/NutritionDeepDive';
import ProductSection from '../components/ProductSection';
import CommunityFeed from '../components/CommunityFeed';
import BlogSection from '../components/BlogSection';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
    const { user, isAuthenticated } = useContext(AuthContext);

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="bg-cream-50 overflow-hidden">
            {/* Personalized Welcome Banner */}
            {isAuthenticated && (
                <motion.div
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    className="bg-forest-900 border-b border-forest-800 text-cream-50 py-3 relative z-40"
                >
                    <div className="container-fluid flex justify-between items-center text-sm">
                        <span className="font-serif italic font-medium">Welcome back, {user?.name}</span>
                        <motion.span
                            whileHover={{ scale: 1.05, x: 5 }}
                            className="text-forest-400 font-bold uppercase tracking-widest text-xs cursor-pointer hover:text-white transition-colors"
                        >
                            Go to Dashboard →
                        </motion.span>
                    </div>
                </motion.div>
            )}

            <Hero />

            <div className="space-y-12 pb-12">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                    <HealthGoals />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                    <TrustTicker />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                    <Services />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                    <CoachesAndBenefits />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                    <NutritionDeepDive />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                    <ProductSection />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                    <CommunityFeed />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                    <BlogSection />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                    <FAQ />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                    <CTABanner />
                </motion.div>
            </div>

        </div>
    );
};


export default Home;
