// src/context/contextProductSet.js
import axios from 'axios';

export const ContextProveedorInsert = async (newProv) => {
    try {
        const response = await axios.post('http://localhost:5000/proveedores', newProv);
        return response.data;
    } catch (error) {
        console.error('Error inserting data:', error);
        throw error;
    }
};
