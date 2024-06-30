import React from 'react';
import useAuth from '../hooks/UseAuth';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #3ba5b3;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
        background-color: #2a7a7a;
    }
`;

const LogoutButton = () => {
    const { logout } = useAuth();

    return (
        <Button onClick={logout}>
            Cerrar sesión
        </Button>
    );
};

export default LogoutButton;
