import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        console.log("Submitting registration form:", formData);
        e.preventDefault();
        try {
            const res = await api.post('/auth/register', formData);
            console.log("Registration success:", res.data);
            login(res.data.token, res.data.user);
            navigate('/');
        } catch (err) {
            console.error("Registration error:", err.response ? err.response.data : err.message);
            alert('Registration failed');
        }
    };

    return (
        <div className="min-h-screen bg-cream-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-4xl font-serif font-bold text-forest-900">
                    Join the Movement
                </h2>
                <p className="mt-2 text-center text-sm text-forest-600">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-gold-600 hover:text-gold-500 transition-colors">
                        Sign in
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border border-forest-100">
                    <form className="space-y-6" onSubmit={e => onSubmit(e)}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-forest-900 uppercase tracking-widest">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-3 text-forest-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold-500 sm:text-sm sm:leading-6 bg-cream-50"
                                    value={name}
                                    onChange={e => onChange(e)}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-forest-900 uppercase tracking-widest">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-3 text-forest-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold-500 sm:text-sm sm:leading-6 bg-cream-50"
                                    value={email}
                                    onChange={e => onChange(e)}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-bold text-forest-900 uppercase tracking-widest">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="block w-full rounded-md border-0 py-3 text-forest-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold-500 sm:text-sm sm:leading-6 bg-cream-50"
                                    value={password}
                                    onChange={e => onChange(e)}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-forest-900 px-3 py-3 text-sm font-bold uppercase tracking-widest leading-6 text-gold-500 shadow-sm hover:bg-forest-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-900 transition-colors"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
