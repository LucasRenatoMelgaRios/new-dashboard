import axios from 'axios';

export const ContextProveedortPut = async (id, newData) => {
    try {
        const response = await axios.put(`http://localhost:5000/proveedores/${id}`, newData);
        return response.data;
    } catch (error) {
        console.error('Error updating data:', error);
        throw error;
    }
};


