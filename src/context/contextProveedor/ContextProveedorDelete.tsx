import axios from 'axios';

export const ContextProveedorDelete = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:5000/proveedores/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};
