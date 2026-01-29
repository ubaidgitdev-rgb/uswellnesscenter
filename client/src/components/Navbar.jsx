import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { isAuthenticated, logout, user } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    // Handle scroll effect and progress
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Calculate scroll progress
            const winHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolledRatio = (currentScrollY / winHeight) * 100;
            setScrollProgress(scrolledRatio);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const onLogout = () => {
        logout();
        navigate('/');
    };

    const isHome = location.pathname === '/';

    // Dynamic navbar styles based on scroll and page
    const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
        ? 'glass py-3 shadow-lg border-b border-forest-100/20'
        : isHome
            ? 'bg-transparent border-transparent py-6'
            : 'glass py-3 border-b border-forest-100/20'
        }`;

    const linkClasses = (path) => `relative text-sm font-semibold tracking-wide transition-all duration-300 group ${!scrolled && isHome ? 'text-white hover:text-sage-200' : 'text-forest-800 hover:text-forest-600'
        }`;

    const logoClasses = `text-2xl font-serif font-bold tracking-tight transition-transform duration-300 hover:scale-105 ${!scrolled && isHome ? 'text-white' : 'text-forest-950'
        }`;

    return (
        <nav className={navClasses}>
            {/* Scroll Progress Bar */}
            <div
                className="absolute bottom-0 left-0 h-[2px] bg-forest-500 transition-all duration-300 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />

            <div className="container-fluid flex justify-between items-center">

                {/* Logo */}
                <div className="flex-shrink-0 z-50">
                    <Link to="/" className={logoClasses}>
                        USWellnessCenter<span className="text-forest-400">.</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-10">
                    {[
                        { name: 'Home', path: '/' },
                        { name: 'Products', path: '/products' },
                        { name: 'Services', path: '/services' },
                        { name: 'Blog', path: '/blog' },
                        { name: 'About', path: '/about' },
                        { name: 'Contact', path: '/contact' }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={linkClasses(item.path)}
                        >
                            {item.name}
                            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`} />
                        </Link>
                    ))}
                    {user && user.role === 'admin' && (
                        <Link to="/admin" className={linkClasses('/admin')}>
                            <span className="text-forest-500 font-black tracking-widest text-[10px] uppercase border border-forest-500/30 px-3 py-1 rounded-full hover:bg-forest-500 hover:text-white transition-all">
                                Admin panel
                            </span>
                        </Link>
                    )}
                </div>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center space-x-6">
                    {isAuthenticated ? (
                        <div className="flex items-center gap-6">
                            <span className={`text-sm font-bold flex items-center gap-2 ${!scrolled && isHome ? 'text-white/90' : 'text-forest-700'}`}>
                                <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center text-forest-700 text-xs border border-sage-200 uppercase">
                                    {user?.name?.[0]}
                                </div>
                                {user?.name}
                            </span>
                            <button
                                onClick={onLogout}
                                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border-2 ${!scrolled && isHome
                                    ? 'border-white text-white hover:bg-white hover:text-forest-950'
                                    : 'border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-white'
                                    }`}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-8">
                            <Link to="/login" className={`text-sm font-black uppercase tracking-widest transition-colors ${!scrolled && isHome ? 'text-white hover:text-sage-200' : 'text-forest-950 hover:text-sage-600'}`}>
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className={`px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-xl ${!scrolled && isHome
                                    ? 'bg-white text-forest-950 hover:bg-sage-50 shadow-white/10'
                                    : 'bg-forest-950 text-cream-50 hover:bg-forest-800 shadow-forest-950/20'
                                    }`}
                            >
                                Get Started
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center z-50">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-2 focus:outline-none ${!scrolled && isHome && !isOpen ? 'text-white' : 'text-forest-950'}`}
                    >
                        <span className="sr-only">Open menu</span>
                        <div className="w-7 h-7 flex flex-col justify-center items-end gap-1.5">
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 7, width: 28 } : { rotate: 0, y: 0, width: 28 }}
                                className="block h-0.5 bg-current transition-all"
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0 } : { opacity: 1, width: 20 }}
                                className="block h-0.5 bg-current transition-all"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -7, width: 28 } : { rotate: 0, y: 0, width: 28 }}
                                className="block h-0.5 bg-current transition-all"
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-cream-50 z-40 flex flex-col justify-center items-center"
                    >
                        <div className="flex flex-col space-y-8 text-center">
                            {['Home', 'Products', 'Services', 'Blog', 'About', 'Contact'].map((item, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    key={item}
                                >
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-serif font-bold text-forest-950 hover:text-sage-600 transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                            {user && user.role === 'admin' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <Link
                                        to="/admin"
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-black uppercase tracking-widest text-forest-500 border-2 border-forest-500/30 px-10 py-4 rounded-full"
                                    >
                                        Admin Panel
                                    </Link>
                                </motion.div>
                            )}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="pt-12 flex flex-col gap-6 px-12"
                            >
                                {isAuthenticated ? (
                                    <button onClick={onLogout} className="text-xl font-black uppercase tracking-widest text-forest-500">Logout</button>
                                ) : (
                                    <>
                                        <Link to="/login" onClick={() => setIsOpen(false)} className="text-xl font-black uppercase tracking-widest text-forest-950">Login</Link>
                                        <Link to="/register" onClick={() => setIsOpen(false)} className="bg-forest-950 text-cream-50 px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest shadow-2xl">
                                            Get Started
                                        </Link>
                                    </>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};


export default Navbar;
