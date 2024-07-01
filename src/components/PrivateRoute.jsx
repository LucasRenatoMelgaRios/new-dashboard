import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/UseAuth';

export const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    console.log('PrivateRoute user:', user);  // Verificar el estado del usuario en las rutas privadas

    if (!user) {
        return <Navigate to="/" />;
    }

    return children;
};
