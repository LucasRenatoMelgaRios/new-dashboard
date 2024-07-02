// src/components/ProductForm.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { ContextProductInsert } from '../../context/contextProduct/ContextProductInsert';

export const FormInsertProducts = ({ onClose, onProductAdded }) => {
    const [newProduct, setNewProduct] = useState({
        nombre: '',
        descripcion: '',
        codigo_barra: '',
        precio: '',
        stock: '',
        proveedor: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const addedProduct = await ContextProductInsert(newProduct);
            onProductAdded(addedProduct);
            onClose();
        } catch (error) {
            console.error('Error inserting data:', error);
        }
    };

    return (
        <ModalOverlay>
            
            <ModalContainer>
                <h1>
                    nuevo producto
                </h1>
                <FormContainer onSubmit={handleSubmit}>
                    <Input type="text" name="nombre" placeholder="nombre" value={newProduct.nombre} onChange={handleInputChange} required />
                    <Input type="text" name="descripcion" placeholder="descripcion" value={newProduct.descripcion} onChange={handleInputChange} required />
                    <Input type="text" name="codigo_barra" placeholder="Codigo de barra" value={newProduct.codigo_barra} onChange={handleInputChange} required />
                    <Input type="number" name="precio" placeholder="precio" value={newProduct.precio} onChange={handleInputChange} required />
                    <Input type="number" name="stock" placeholder="stock" value={newProduct.stock} onChange={handleInputChange} required />
                    <Input type="text" name="proveedor" placeholder="proveedor" value={newProduct.proveedor} onChange={handleInputChange} required />
                    <Button type="submit">Agregar Producto</Button>
                    <Button type="button" onClick={onClose}>Cancelar</Button>
                </FormContainer>
            </ModalContainer>
        </ModalOverlay>
    );
};

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


