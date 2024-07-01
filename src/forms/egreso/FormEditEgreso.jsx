import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ContextEgresoEdit } from '../../context/contextBalance/ContextEgresoEdit';


export const FormEditEgreso = ({ onClose, onEgresoUpdated, egresoToEdit }) => {
    const [newEgreso, setNewEgreso] = useState({
        Concepto: '',
        Monto: '',
        Fecha: ''
    });

    useEffect(() => {
        if (egresoToEdit) {
            setNewEgreso({
                Concepto: egresoToEdit.Concepto,
                Monto: egresoToEdit.Monto,
                Fecha: egresoToEdit.Fecha,
            });
        }
    }, [egresoToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEgreso((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedEgreso = await ContextEgresoEdit(egresoToEdit.id, newEgreso);
            onEgresoUpdated(updatedEgreso); // Actualiza el egreso en la lista de egresos
            onClose(); // Cierra el modal después de la actualización
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <ModalOverlay>
            <ModalContainer>
                <h1>Editar Egreso</h1>
                <FormContainer onSubmit={handleSubmit}>
                    <Input type="text" name="Concepto" placeholder="Concepto" value={newEgreso.Concepto} onChange={handleChange} required />
                    <Input type="number" name="Monto" placeholder="Monto" value={newEgreso.Monto} onChange={handleChange} required />
                    <Input type="date" name="Fecha" placeholder="Fecha" value={newEgreso.Fecha} onChange={handleChange} required />
                    <Button type="submit">Actualizar Egreso</Button>
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
