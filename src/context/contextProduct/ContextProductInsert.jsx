// src/context/contextProductSet.js
import axios from 'axios';

export const ContextProductInsert = async (newProduct) => {
    try {
        const response = await axios.post('http://localhost:5000/data', newProduct);
        return response.data;
    } catch (error) {
        console.error('Error inserting data:', error);
        throw error;
    }
};
