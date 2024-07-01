import axios from 'axios';

export const ContextPersonalDelete = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:5000/personal/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};