import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Find post from the frontend data
        const foundPost = blogPosts.find(p => p._id === id);
        setPost(foundPost);
        setLoading(false);
        window.scrollTo(0, 0); // Scroll to top on load
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cream-50">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gold-500 border-opacity-25"></div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-cream-50 px-6">
                <h2 className="text-4xl font-serif font-bold text-forest-900 mb-4">Post Not Found</h2>
                <Link to="/blog" className="text-gold-600 font-bold hover:underline">Back to all articles</Link>
            </div>
        );
    }

    return (
        <article className="bg-cream-50 min-h-screen">
            {/* Post Hero Section */}
            <header className="relative h-[70vh] min-h-[500px] w-full flex items-end">
                <div className="absolute inset-0 z-0">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/60 to-transparent" />
                </div>

                <div className="relative z-10 w-full container-fluid pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500 text-forest-900 text-xs font-bold uppercase tracking-widest mb-6">
                            {post.category || 'Wellness'}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-cream-50 leading-tight mb-8">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-6">
                            <img src={post.authorImage || 'https://via.placeholder.com/150'} alt={post.author} className="w-14 h-14 rounded-full border-2 border-gold-500 object-cover" />
                            <div>
                                <p className="text-cream-50 font-bold text-lg">{post.author}</p>
                                <p className="text-forest-200 text-sm font-medium">{post.date} • 8 min read</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Post Content */}
            <div className="max-w-4xl mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="prose prose-xl prose-stone max-w-none text-forest-800 font-light leading-relaxed"
                >
                    <p className="text-3xl font-serif font-bold text-forest-900 mb-16 border-l-8 border-gold-500 pl-10 italic leading-snug">
                        {post.description}
                    </p>

                    <div className="whitespace-pre-wrap space-y-12 text-lg lg:text-xl">
                        {post.content}
                        <p>
                            Nutrition is more than just counting calories; it's about providing your body with the essential building blocks it needs to function at peak capacity. Whether you're an athlete looking for an edge or someone simply trying to feel better day-to-day, understanding the fundamentals of how food impacts your biology is the first step toward lasting change.
                        </p>
                        <h3 className="text-4xl font-serif font-bold text-forest-900 mt-16 mb-8">Actionable Steps</h3>
                        <p>
                            Start by focusing on whole, unprocessed foods. These items are rich in micronutrients and fiber, which are often stripped away during industrial processing. Aim for a diverse plate that includes lean proteins, healthy fats, and a spectrum of colorful vegetables.
                        </p>
                        <blockquote className="bg-forest-50 p-10 lg:p-16 border-l-4 border-gold-500 italic font-serif text-2xl text-forest-900 my-16 shadow-lg">
                            "The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison."
                        </blockquote>
                        <p>
                            Hydration is equally critical. Many of the symptoms we associate with poor nutrition—fatigue, brain fog, and cravings—are actually signs of mild dehydration. Aim for at least 2-3 liters of spring or filtered water daily, adjusted for your activity level.
                        </p>
                    </div>
                </motion.div>

                <div className="mt-32 pt-16 border-t border-forest-100 flex justify-between items-center">
                    <Link to="/blog" className="flex items-center gap-2 text-forest-900 font-bold hover:text-gold-600 transition-colors uppercase tracking-widest text-xs">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back to Journal
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
