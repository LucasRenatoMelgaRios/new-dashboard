import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DataTable } from "../components/DataTable";
import { Paginado } from "../components/Paginado";
import { SideBar } from "../components/Sidebar";
import { SearchBar } from "../components/Search";
import { FaPlus } from "react-icons/fa";
import { ContextVentaDelete } from "../context/contextVenta/ContextVentaDelete";
import { ContextVentaGet } from "../context/contextVenta/ContextVentaGet";
import { FormInsertVenta } from "../forms/ventas/FormInsertVenta";
import { FormEditarVenta } from "../forms/ventas/FormEditVenta";
export const VentasPage = () => {
    const [ventas, setVentas] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [ventaToEdit, setVentaToEdit] = useState(null);
    const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
    const [searchField, setSearchField] = useState("Producto"); // Estado para el campo de búsqueda

    const titulos = ["Producto", "Cantidad", "Preciodeventa", "Fechadeventa"];

    useEffect(() => {
        const fetchVentas = async () => {
            const data = await ContextVentaGet();
            setVentas(data);
        };

        fetchVentas();
    }, []);

    const handleVentaAdded = (newVenta) => {
        if (ventaToEdit) {
            const updatedVentas = ventas.map(venta =>
                venta.id === newVenta.id ? newVenta : venta
            );
            setVentas(updatedVentas);
        } else {
            setVentas([...ventas, newVenta]);
        }
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
    };

    const handleVentaDeleted = async (id) => {
        try {
            await ContextVentaDelete(id);
            setVentas(ventas.filter(venta => venta.id !== id));
        } catch (error) {
            console.error("Error deleting venta:", error);
        }
    };

    const openAddModal = () => {
        setIsAddModalOpen(true);
        setIsEditModalOpen(false);
        setVentaToEdit(null);
    };

    const openEditModal = (id) => {
        const venta = ventas.find(venta => venta.id === id);
        if (venta) {
            setVentaToEdit(venta);
            setIsEditModalOpen(true);
            setIsAddModalOpen(false);
        }
    };

    const closeModals = () => {
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
        setVentaToEdit(null);
    };

    // Filtrar ventas por el término de búsqueda y campo seleccionado
    const filteredVentas = ventas.filter(venta => {
        const fieldValue = venta[searchField];
        return fieldValue && fieldValue.toLowerCase().includes(searchTerm.toLowerCase());
    });
    

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
                datos={filteredVentas}
                onDelete={handleVentaDeleted}
                onEdite={openEditModal}
            />
            <Paginado />
            <AddButton onClick={openAddModal}>
                <FaPlus />
            </AddButton>
            {isAddModalOpen && (
                <FormInsertVenta
                    onClose={closeModals}
                    onVentaAdded={handleVentaAdded}
                />
            )}
            {isEditModalOpen && (
                <FormEditarVenta
                    onClose={closeModals}
                    onVentaAdded={handleVentaAdded}
                    ventaToEdit={ventaToEdit}
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
