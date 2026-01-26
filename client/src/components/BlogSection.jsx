import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';

const BlogSection = () => {
    // Only show top 3 on home page
    const posts = blogPosts.slice(0, 3);

    return (
        <section className="py-32 bg-cream-50 overflow-hidden">
            <div className="container-fluid">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-10 bg-gold-500" />
                            <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs">
                                Knowledge Base
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-serif text-forest-950 leading-[1.1]">
                            The <span className="italic text-sage-600">Science</span> of Wellness
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/blog">
                            <button className="group flex items-center gap-4 text-forest-900 font-bold uppercase tracking-widest text-xs border-b-2 border-gold-500 pb-2 hover:text-gold-600 transition-colors">
                                Explore all articles
                                <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </button>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <Link to={`/blog/${post._id}`} className="block h-full">
                                <div className="relative aspect-[4/5] overflow-hidden mb-8 rounded-2xl shadow-xl shadow-forest-900/5">
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-60" />
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-1.5 bg-cream-50/90 backdrop-blur-md text-forest-900 text-[10px] font-black uppercase tracking-widest rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-serif text-forest-900 mb-4 group-hover:text-gold-600 transition-colors line-clamp-2 leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-forest-600/80 font-light mb-8 line-clamp-3 leading-relaxed">
                                    {post.description}
                                </p>
                                <div className="flex items-center gap-4 border-t border-forest-100 pt-6">
                                    <img
                                        src={post.authorImage}
                                        alt={post.author}
                                        className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ring-2 ring-gold-500/0 group-hover:ring-gold-500/50"
                                    />
                                    <div>
                                        <p className="text-xs font-bold text-forest-900 uppercase tracking-tighter">{post.author}</p>
                                        <p className="text-[10px] text-forest-400 font-medium uppercase tracking-widest mt-0.5">{post.date}</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
