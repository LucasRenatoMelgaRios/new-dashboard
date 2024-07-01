import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ContextVentatPut } from '../../context/contextVenta/ContextVentaPut';

export const FormEditarVenta = ({ onClose, onVentaAdded, ventaToEdit }) => {
    const [venta, setVenta] = useState({
        Producto: '',
        Cantidad: '',
        Preciodeventa: '',
        Fechadeventa: '',
    });

    useEffect(() => {
        if (ventaToEdit) {
            setVenta({
                Producto: ventaToEdit.Producto,
                Cantidad: ventaToEdit.Cantidad ,
                Preciodeventa: ventaToEdit.Preciodeventa,
                Fechadeventa: ventaToEdit.Fechadeventa,
            });
        }
    }, [ventaToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVenta((prevVenta) => ({
            ...prevVenta,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Lógica para editar la venta usando ContextVentatPut
            const updatedVenta = await ContextVentatPut(ventaToEdit.id, venta);
            onVentaAdded(updatedVenta); // Actualiza la venta en la lista de ventas
            onClose(); // Cierra el modal después de la actualización
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <ModalOverlay>
            <ModalContainer>
                <form onSubmit={handleSubmit}>
                    <h2>Editar Venta</h2>
                    <Input type="text" name="Producto" placeholder="Producto" value={venta.Producto} onChange={handleChange} />
                    <Input type="text" name="Cantidad" placeholder="Cantidad" value={venta.Cantidad} onChange={handleChange} />
                    <Input type="text" name="Preciodeventa" placeholder="Precio de venta" value={venta.Preciodeventa} onChange={handleChange} />
                    <Input type="date" name="Fechadeventa" placeholder="Fecha de venta" value={venta.Fechadeventa} onChange={handleChange} />
                    <Button type="submit">Guardar</Button>
                    <Button type="button" onClick={onClose}>Cerrar</Button>
                </form>
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

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #135669;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;

    &:hover {
        background-color: #0a3c4b;
    }
`;
