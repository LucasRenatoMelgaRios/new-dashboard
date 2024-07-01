import axios from 'axios';

export const ContextPersonalEdit = async (id, newData) => {
    try {
        const response = await axios.put(`http://localhost:5000/personal/${id}`, newData);
        return response.data; // Devuelve los datos actualizados del proveedor desde el servidor
    } catch (error) {
        console.error('Error updating data:', error);
        throw error;
    }
};
