import React, { createContext, useReducer, useEffect } from 'react';
import api from '../api/axios';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
};

export const AuthContext = createContext(initialState);

const authReducer = (state, action) => {
    switch (action.type) {
        case 'USER_LOADED':
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            };
        case 'REGISTER_SUCCESS':
        case 'LOGIN_SUCCESS':
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            };
        case 'AUTH_ERROR':
        case 'LOGIN_FAIL':
        case 'LOGOUT':
        case 'REGISTER_FAIL':
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load User
    const loadUser = async () => {
        try {
            const res = await api.get('/auth/me');

            dispatch({
                type: 'USER_LOADED',
                payload: res.data
            });
        } catch (err) {
            dispatch({ type: 'AUTH_ERROR' });
        }
    };

    // Register User
    const register = async formData => {
        try {
            const res = await api.post('/auth/register', formData);

            dispatch({
                type: 'REGISTER_SUCCESS',
                payload: res.data
            });

            loadUser();
        } catch (err) {
            dispatch({
                type: 'REGISTER_FAIL',
                payload: err.response.data.msg
            });
            // Optionally handle errors better by returning them
            throw err;
        }
    };

    // Login User
    const login = async (tokenValue, userValue) => {
        console.log('AuthContext login called with token and user:', { tokenValue, userValue });
        // If we already have token and user (from direct login call in components)
        if (tokenValue && userValue) {
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: { token: tokenValue, user: userValue }
            });
            return;
        }
    };

    // Actual login with credentials
    const loginWithCredentials = async formData => {
        try {
            const res = await api.post('/auth/login', formData);

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: res.data
            });

            loadUser();
        } catch (err) {
            dispatch({
                type: 'LOGIN_FAIL',
                payload: err.response.data.msg
            });
            throw err;
        }
    };

    // Logout
    const logout = () => dispatch({ type: 'LOGOUT' });

    useEffect(() => {
        if (localStorage.token) {
            loadUser();
        }
    }, [])


    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                register,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
