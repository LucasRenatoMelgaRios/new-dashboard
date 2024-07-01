import axios from 'axios';

export const ContextEgresoInsert = async (newEgreso) => {
    try {
        const response = await axios.post('http://localhost:5000/egresopost', newEgreso);
        return response.data;
    } catch (error) {
        console.error('Error inserting data:', error);
        throw error;
    }
};