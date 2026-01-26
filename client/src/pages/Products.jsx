import React, { useState, useEffect } from 'react';
import api from '../api/axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    const displayProducts = products.length > 0 ? products : [
        { _id: '1', name: 'Artisan Green Tea Protocol', image: 'https://images.unsplash.com/photo-1627435601357-3f6c144575d4?auto=format&fit=crop&q=80&w=800' },
        { _id: '2', name: 'Metabolic Nutrition Framework', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800' },
        { _id: '3', name: 'Premium Wellness Package', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800' }
    ];
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await api.get('/products');
                setProducts(res.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching products:', err);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cream-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-500"></div>
            </div>
        );
    }

    return (
        <div className="bg-cream-50 min-h-screen">
            <div className="bg-forest-900 pt-40 pb-20 text-center px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-forest-800 rounded-l-full opacity-10 transform translate-x-1/2"></div>
                <div className="relative z-10">
                    <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4 block">Essentials</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-cream-50 mb-6 leading-tight">Curated <span className="italic text-sage-300">Wellness</span></h1>
                    <p className="text-forest-200 text-lg max-w-2xl mx-auto font-light leading-relaxed">Science-backed tools for your metabolic journey, vetted by our clinical team.</p>
                </div>
            </div>
            <div className="container-fluid py-24">
                <div className="flex justify-between items-end mb-16 border-b border-forest-100 pb-8">
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-forest-900">The Collection</h2>
                        <p className="text-forest-600 mt-2">Optimize your biology with precision-engineered products.</p>
                    </div>
                    {products.length === 0 && (
                        <button
                            onClick={async () => {
                                await api.post('/products/seed');
                                window.location.reload();
                            }}
                            className="bg-forest-100 text-forest-800 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-forest-200 transition-all"
                        >
                            Seed Data
                        </button>
                    )}
                </div>

                <div className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 gap-x-12 lg:grid-cols-3 xl:grid-cols-3">
                    {displayProducts.map((product) => (
                        <div key={product._id} className="group cursor-pointer">
                            <div className="relative aspect-[4/5] bg-white overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500">
                                <img
                                    src={product.image || product.imageSrc}
                                    alt={product.name}
                                    className="w-full h-full object-center object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/10 transition-colors duration-500"></div>
                            </div>
                            <div className="mt-8 flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-serif font-bold text-forest-900 mb-1">{product.name}</h3>
                                    <span className="text-gold-600 text-[10px] font-black uppercase tracking-widest">Premium Protocol</span>
                                </div>
                                <button className="bg-forest-900 text-cream-50 p-3 rounded-full hover:bg-gold-500 transition-colors shadow-lg">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {products.length === 0 && (
                    <div className="text-center py-20 bg-forest-50/50 rounded-lg border border-dashed border-forest-200">
                        <p className="text-forest-600 font-serif text-xl italic">Our collection is currently being curated.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
