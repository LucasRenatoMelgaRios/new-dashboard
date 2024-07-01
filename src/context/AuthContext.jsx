import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('nombre_usuario')));
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            localStorage.setItem('nombre_usuario', JSON.stringify(user));
        } else {
            localStorage.removeItem('nombre_usuario');
        }
    }, [user]);

    const login = async (nombre_usuario, contrasena) => {
        try {
            console.log('Attempting login with:', nombre_usuario, contrasena);

            const response = await axios.post('https://sistemaventas.rino101.com/api/users/loginUser', { nombre_usuario, contrasena });

            console.log('Login response:', response.data);  // Verificar la respuesta de la API

            if (response.data) {
                setUser(response.data);
                navigate('/personal');  // Redirige a la ruta deseada después de iniciar sesión
            } else {
                console.error('No user data in response');
            }
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
