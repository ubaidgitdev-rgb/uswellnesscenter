import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductSection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3500/api/products');
                setProducts(response.data.slice(0, 3));
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    const displayProducts = products.length > 0 ? products : [
        { _id: '1', name: 'Artisan Green Tea Protocol', image: 'https://images.unsplash.com/photo-1544787210-22e3955ad53e?auto=format&fit=crop&q=80&w=800' },
        { _id: '2', name: 'Metabolic Nutrition Framework', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800' },
        { _id: '3', name: 'Premium Wellness Package', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800' }
    ];

    return (
        <section className="py-12 bg-forest-950 text-cream-50 overflow-hidden relative">
            <div className="container-fluid">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-forest-400 font-bold uppercase tracking-[0.4em] text-[8px] block mb-4 px-1 border-l-2 border-forest-400"
                        >
                            Curated Protocols
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-serif text-cream-50 leading-tight tracking-tight"
                        >
                            Tools for <span className="italic text-forest-300">Transformation</span>
                        </motion.h2>
                    </div>
                    <Link to="/products">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-6 py-3 border border-white/20 text-cream-50 text-[9px] font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-forest-950 transition-all backdrop-blur-sm"
                        >
                            Explore All
                        </motion.button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayProducts.map((product, index) => (
                        <motion.div
                            key={product._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.8 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden aspect-[3/4] rounded-[1.5rem] bg-forest-900 mb-4 border border-white/5">
                                <motion.img
                                    src={product.image || 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80'}
                                    alt={product.name}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <button className="w-full py-3 bg-white text-forest-950 font-black uppercase tracking-widest text-[8px] rounded-full hover:bg-forest-400 hover:text-forest-950 transition-all shadow-2xl">
                                        View Details
                                    </button>
                                </div>
                            </div>
                            <div className="px-2">
                                <h3 className="text-xl font-serif font-bold text-cream-50 mb-2 group-hover:text-forest-400 transition-colors leading-tight">
                                    {product.name}
                                </h3>
                                <div className="flex items-center gap-3">
                                    <span className="text-forest-400 font-black tracking-widest text-[8px] uppercase">Premium</span>
                                    <div className="h-px flex-1 bg-white/10" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
