import axios from 'axios';

export const ContextIngresoGet = async () => {
    try {
        const response = await axios.get('http://localhost:5000/ingreso');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
