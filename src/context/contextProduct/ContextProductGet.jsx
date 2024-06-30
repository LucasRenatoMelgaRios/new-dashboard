import axios from 'axios';

export const ContextProductGet = async () => {
    try {
        const response = await axios.get('http://localhost:5000/data');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
