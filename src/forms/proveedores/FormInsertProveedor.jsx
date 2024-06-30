import React, { useState } from 'react';
import styled from 'styled-components';
import { ContextProveedorInsert } from '../../context/contextProveedor/ContextProveedorInsert';

export const FormInsertProveedor = ({ onClose, onProveedorAdded }) => {
    const [newProv, setNewProv] = useState({
        Nombre: '',
        Contacto: '',
        Telefono: '',
        Direccion: '',
    });

    const handleInputChangeInsert = (e) => {
        const { name, value } = e.target;
        setNewProv({ ...newProv, [name]: value });
    };

    const handleSubmitInsert = async (e) => {
        e.preventDefault();
        try {
            const addedProveedor = await ContextProveedorInsert(newProv);
            onProveedorAdded(addedProveedor);
            onClose();
        } catch (error) {
            console.error('Error inserting data:', error);
        }
    };

    return (
        <ModalOverlay>
            <ModalContainer>
                <h1>Nuevo Proveedor</h1>
                <FormContainer onSubmit={handleSubmitInsert}>
                    <Input type="text" name="Nombre" placeholder="Nombre" value={newProv.Nombre} onChange={handleInputChangeInsert} required />
                    <Input type="text" name="Contacto" placeholder="Contacto" value={newProv.Contacto} onChange={handleInputChangeInsert} required />
                    <Input type="text" name="Telefono" placeholder="Telefono" value={newProv.Telefono} onChange={handleInputChangeInsert} required />
                    <Input type="text" name="Direccion" placeholder="Direccion" value={newProv.Direccion} onChange={handleInputChangeInsert} required />
                    <Button type="submit">Agregar Proveedor</Button>
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
