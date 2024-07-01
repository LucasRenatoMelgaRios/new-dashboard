import axios from 'axios';

export const ContextPersonalInsert = async (newProv) => {
    try {
        const response = await axios.post('http://localhost:5000/personal', newProv);
        return response.data;
    } catch (error) {
        console.error('Error inserting data:', error);
        throw error;
    }
};