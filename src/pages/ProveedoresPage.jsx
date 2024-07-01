import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DataTable } from "../components/DataTable";
import { Paginado } from "../components/Paginado";
import { SideBar } from "../components/Sidebar";
import { SearchBar } from "../components/Search";
import { FaPlus } from "react-icons/fa";
import { ContextProveedorDelete } from "../context/contextProveedor/ContextProveedorDelete";
import { ContextProveedortGet } from "../context/contextProveedor/ContextProveedorGet";
import { FormInsertProveedor } from "../forms/proveedores/FormInsertProveedor";
import { FormEditarProveedor } from "../forms/proveedores/FormEditarProveedor";
import { SuccessMessage } from "../components/SuccesMessage";

export const ProveedoresPage = () => {
    const [proveedores, setProveedores] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [proveedorToEdit, setProveedorToEdit] = useState(null);
    const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
    const [searchField, setSearchField] = useState("Nombre"); // Estado para el campo de búsqueda

    useEffect(() => {
        const getProveedores = async () => {
            const data = await ContextProveedortGet();
            setProveedores(data);
        };
        getProveedores();
    }, []);

    const handleProveedorAdded = (newProv) => {
        if (proveedorToEdit) {
            const updatedProveedores = proveedores.map(prov =>
                prov.id === newProv.id ? newProv : prov
            );
            setProveedores(updatedProveedores);
        } else {
            setProveedores([...proveedores, newProv]);
        }
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
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
        setIsEditModalOpen(false);
        setProveedorToEdit(null);
    };

    const openEditModal = (id) => {
        const proveedor = proveedores.find(prov => prov.id === id);
        if (proveedor) {
            setProveedorToEdit(proveedor);
            setIsEditModalOpen(true);
            setIsAddModalOpen(false);
        }
    };

    const closeModals = () => {
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
        setProveedorToEdit(null);
    };

    const titulos = ["Nombre", "Contacto", "Telefono", "Direccion"];

    // Filtrar proveedores por el término de búsqueda y campo seleccionado
    const filteredProveedores = proveedores.filter(proveedor =>
        proveedor[searchField].toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <SideBar />
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                searchField={searchField}
                setSearchField={setSearchField}
                fields={titulos}
            />
            <DataTable
                titulos={titulos}
                datos={filteredProveedores}
                onDelete={handleProveedorDeleted}
                onEdite={openEditModal}
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
                    proveedorToEdit={proveedorToEdit}
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
