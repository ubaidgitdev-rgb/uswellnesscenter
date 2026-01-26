import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(blogPosts);

    useEffect(() => {
        const results = blogPosts.filter(post =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPosts(results);
    }, [searchTerm]);

    return (
        <div className="bg-cream-50 min-h-screen">
            <header className="bg-forest-900 pt-40 pb-24 text-center px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto relative z-10"
                >
                    <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4 block">The Journal</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-cream-50 mb-6 leading-tight">
                        Science of <span className="italic text-sage-300">Living Well</span>
                    </h1>
                    <p className="text-xl text-forest-200 max-w-2xl mx-auto font-light leading-relaxed">
                        Deep dives into metabolic health, nutrition science, and sustainable lifestyle design.
                    </p>
                </motion.div>
            </header>

            <div className="container-fluid py-24">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 border-b border-forest-100 pb-8">
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-forest-900">Latest Articles</h2>
                        <p className="text-forest-600 mt-2">Explore our latest research and protocols.</p>
                    </div>
                    <div className="flex items-center gap-4 w-full lg:w-auto">
                        <div className="relative w-full lg:w-80">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-white border border-forest-100 rounded-full px-8 py-4 w-full focus:outline-none focus:ring-4 focus:ring-gold-500/10 transition-all font-medium text-forest-900"
                            />
                        </div>
                        <button className="bg-forest-900 text-gold-500 p-4 rounded-full shadow-lg hover:bg-forest-800 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {filteredPosts.map((post, i) => (
                        <motion.div
                            key={post._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <Link to={`/blog/${post._id}`} className="block">
                                <div className="relative aspect-[16/10] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                                    <img src={post.imageUrl} alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/20 transition-colors duration-500" />
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-1.5 bg-cream-50 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-100">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-forest-900 mb-4 group-hover:text-gold-600 transition-colors line-clamp-2 leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-forest-600 mb-8 line-clamp-3 leading-relaxed font-light">
                                    {post.description}
                                </p>
                                <div className="flex items-center gap-4 border-t border-forest-50 pt-6">
                                    <img src={post.authorImage} alt={post.author} className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all" />
                                    <div className="text-sm">
                                        <p className="font-bold text-forest-900">{post.author}</p>
                                        <p className="text-forest-400 font-medium">{post.date}</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-32 bg-forest-50/30 rounded-2xl border-2 border-dashed border-forest-100">
                        <p className="text-2xl font-serif font-bold text-forest-400">No articles found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
