// src/context/contextProductSet.js
import axios from 'axios';

export const ContextVentaInsert = async (newVenta) => {
    try {
        const response = await axios.post('http://localhost:5000/ventas', newVenta);
        return response.data;
    } catch (error) {
        console.error('Error inserting data:', error);
        throw error;
    }
};
