import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-forest-950 pt-24 pb-12 text-forest-200" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="container-fluid">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                    <div className="lg:col-span-4">
                        <Link to="/" className="text-3xl font-serif font-bold text-cream-50 flex items-center gap-1 mb-8">
                            USWellnessCenter<span className="text-gold-500">.</span>
                        </Link>
                        <p className="text-forest-300 text-lg leading-relaxed mb-8 max-w-sm">
                            Combining ancient wisdom with modern science to help you build a sustainable foundation for optimal health.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-cream-50 font-bold mb-8 text-sm uppercase tracking-widest text-[#d4af37]">Explore</h3>
                        <ul className="space-y-4">
                            <li><Link to="/products" className="hover:text-cream-50 transition-colors">Shop</Link></li>
                            <li><Link to="/services" className="hover:text-cream-50 transition-colors">Services</Link></li>
                            <li><Link to="/blog" className="hover:text-cream-50 transition-colors">Journal</Link></li>
                            <li><Link to="/about" className="hover:text-cream-50 transition-colors">Our Story</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-cream-50 font-bold mb-8 text-sm uppercase tracking-widest text-[#d4af37]">Support</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-cream-50 transition-colors">Start Guide</a></li>
                            <li><a href="#" className="hover:text-cream-50 transition-colors">FAQ</a></li>
                            <li><Link to="/contact" className="hover:text-cream-50 transition-colors">Contact Us</Link></li>
                            <li><a href="#" className="hover:text-cream-50 transition-colors">Members</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <h3 className="text-cream-50 font-bold mb-6 text-sm uppercase tracking-widest text-[#d4af37]">Weekly Insights</h3>
                        <p className="text-forest-300 mb-6">Curated nutrition tips and recipes delivered to your inbox every Sunday.</p>
                        <form className="flex flex-col gap-3">
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="bg-forest-900 border border-forest-800 rounded-lg px-4 py-3 text-cream-50 focus:outline-none focus:ring-1 focus:ring-gold-500 w-full placeholder-forest-700"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-gold-600 text-forest-950 font-bold px-6 py-3 rounded-lg hover:bg-gold-500 transition-colors shrink-0"
                                >
                                    Join
                                </motion.button>
                            </div>
                            <p className="text-xs text-forest-500">No spam, just greens. Unsubscribe anytime.</p>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-forest-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-forest-500">
                    <p>
                        Developed by <span className="text-gold-500 font-bold">Ubaidullah</span>
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-forest-300 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-forest-300 transition-colors">Terms</a>
                        <a href="#" className="hover:text-forest-300 transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
