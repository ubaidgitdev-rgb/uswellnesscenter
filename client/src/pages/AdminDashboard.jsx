import React, { useState, useEffect, useContext } from 'react';
import api from '../api/axios';
import { AuthContext } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const { token, user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('overview');
    const [expandedInquiry, setExpandedInquiry] = useState(null);

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const [usersRes, contactsRes] = await Promise.all([
                    api.get('/admin/users'),
                    api.get('/admin/contacts')
                ]);
                setUsers(usersRes.data);
                setContacts(contactsRes.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching admin data', err);
                setLoading(false);
            }
        };

        if (token) fetchAdminData();
    }, [token]);

    const menuItems = [
        { id: 'overview', label: 'OVERVIEW', icon: '📊' },
        { id: 'contacts', label: 'CONTACT INQUIRIES', icon: '📩' },
        { id: 'users', label: 'REGISTERED USERS', icon: '👥' },
        { id: 'blog', label: 'BLOG MANAGEMENT', icon: '📝' },
        { id: 'products', label: 'PRODUCTS', icon: '🛍️' },
        { id: 'settings', label: 'SETTINGS', icon: '⚙️' },
    ];

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-[#F8FAF9]">
            <div className="w-16 h-16 border-4 border-[#2D5A43] border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#F8FAF9] flex font-sans selection:bg-[#2D5A43]/10">
            {/* Left Sidebar */}
            <aside className="w-80 bg-white border-r border-gray-100 flex flex-col fixed h-full z-50 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
                {/* Logo Section */}
                <div className="px-8 py-8">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-[#2D5A43] rounded-xl flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-105">
                            W
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900 font-serif">
                            WellnessCenter<span className="text-[#D4AF37]">.</span>
                        </span>
                    </Link>
                </div>

                {/* Admin Profile Area */}
                <div className="px-6 mb-8">
                    <div className="bg-[#F8FAF9] rounded-[24px] p-5 border border-gray-100/50">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center overflow-hidden border border-gray-100">
                                    <img src="/admin-avatar.png" alt="Admin" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full scale-110"></div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-gray-900 truncate tracking-tight">{user?.name || 'Administrator'}</h3>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">Admin Account</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 px-4 space-y-1">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-4 px-6 py-4 rounded-[20px] text-left transition-all duration-300 relative group overflow-hidden ${activeTab === item.id
                                ? 'bg-[#2D5A43] text-white shadow-lg shadow-[#2D5A43]/20 translate-x-1'
                                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <span className="text-xl relative z-10">{item.icon}</span>
                            <span className="font-black text-[11px] uppercase tracking-widest relative z-10">{item.label}</span>
                            {activeTab === item.id && (
                                <motion.div
                                    layoutId="activeTabGlow"
                                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                                />
                            )}
                        </button>
                    ))}
                </nav>

                {/* Footer Section of Sidebar */}
                <div className="p-6 border-t border-gray-50">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-4 px-6 py-4 rounded-[20px] text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all duration-300 group"
                    >
                        <span className="text-xl group-hover:scale-110 transition-transform">🚪</span>
                        <span className="font-black text-[11px] uppercase tracking-widest">Logout System</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 ml-80 min-h-screen">
                {/* Top Header Bar */}
                <header className="sticky top-0 z-40 bg-[#F8FAF9]/80 backdrop-blur-md px-12 py-6 flex justify-between items-center border-b border-gray-100/50">
                    <div>
                        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#D4AF37]">Management Portal</h2>
                        <h1 className="text-3xl font-serif font-bold text-gray-900 mt-1 capitalize">{activeTab.replace('-', ' ')}</h1>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400 shadow-sm">
                                    {i}
                                </div>
                            ))}
                        </div>
                        <Link to="/" className="px-6 py-2.5 bg-white border border-gray-200 rounded-full text-[10px] font-black uppercase tracking-widest text-[#2D5A43] hover:border-[#2D5A43] transition-colors shadow-sm">
                            View Website
                        </Link>
                    </div>
                </header>

                <div className="p-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            {/* Dashboard Overview */}
                            {activeTab === 'overview' && (
                                <div className="space-y-12">
                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                                        <div className="lg:col-span-2 bg-[#1a3a2a] rounded-[32px] p-8 border border-white/10 shadow-2xl relative overflow-hidden group">
                                            {/* Background Image */}
                                            <div className="absolute inset-0 z-0">
                                                <img src="/nexus-bg.png" alt="Nexus Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-110 group-hover:scale-100 transition-transform duration-1000" />
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a2a] via-[#1a3a2a]/40 to-transparent"></div>
                                            </div>

                                            <div className="relative z-10 flex h-full items-center justify-between">
                                                <div className="max-w-[180px]">
                                                    <h3 className="text-4xl font-bold text-white tracking-tighter mb-2">Nexus</h3>
                                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37] mb-6">Live Data Analytics</p>
                                                    <div className="flex items-center gap-2 text-white/60 text-xs font-medium">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                                        Synthesizing clinical data...
                                                    </div>
                                                </div>
                                                <div className="w-28 h-28 relative">
                                                    <motion.img
                                                        initial={{ y: 0 }}
                                                        animate={{ y: [-5, 5, -5] }}
                                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                                        src="/nexus-analytics.png"
                                                        alt="Nexus Analytics"
                                                        className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(212,175,55,0.4)]"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {[
                                            { label: 'USERS', val: users.length, icon: '👥', color: 'bg-blue-50 text-blue-600', sub: 'Total registered' },
                                            { label: 'INQUIRIES', val: contacts.length, icon: '📩', color: 'bg-[#D4AF37]/10 text-[#D4AF37]', sub: 'Active messages' },
                                            { label: 'BLOG', val: 4, icon: '📝', color: 'bg-green-50 text-green-600', sub: 'Published articles' }
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden group">
                                                <div className="relative z-10">
                                                    <div className={`w-12 h-12 ${stat.color} rounded-[18px] flex items-center justify-center text-xl mb-6 shadow-sm`}>
                                                        {stat.icon}
                                                    </div>
                                                    <h3 className="text-4xl font-bold text-gray-900 tracking-tighter mb-1">{stat.val}</h3>
                                                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">{stat.label}</p>
                                                    <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
                                                        <span className="text-[10px] text-gray-500 font-medium">{stat.sub}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Recent Activity Section */}
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                        <div className="lg:col-span-2 bg-white rounded-[40px] p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                                            <div className="flex justify-between items-center mb-10">
                                                <h3 className="text-2xl font-serif font-bold text-gray-900">Recent Contact Inquiries</h3>
                                                <button className="text-[10px] font-black uppercase tracking-widest text-[#2D5A43] bg-[#F8FAF9] px-4 py-2 rounded-full border border-gray-100 hover:bg-white transition-colors">See All</button>
                                            </div>

                                            {contacts.length > 0 ? (
                                                <div className="space-y-6">
                                                    {contacts.slice(0, 4).map(contact => (
                                                        <div key={contact._id} className="group flex items-center justify-between p-6 rounded-[24px] bg-[#F8FAF9]/50 border border-transparent hover:border-[#2D5A43]/10 hover:bg-white hover:shadow-xl hover:shadow-gray-200/20 transition-all duration-300">
                                                            <div className="flex items-center gap-5">
                                                                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-[#2D5A43] font-bold text-lg border border-gray-100 group-hover:scale-105 transition-transform">
                                                                    {contact.name?.[0]?.toUpperCase()}
                                                                </div>
                                                                <div>
                                                                    <h4 className="font-bold text-gray-900 text-lg tracking-tight">{contact.name}</h4>
                                                                    <div className="flex items-center gap-3 mt-1">
                                                                        <span className="text-xs text-gray-400 font-medium line-clamp-1">{contact.subject}</span>
                                                                        <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                                                                        <span className="text-xs text-[#2D5A43] font-bold">{contact.email}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="text-right">
                                                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-1">Received</p>
                                                                <p className="text-xs font-bold text-gray-900">{new Date(contact.date).toLocaleDateString()}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="py-20 text-center">
                                                    <div className="text-5xl mb-6 grayscale opacity-30">📪</div>
                                                    <p className="text-gray-400 font-medium font-serif italic">Your inbox is currently clear.</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Status / Calendar area */}
                                        <div className="bg-[#2D5A43] rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl shadow-[#2D5A43]/30">
                                            <div className="relative z-10">
                                                <h3 className="text-2xl font-serif font-bold mb-8">System Health</h3>
                                                <div className="space-y-10">
                                                    {[
                                                        { l: 'Database Status', s: 'Operational', p: 100 },
                                                        { l: 'API Latency', s: 'Premium (24ms)', p: 98 },
                                                        { l: 'Storage Capacity', s: '4.2GB of 10GB', p: 42 }
                                                    ].map((item, i) => (
                                                        <div key={i}>
                                                            <div className="flex justify-between items-center mb-4 text-xs font-bold uppercase tracking-widest text-white/60">
                                                                <span>{item.l}</span>
                                                                <span className="text-white">{item.s}</span>
                                                            </div>
                                                            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                                <motion.div
                                                                    initial={{ width: 0 }}
                                                                    animate={{ width: `${item.p}%` }}
                                                                    className="h-full bg-[#D4AF37]"
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="mt-16 bg-white/10 rounded-[24px] p-6 backdrop-blur-sm border border-white/5">
                                                    <p className="text-xs font-medium text-white/70 leading-relaxed italic">
                                                        "System fully optimized. All protocols are currently running on clinical-grade infrastructure."
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Glow elements */}
                                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-[80px]"></div>
                                            <div className="absolute top-20 left-1/2 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-[60px]"></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Standard Content Views (Repeat for others) */}
                            {['contacts', 'users'].includes(activeTab) && (
                                <div className="space-y-8">
                                    <div className="bg-white rounded-[40px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden">
                                        <div className="p-10 border-b border-gray-50 flex justify-between items-center">
                                            <h3 className="text-2xl font-serif font-bold text-gray-900 capitalize">{activeTab} List</h3>
                                            <div className="flex gap-4">
                                                <input
                                                    type="text"
                                                    placeholder="Search records..."
                                                    className="px-6 py-3 bg-[#F8FAF9] rounded-full text-xs border border-gray-100 outline-none focus:border-[#2D5A43] w-64 transition-all"
                                                />
                                                <button className="px-6 py-3 bg-[#2D5A43] text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg shadow-[#2D5A43]/20">Filter</button>
                                            </div>
                                        </div>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left">
                                                <thead className="bg-[#F8FAF9] text-gray-400 uppercase text-[10px] font-black tracking-widest border-b border-gray-100">
                                                    <tr>
                                                        <th className="px-10 py-6">Record Info</th>
                                                        {activeTab === 'contacts' ? (
                                                            <>
                                                                <th className="px-10 py-6">Subject</th>
                                                                <th className="px-10 py-6 text-right">Status</th>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <th className="px-10 py-6 text-center">Status</th>
                                                                <th className="px-10 py-6 text-right">Date Activity</th>
                                                            </>
                                                        )}
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-50">
                                                    {(activeTab === 'contacts' ? contacts : users).map((item, idx) => (
                                                        <React.Fragment key={item._id}>
                                                            <tr
                                                                onClick={() => activeTab === 'contacts' && setExpandedInquiry(expandedInquiry === item._id ? null : item._id)}
                                                                className={`transition-all duration-300 ${activeTab === 'contacts' ? 'cursor-pointer hover:bg-[#F8FAF9]' : 'hover:bg-[#F8FAF9]/50'} ${expandedInquiry === item._id ? 'bg-[#F8FAF9]' : ''}`}
                                                            >
                                                                <td className="px-10 py-8">
                                                                    <div className="flex items-center gap-5">
                                                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg shadow-sm border ${item.role === 'admin' ? 'bg-[#D4AF37]/5 border-[#D4AF37]/10 text-[#D4AF37]' : 'bg-white border-gray-100 text-[#2D5A43]'}`}>
                                                                            {item.name?.[0]?.toUpperCase()}
                                                                        </div>
                                                                        <div>
                                                                            <h4 className="font-bold text-gray-900 text-lg tracking-tight">{item.name}</h4>
                                                                            <p className="text-sm text-gray-400 font-medium">{item.email}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="px-10 py-8 text-sm">
                                                                    {activeTab === 'contacts' ? (
                                                                        <div className="flex flex-col">
                                                                            <span className="font-bold text-gray-800 truncate max-w-[200px]">{item.subject}</span>
                                                                            <span className="text-[10px] text-gray-400 font-black tracking-widest uppercase mt-1">CLICK TO VIEW MESSAGE</span>
                                                                        </div>
                                                                    ) : (
                                                                        <div className="text-center">
                                                                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${item.role === 'admin' ? 'bg-[#D4AF37] text-white shadow-md shadow-[#D4AF37]/20' : 'bg-[#2D5A43] text-white shadow-md shadow-[#2D5A43]/20'}`}>
                                                                                {item.role || 'Member'}
                                                                            </span>
                                                                        </div>
                                                                    )}
                                                                </td>
                                                                <td className="px-10 py-8 text-right">
                                                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-1">
                                                                        {activeTab === 'contacts' ? 'Received' : 'Logged'}
                                                                    </p>
                                                                    <p className="text-sm font-bold text-gray-900">{new Date(item.date || item.createdAt).toLocaleDateString()}</p>
                                                                </td>
                                                            </tr>

                                                            {/* Expanded Row for Contacts */}
                                                            {activeTab === 'contacts' && (
                                                                <tr>
                                                                    <td colSpan="3" className="p-0 border-none">
                                                                        <AnimatePresence>
                                                                            {expandedInquiry === item._id && (
                                                                                <motion.div
                                                                                    initial={{ height: 0, opacity: 0 }}
                                                                                    animate={{ height: 'auto', opacity: 1 }}
                                                                                    exit={{ height: 0, opacity: 0 }}
                                                                                    transition={{ duration: 0.3 }}
                                                                                    className="overflow-hidden bg-[#F8FAF9]"
                                                                                >
                                                                                    <div className="px-24 py-10">
                                                                                        <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
                                                                                            <div className="flex justify-between items-start mb-6">
                                                                                                <div>
                                                                                                    <span className="text-[10px] font-black tracking-[0.2em] text-[#D4AF37] uppercase">Message Content</span>
                                                                                                    <h5 className="text-xl font-serif font-bold text-gray-900 mt-1">{item.subject}</h5>
                                                                                                </div>
                                                                                                <button
                                                                                                    onClick={() => setExpandedInquiry(null)}
                                                                                                    className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors"
                                                                                                >
                                                                                                    ✕
                                                                                                </button>
                                                                                            </div>
                                                                                            <p className="text-gray-600 leading-relaxed font-medium bg-[#F8FAF9] p-6 rounded-2xl border border-gray-50 italic">
                                                                                                "{item.message}"
                                                                                            </p>
                                                                                            <div className="mt-8 flex gap-4">
                                                                                                <a
                                                                                                    href={`mailto:${item.email}`}
                                                                                                    className="px-8 py-3 bg-[#2D5A43] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-[#2D5A43]/20 hover:scale-105 transition-transform"
                                                                                                >
                                                                                                    Reply via Email
                                                                                                </a>
                                                                                                <button className="px-8 py-3 bg-white border border-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-400 rounded-full hover:border-red-100 hover:text-red-400 transition-all">
                                                                                                    Archive Inquiry
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </motion.div>
                                                                            )}
                                                                        </AnimatePresence>
                                                                    </td>
                                                                </tr>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Fallback for development tabs */}
                            {!['overview', 'contacts', 'users'].includes(activeTab) && (
                                <div className="bg-white rounded-[40px] p-24 text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                                    <div className="text-8xl mb-10 grayscale-0 bounce-slow">✨</div>
                                    <h3 className="text-4xl font-serif font-bold text-gray-900 mb-4 capitalize">{activeTab.replace('-', ' ')} Module</h3>
                                    <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
                                        This protocol interface is currently being synchronized with our clinical backend. New management features arriving in the next release cycle.
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
