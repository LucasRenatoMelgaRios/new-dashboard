import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ContextPersonalEdit } from '../../context/contextPersonal/ContextPersonalEdit';

export const FormEditarPersonal = ({ onClose, onPersonalAdded, personalToEdit }) => {
    const [newPersonal, setNewPersonal] = useState({
        Nombre: '',
        Apellidos: '',
        Cargo: '',
        FechaContratacion: '',
        Salario: '',
    });

    useEffect(() => {
        if (personalToEdit) {
            setNewPersonal({
                Nombre: personalToEdit.Nombre,
                Apellidos: personalToEdit.Apellidos,
                Cargo: personalToEdit.Cargo,
                FechaContratacion: personalToEdit.FechaContratacion,
                Salario: personalToEdit.Salario,
            });
        }
    }, [personalToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPersonal((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedPersonal = await ContextPersonalEdit(personalToEdit.id, newPersonal);
            onPersonalAdded(updatedPersonal); // Actualiza el personal en la lista de personal
            onClose(); // Cierra el modal después de la actualización
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <ModalOverlay>
            <ModalContainer>
                <h1>Editar Personal</h1>
                <FormContainer onSubmit={handleSubmit}>
                    <Input type="text" name="Nombre" placeholder="Nombre" value={newPersonal.Nombre} onChange={handleChange} required />
                    <Input type="text" name="Apellidos" placeholder="Apellidos" value={newPersonal.Apellidos} onChange={handleChange} required />
                    <Input type="text" name="Cargo" placeholder="Cargo" value={newPersonal.Cargo} onChange={handleChange} required />
                    <Input type="date" name="FechaContratacion" placeholder="Fecha de Contratación" value={newPersonal.FechaContratacion} onChange={handleChange} required />
                    <Input type="number" name="Salario" placeholder="Salario" value={newPersonal.Salario} onChange={handleChange} required />
                    <Button type="submit">Actualizar Personal</Button>
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
