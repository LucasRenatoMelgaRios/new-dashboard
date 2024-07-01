// src/context/contextProductSet.js
import axios from 'axios';

export const ContextLotesInsert = async (newLote) => {
    try {
        const response = await axios.post('http://localhost:5000/lotes', newLote);
        return response.data;
    } catch (error) {
        console.error('Error inserting data:', error);
        throw error;
    }
};
