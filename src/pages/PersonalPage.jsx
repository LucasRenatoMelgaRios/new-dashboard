import { DataTable } from "../components/DataTable";
import { Paginado } from "../components/Paginado";
import { SideBar } from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";


export const PersonalPage = () => {

    const titulos = ["Nombre", "Apellidos", "Cargo", "Fecha de Contratación", "Salario"];
    
    const datos = [
        {
            "Nombre": "Lucas",
            "Apellidos": "Melgar",
            "Cargo": "Dependiente",
            "Fecha de Contratación": "2020-05-03",
            "Salario": 400
        },
        {
            "Nombre": "Ana",
            "Apellidos": "Gómez",
            "Cargo": "Asistente",
            "Fecha de Contratación": "2021-03-15",
            "Salario": 1500
        },
        {
            "Nombre": "Juan",
            "Apellidos": "Pérez",
            "Cargo": "Gerente",
            "Fecha de Contratación": "2019-08-12",
            "Salario": 2000
        },
        {
            "Nombre": "Pepe",
            "Apellidos": "Gonzales",
            "Cargo": "Proveedor",
            "Fecha de Contratación": "2018-03-02",
            "Salario": 1200
        }
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