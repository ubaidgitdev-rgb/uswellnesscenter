import React, { useState } from 'react';
import api from '../api/axios';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', msg: '' });

    const { name, email, subject, message } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await api.post('/contact', formData);
            setStatus({ type: 'success', msg: 'Message sent successfully! We will get back to you soon.' });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (err) {
            setStatus({ type: 'error', msg: 'Failed to send message. Please try again.' });
        }
    };

    return (
        <div className="bg-cream-50 min-h-screen">
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000"
                        alt="Contact Us"
                        className="w-full h-full object-cover grayscale brightness-50"
                    />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif mb-4"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1 w-32 bg-forest-500 mx-auto"
                    />
                </div>
            </section>

            <section className="py-24 px-4 sm:px-8 lg:px-16 xl:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl font-serif text-forest-900 mb-6">Let's start your wellness journey today.</h2>
                            <p className="text-xl text-forest-700 font-light leading-relaxed">
                                Whether you're looking for weight management, healthy aging, or child nutrition, our experts are here to guide you.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-forest-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-forest-900 font-bold mb-2">Our Office</h4>
                                    <p className="text-forest-600 text-sm leading-relaxed">
                                        Tamilnadu, Hosur, Krishnagiri,<br />
                                        Opp CSI Church,<br />
                                        Near Kavery Hospital.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-forest-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-forest-900 font-bold mb-2">Email Us</h4>
                                    <p className="text-forest-600 text-sm">hello@wellwellnesscoach.com</p>
                                    <p className="text-forest-600 text-sm">support@wellwellnesscoach.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map or Image Placeholder */}
                        <div className="rounded-3xl overflow-hidden shadow-premium h-80 bg-forest-100 relative group">
                            <img
                                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1000"
                                alt="Location"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-forest-900/20 group-hover:bg-forest-900/10 transition-colors" />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl p-10 shadow-premium border border-forest-50">
                        <h3 className="text-3xl font-serif text-forest-900 mb-8">Send us a message</h3>
                        {status.msg && (
                            <div className={`mb-6 p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {status.msg}
                            </div>
                        )}
                        <form onSubmit={onSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-forest-500 ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={onChange}
                                        required
                                        className="w-full bg-forest-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-forest-500 transition-all outline-none"
                                        placeholder="Ubaidullah"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-forest-500 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={onChange}
                                        required
                                        className="w-full bg-forest-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-forest-500 transition-all outline-none"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-forest-500 ml-1">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={subject}
                                    onChange={onChange}
                                    required
                                    className="w-full bg-forest-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-forest-500 transition-all outline-none"
                                    placeholder="Weight Management Inquiry"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-forest-500 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    value={message}
                                    onChange={onChange}
                                    required
                                    rows="5"
                                    className="w-full bg-forest-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-forest-500 transition-all outline-none resize-none"
                                    placeholder="Tell us about your health goals..."
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-forest-500 text-white font-bold py-5 rounded-xl shadow-xl hover:bg-forest-600 transition-all duration-300"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
