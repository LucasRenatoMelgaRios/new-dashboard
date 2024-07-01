import axios from 'axios';

export const ContextVentaGet = async () => {
    try {
        const response = await axios.get('http://localhost:5000/ventas');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
