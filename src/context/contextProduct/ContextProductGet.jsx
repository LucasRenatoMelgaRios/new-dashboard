import axios from 'axios';

export const ContextProductGet = async () => {
    try {
        const response = await axios.get('https://sistemaventas.rino101.com/api/products/allProducts/1');
        console.log("listando productos",response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
