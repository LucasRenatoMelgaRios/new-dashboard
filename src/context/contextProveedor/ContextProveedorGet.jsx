import axios from 'axios';

export const ContextProveedortGet = async () => {
    try {
        const response = await axios.get('http://localhost:5000/proveedores');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
