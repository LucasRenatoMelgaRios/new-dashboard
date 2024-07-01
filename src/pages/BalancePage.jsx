import styled from "styled-components";
import { DataTable } from "../components/DataTable";
import { SideBar } from "../components/Sidebar";
import { Paginado } from "../components/Paginado";
import { FaPlus } from "react-icons/fa";


export const BalancePage = () => {

    const titulosIngresos = ["Venta", "Ganancia Total", "Fecha"];
    const titulosEgresos = ["Concepto", "Monto", "Fecha"];

    const datosIngresos = [
        {
            "Venta": "Correa",
            "Ganancia Total": "400",
            "Fecha": "2024-02-22"
        },
        {
            "Venta": "Jeringuilla",
            "Ganancia Total": "200",
            "Fecha": "2024-02-22"
        },
        {
            "Venta": "Comida",
            "Ganancia Total": "249",
            "Fecha": "2024-02-22"
        },
    ];

    const datosEgresos = [
        {
            "Concepto": "Correa",
            "Monto": "400",
            "Fecha": "2024-02-22"
        },
        {
            "Concepto": "Jeringuilla",
            "Monto": "200",
            "Fecha": "2024-02-22"
        },
        {
            "Concepto": "Comida",
            "Monto": "249",
            "Fecha": "2024-02-22"
        },
    ];

    return (
        <>
            <SideBar />
            <TablesContainer>
                <DataTable
                    titulos={titulosIngresos}
                    datos={datosIngresos}
                    showActions={false}

                />
                <DataTable
                    titulos={titulosEgresos}
                    datos={datosEgresos}
                    showActions={false}
                />
            </TablesContainer>
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



const TablesContainer = styled.div`
    width: 100%;
    display: flex;

`;
