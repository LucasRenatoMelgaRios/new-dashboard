import React from 'react';
import useAuth from '../hooks/UseAuth';

const UserInfo = () => {
    const { user } = useAuth();

    return (
        <div>
            {user && <p>Bienvenido, {user.usuario}!</p>}
        </div>
    );
};

export default UserInfo;
