import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        console.log('Login form submitted for:', email);
        try {
            const response = await api.post('/auth/login', formData);
            console.log('Login response received:', response.data);
            const { token, user } = response.data;
            await login(token, user);
            console.log('Auth state update triggered');

            if (user && user.role === 'admin') {
                console.log('Redirecting to Admin Dashboard');
                navigate('/admin');
            } else {
                console.log('Redirecting to Home');
                navigate('/');
            }
        } catch (err) {
            console.error('Login Error:', err);
            const errorMsg = err.response?.data?.errors?.[0]?.msg || 'Login failed. Please check your credentials and try again.';
            alert(errorMsg);
        }
    };

    return (
        <div className="min-h-screen bg-cream-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-4xl font-serif font-bold text-forest-900">
                    Welcome Back
                </h2>
                <p className="mt-2 text-center text-sm text-forest-600">
                    Or{' '}
                    <Link to="/register" className="font-medium text-gold-600 hover:text-gold-500 transition-colors">
                        create a new account
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border border-forest-100">
                    <form className="space-y-6" onSubmit={e => onSubmit(e)}>
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
                                    autoComplete="current-password"
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
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
