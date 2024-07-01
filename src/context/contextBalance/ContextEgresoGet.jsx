import axios from 'axios';

export const ContextEgresoGet = async () => {
    try {
        const response = await axios.get('http://localhost:5000/egreso');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
