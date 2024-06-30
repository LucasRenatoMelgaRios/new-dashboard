import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const login = async (usuario, contraseña) => {
        try {
            const response = await axios.post('http://localhost:5000/login', { usuario, contraseña });
            setUser(response.data.user);
            navigate('/personal');  // O la ruta que desees redirigir después de iniciar sesión
        } catch (error) {
            console.error("Login failed", error);
            alert("Credenciales incorrectas");
        }
    };

    const logout = () => {
        setUser(null);
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
