// src/context/contextProductSet.js
import axios from 'axios';

export const ContextProductInsert = async (newProduct) => {
    try {
        const response = await axios.post('https://sistemaventas.rino101.com/api/products/registerProduct', newProduct);
        return response.data;
    } catch (error) {
        console.error('Error inserting data:', error);
        throw error;
    }
};
