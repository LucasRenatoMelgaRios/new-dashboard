import { useEffect, useState } from "react";
import { DataTable } from "../components/DataTable";
import { Paginado } from "../components/Paginado";
import { SideBar } from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import { ContextProductGet } from "../context/contextProduct/ContextProductGet";
import { FormInsertProducts } from "../forms/productos/FormInsertProducts";


export const ProductosPage = () => {
    const[productos, setProductos]=useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(()=>{
        const getProducts=async()=>{
            const data=await ContextProductGet();
            setProductos(data);
        };
        getProducts();
    },[]);

    const handleProductAdded = (newProduct) => {
        setProductos([...productos, newProduct]);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const titulos = ["Nombre", "Descripcion", "Codigo de barra", "Precio", "Stock", "Proveedor"];
    
    

    return (
        <>
            <SideBar/>
            <DataTable 
                titulos={titulos}
                datos={productos}
            />
        <Paginado/>
        <AddButton onClick={openModal}>
                    <FaPlus />
                </AddButton>
                {isModalOpen && (
                <FormInsertProducts onClose={closeModal} onProductAdded={handleProductAdded} />
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