import { useEffect, useState } from "react";
import { DataTable } from "../components/DataTable";
import { Paginado } from "../components/Paginado";
import { SideBar } from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import { ContextProductGet } from "../context/contextProduct/ContextProductGet";
import { FormInsertProducts } from "../forms/productos/FormInsertProducts";
import { ContextProductDelete } from "../context/contextProduct/ContextProductDelete";
import { FormEditarProducts } from "../forms/productos/FormEditarProducts";


export const ProductosPage = () => {
    const[productos, setProductos]=useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Estado para el modal de editar
    const [productosToEdit, setProductosToEdit] = useState(null); // Estado para almacenar el proveedor a editar

    useEffect(()=>{
        const getProducts=async()=>{
            const data=await ContextProductGet();
            console.log("uwu");
            setProductos(data);
        };
        getProducts();
    },[]);

    const handleProductAdded = (newProduct) => {
        // Si estamos editando, actualizamos el proveedor en la lista
        if (productosToEdit) {
            const updatedProductos = productos.map(prod =>
                prod.id === newProduct.id ? newProduct : prod
            );
            setProductos(updatedProductos);
        } else {
            // Si estamos agregando, agregamos el nuevo proveedor a la lista
            setProductos([...productos, newProduct]);
        }
        setIsAddModalOpen(false); // Cierra el modal después de agregar
        setIsEditModalOpen(false); // Cierra el modal de edición si estaba abierto
    };

    const handleProductoDeleted = async (id) => {
        try {
            await ContextProductDelete(id);
            setProductos(productos.filter(prod => prod.id !== id));
        } catch (error) {
            console.error("Error deleting proveedor:", error);
        }
    };
    const openAddModal = () => {
        setIsAddModalOpen(true);
        setIsEditModalOpen(false); // Asegura que el modal de edición esté cerrado al abrir el de agregar
        setProductosToEdit(null); // Limpia el proveedor a editar al abrir el modal de agregar
    };
    const openEditModal = (id) => {
        const producto = productos.find(prod => prod.id === id);
        if (producto) {
            setProductosToEdit(producto); // Establece el proveedor a editar
            setIsEditModalOpen(true); // Abre el modal de edición
            setIsAddModalOpen(false); // Asegura que el modal de agregar esté cerrado al abrir el de editar
        }
    };

    const closeModals = () => {
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
        setProductosToEdit(null); // Limpia el proveedor a editar después de cerrar los modales
    };


    const titulos = ["nombre", "descripcion", "codigo_barra", "precio", "stock", "proveedor"];
    
    

    return (
        <>
            <SideBar/>
            <DataTable 
                titulos={titulos}
                datos={productos}
                onDelete={handleProductoDeleted}
                onEdite={openEditModal}
            />
        <Paginado/>
        <AddButton onClick={openAddModal}>
                    <FaPlus />
                </AddButton>
                {isAddModalOpen && (
                <FormInsertProducts onClose={closeModals} onProductAdded={handleProductAdded} />
            )}
            {isEditModalOpen && (
                <FormEditarProducts
                    onClose={closeModals}
                    onProductAdded={handleProductAdded}
                    productosToEdit={productosToEdit} // Pasa el proveedor a editar al formulario
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