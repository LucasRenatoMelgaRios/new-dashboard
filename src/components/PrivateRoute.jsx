// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/UseAuth';

export const PrivateRoute = ({ children }) => {
    const { user } = useAuth();

    return user ? children : <Navigate to="/" />;
};

