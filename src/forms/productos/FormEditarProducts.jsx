import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ContextProductEdit } from '../../context/contextProduct/ContextProductEdit';

export const FormEditarProducts = ({ onClose, onProductosAdded, productosToEdit }) => {
    const[newProduct,setNewProduct]=useState({
        Nombre:'', 
        Descripcion: '', 
        CodigoBarra:'', 
        Precio:'', 
        Stock:'', 
        Proveedor:'',
    })

    useEffect(() => {
        if (productosToEdit) {
            setNewProduct({
                nombre: productosToEdit.nombre,
                descripcion: productosToEdit.descripcion,
                codigo_barra: productosToEdit.codigo_barra,
                precio: productosToEdit.precio,
                stock:productosToEdit.stock,
                proveedor:productosToEdit.proveedor,
            });
        }
    }, [productosToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedProducto = await ContextProductEdit(productosToEdit.id, newProduct);
            onProductosAdded(updatedProducto); // Actualiza el proveedor en la lista de proveedores
            onClose(); // Cierra el modal después de la actualización
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

  return (
    <ModalOverlay>
            <ModalContainer>
                <h1>Editar Producto</h1>
                <FormContainer onSubmit={handleSubmit}>
                    <Input type="text" name="nombre" placeholder="Nombre" value={newProduct.nombre} onChange={handleChange} required />
                    <Input type="text" name="descripcion" placeholder="descripcion" value={newProduct.descripcion} onChange={handleChange} required />
                    <Input type="text" name="codigo_barra" placeholder="Codigo en Barra" value={newProduct.codigo_barra} onChange={handleChange} required />
                    <Input type="number" name="precio" placeholder="Precio" value={newProduct.precio} onChange={handleChange} required />
                    <Input type="number" name="stock" placeholder="Stock" value={newProduct.stock} onChange={handleChange} required />
                    <Input type="text" name="proveedor" placeholder="Proveedor" value={newProduct.proveedor} onChange={handleChange} required />
                    <Button type="submit">Actualizar Producto</Button>
                    <Button type="button" onClick={onClose}>Cancelar</Button>
                </FormContainer>
            </ModalContainer>
        </ModalOverlay>
  )
}
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #135669;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0a3c4b;
    }
`;
