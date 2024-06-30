import React, { useEffect, useState } from "react";
import { DataTable } from "../components/DataTable";
import { Paginado } from "../components/Paginado";
import { SideBar } from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import { ContextProveedorDelete } from "../context/contextProveedor/ContextProveedorDelete";
import { ContextProveedortGet } from "../context/contextProveedor/ContextProveedorGet";
import { FormInsertProveedor } from "../forms/proveedores/FormInsertProveedor";
export const ProveedoresPage = () => {
    const [proveedores, setProveedores] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

   
    useEffect(()=>{
        const getProveedores=async()=>{
            const data=await ContextProveedortGet();
            setProveedores(data);
        };
        getProveedores();
    },[]);


    const handleProveedortAdded = (newProv) => {
        setProveedores([...proveedores, newProv]);
    };

    const handleProveedorDeleted = async (id) => {
        try {
            await ContextProveedorDelete(id);
            setProveedores(proveedores.filter(proveedor => proveedor.id !== id));
        } catch (error) {
            console.error("Error deleting proveedor:", error);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const titulos = ["Nombre", "Contacto", "Telefono", "Direccion"];

    return (
        <>
            <SideBar />
            <DataTable
                titulos={titulos}
                datos={proveedores}
                onDelete={handleProveedorDeleted} // Pasar la función de eliminar a DataTable
            />
            <Paginado />
            <AddButton onClick={openModal}>
                <FaPlus />
            </AddButton>
            {isModalOpen && (
                <FormInsertProveedor onClose={closeModal} onProveedorAdded={handleProveedortAdded} />
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
