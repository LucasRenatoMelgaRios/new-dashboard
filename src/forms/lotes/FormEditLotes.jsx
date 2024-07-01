import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ContextLotestPut } from '../../context/contextLotes/ContexteLotesEdit';


export const FormEditLotes = ({ onClose, onLoteUpdated, loteToEdit }) => {
    const [newLote, setNewLote] = useState({
        Nombre: '',
        Cantidad: '',
        Fecha: ''
    });

    useEffect(() => {
        if (loteToEdit) {
            setNewLote({
                Nombre: loteToEdit.Nombre,
                Cantidad: loteToEdit.Cantidad,
                Fecha: loteToEdit.Fecha,
            });
        }
    }, [loteToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewLote((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedLote = await ContextLotestPut(loteToEdit.id, newLote);
            onLoteUpdated(updatedLote); // Actualiza el lote en la lista de lotes
            onClose(); // Cierra el modal después de la actualización
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <ModalOverlay>
            <ModalContainer>
                <h1>Editar Lote</h1>
                <FormContainer onSubmit={handleSubmit}>
                    <Input type="text" name="Nombre" placeholder="Nombre" value={newLote.Nombre} onChange={handleChange} required />
                    <Input type="number" name="Cantidad" placeholder="Cantidad" value={newLote.Cantidad} onChange={handleChange} required />
                    <Input type="date" name="Fecha" placeholder="Fecha" value={newLote.Fecha} onChange={handleChange} required />
                    <Button type="submit">Actualizar Lote</Button>
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
