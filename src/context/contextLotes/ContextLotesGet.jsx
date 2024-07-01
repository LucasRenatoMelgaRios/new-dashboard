import axios from 'axios';

export const ContextLotesGet = async () => {
    try {
        const response = await axios.get('http://localhost:5000/lotes');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};