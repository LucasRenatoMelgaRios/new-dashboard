import axios from 'axios';

export const ContextPersonalGet = async () => {
    try {
        const response = await axios.get('http://localhost:5000/personal');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
