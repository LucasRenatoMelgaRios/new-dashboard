import React, { useState } from 'react';
import styled from 'styled-components';
import { ContextVentaInsert } from '../../context/contextVenta/ContextVentaInsert';

export const FormInsertVenta = ({ onClose, onVentaAdded }) => {
    const [newVenta, setnewVenta] = useState({
        Producto: '',
        Cantidad: '',
        Preciodeventa: '',
        Fechadeventa: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setnewVenta({ ...newVenta, [name]: value });
    };

    const handleSubmitInsert = async (e) => {
        e.preventDefault();
        try {
            const addedVenta = await ContextVentaInsert(newVenta);
            onVentaAdded(addedVenta);
            onClose();
        } catch (error) {
            console.error('Error inserting data:', error);
        }
    };
    return (
        <ModalOverlay>
            <ModalContainer>
                <FormContainer onSubmit={handleSubmitInsert}>
                    <h2>Agregar Venta</h2>
                    <Input type="text" name="Producto" placeholder="Producto" value={newVenta.Producto} onChange={handleChange} required />
                    <Input type="number" name="Cantidad" placeholder="Cantidad" value={newVenta.Cantidad} onChange={handleChange} required />
                    <Input type="number" name="Preciodeventa" placeholder="Precio de venta" value={newVenta.Preciodeventa} onChange={handleChange} required />
                    <Input type="date" name="Fechadeventa" placeholder="Fecha de venta" value={newVenta.Fechadeventa} onChange={handleChange} required />
                    <Button type="submit">Guardar</Button>
                    <Button type="button" onClick={onClose} className='Cerrar'>Cerrar</Button>
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
    &.Cerrar {
        background-color: red;
    }
`;
