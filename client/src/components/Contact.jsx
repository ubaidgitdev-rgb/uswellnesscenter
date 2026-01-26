import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
        alert("Thank you for reaching out! We will get back to you shortly.");
    };

    return (
        <section id="contact" className="py-24 bg-forest-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <div className="container-fluid relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    <div>
                        <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4 block">Get in Touch</span>
                        <h2 className="text-5xl md:text-6xl font-serif text-cream-50 mb-8 leading-tight">
                            Start Your <br /><span className="italic text-sage-300">Transformation</span>
                        </h2>
                        <p className="text-forest-200 text-lg mb-12 font-light leading-relaxed">
                            Have questions about our protocols? Interested in 1-on-1 coaching? Our team is ready to guide you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-forest-800 text-gold-500 rounded-sm">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-cream-50 font-serif text-xl mb-1">Email Us</h4>
                                    <p className="text-forest-300">hello@uswellnesscenter.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-forest-800 text-gold-500 rounded-sm">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-cream-50 font-serif text-xl mb-1">Call Us</h4>
                                    <p className="text-forest-300">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-cream-50 p-10 lg:p-12 shadow-2xl">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-forest-900 uppercase tracking-widest mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-cream-100 border-none p-4 text-forest-900 focus:ring-2 focus:ring-gold-500"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-forest-900 uppercase tracking-widest mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-cream-100 border-none p-4 text-forest-900 focus:ring-2 focus:ring-gold-500"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-forest-900 uppercase tracking-widest mb-2">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-cream-100 border-none p-4 text-forest-900 focus:ring-2 focus:ring-gold-500"
                                    placeholder="Tell us about your goals..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-forest-900 text-gold-500 font-bold uppercase tracking-widest hover:bg-forest-800 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
