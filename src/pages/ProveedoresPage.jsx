import React, { useEffect, useState } from "react";
import { DataTable } from "../components/DataTable";
import { Paginado } from "../components/Paginado";
import { SideBar } from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import { ContextProveedorDelete } from "../context/contextProveedor/ContextProveedorDelete";
import { ContextProveedortGet } from "../context/contextProveedor/ContextProveedorGet";
import { FormInsertProveedor } from "../forms/proveedores/FormInsertProveedor";
import { FormEditarProveedor } from "../forms/proveedores/FormEditarProveedor";

export const ProveedoresPage = () => {
    const [proveedores, setProveedores] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false); // Estado para el modal de agregar
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Estado para el modal de editar
    const [proveedorToEdit, setProveedorToEdit] = useState(null); // Estado para almacenar el proveedor a editar

    useEffect(() => {
        const getProveedores = async () => {
            const data = await ContextProveedortGet();
            setProveedores(data);
        };
        getProveedores();
    }, []);

    const handleProveedorAdded = (newProv) => {
        // Si estamos editando, actualizamos el proveedor en la lista
        if (proveedorToEdit) {
            const updatedProveedores = proveedores.map(prov =>
                prov.id === newProv.id ? newProv : prov
            );
            setProveedores(updatedProveedores);
        } else {
            // Si estamos agregando, agregamos el nuevo proveedor a la lista
            setProveedores([...proveedores, newProv]);
        }
        setIsAddModalOpen(false); // Cierra el modal después de agregar
        setIsEditModalOpen(false); // Cierra el modal de edición si estaba abierto
    };

    const handleProveedorDeleted = async (id) => {
        try {
            await ContextProveedorDelete(id);
            setProveedores(proveedores.filter(proveedor => proveedor.id !== id));
        } catch (error) {
            console.error("Error deleting proveedor:", error);
        }
    };

    const openAddModal = () => {
        setIsAddModalOpen(true);
        setIsEditModalOpen(false); // Asegura que el modal de edición esté cerrado al abrir el de agregar
        setProveedorToEdit(null); // Limpia el proveedor a editar al abrir el modal de agregar
    };

    const openEditModal = (id) => {
        const proveedor = proveedores.find(prov => prov.id === id);
        if (proveedor) {
            setProveedorToEdit(proveedor); // Establece el proveedor a editar
            setIsEditModalOpen(true); // Abre el modal de edición
            setIsAddModalOpen(false); // Asegura que el modal de agregar esté cerrado al abrir el de editar
        }
    };

    const closeModals = () => {
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
        setProveedorToEdit(null); // Limpia el proveedor a editar después de cerrar los modales
    };

    const titulos = ["Nombre", "Contacto", "Telefono", "Direccion"];

    return (
        <>
            <SideBar />
            <DataTable
                titulos={titulos}
                datos={proveedores}
                onDelete={handleProveedorDeleted}
                onEdite={openEditModal} // Pasa la función de editar a DataTable
            />
            <Paginado />
            <AddButton onClick={openAddModal}>
                <FaPlus />
            </AddButton>
            {isAddModalOpen && (
                <FormInsertProveedor
                    onClose={closeModals}
                    onProveedorAdded={handleProveedorAdded}
                />
            )}
            {isEditModalOpen && (
                <FormEditarProveedor
                    onClose={closeModals}
                    onProveedorAdded={handleProveedorAdded}
                    proveedorToEdit={proveedorToEdit} // Pasa el proveedor a editar al formulario
                />
            )}
        </>
    );
};

const AddButton = styled.button`
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: #135669;
    color: #fff;
    border: none;
    padding: 15px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: #0a3c4b;
    }

    svg {
        font-size: 20px;
    }
`;
