import { DataTable } from "../components/DataTable";
import { Paginado } from "../components/Paginado";
import { SideBar } from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";


export const ProductosPage = () => {

    const titulos = ["Nombre", "Descripcion", "Codigo de barra", "Precio", "Stock", "Proveedor"];
    
    const datos = [
        {
            "Nombre": "Cereal",
            "Descripcion": "prueba",
            "Codigo de barra": "SDADADS34",
            "Precio": "200",
            "Stock": 400,
            "Proveedor": "Santa Anita. INC"
        },
        {
            "Nombre": "Estiercol",
            "Descripcion": "prueba",
            "Codigo de barra": "SDADADS34",
            "Precio": "200",
            "Stock": 400,
            "Proveedor": "Santa Anita. INC"
        },
        {
            "Nombre": "aea",
            "Descripcion": "prueba",
            "Codigo de barra": "SDADADS34",
            "Precio": "200",
            "Stock": 400,
            "Proveedor": "Santa Anita. INC"
        },
 
    ];

    return (
        <>
            <SideBar/>
            <DataTable 
                titulos={titulos}
                datos={datos}
            />
        <Paginado/>
        <AddButton>
                    <FaPlus />
                </AddButton>
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