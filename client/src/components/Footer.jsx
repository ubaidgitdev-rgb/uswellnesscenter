import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-forest-500 pt-24 pb-12 text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="container-fluid">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                    <div className="lg:col-span-4">
                        <Link to="/" className="text-3xl font-serif font-bold text-white flex items-center gap-1 mb-8">
                            USWellnessCenter<span className="text-forest-200">.</span>
                        </Link>
                        <p className="text-forest-50 text-lg leading-relaxed mb-8 max-w-sm">
                            Combining ancient wisdom with modern science to help you build a sustainable foundation for optimal health.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-white font-black mb-8 text-xs uppercase tracking-[0.2em] opacity-80">Explore</h3>
                        <ul className="space-y-4">
                            <li><Link to="/products" className="hover:text-forest-100 transition-colors font-medium">Shop</Link></li>
                            <li><Link to="/services" className="hover:text-forest-100 transition-colors font-medium">Services</Link></li>
                            <li><Link to="/blog" className="hover:text-forest-100 transition-colors font-medium">Journal</Link></li>
                            <li><Link to="/about" className="hover:text-forest-100 transition-colors font-medium">Our Story</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-white font-black mb-8 text-xs uppercase tracking-[0.2em] opacity-80">Support</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-forest-100 transition-colors font-medium">Start Guide</a></li>
                            <li><a href="#" className="hover:text-forest-100 transition-colors font-medium">FAQ</a></li>
                            <li><Link to="/contact" className="hover:text-forest-100 transition-colors font-medium">Contact Us</Link></li>
                            <li><a href="#" className="hover:text-forest-100 transition-colors font-medium">Members</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <h3 className="text-white font-black mb-6 text-xs uppercase tracking-[0.2em] opacity-80">Weekly Insights</h3>
                        <p className="text-forest-50 mb-6 font-light">Curated nutrition tips and recipes delivered to your inbox every Sunday.</p>
                        <form className="flex flex-col gap-3">
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/50 w-full placeholder-forest-200/50"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-forest-500 font-black uppercase tracking-widest text-[10px] px-6 py-3 rounded-xl hover:bg-forest-50 transition-colors shrink-0"
                                >
                                    Join
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-forest-100/60">
                    <p>
                        Developed by <span className="text-white font-bold opacity-100">USWellness Team</span>
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
