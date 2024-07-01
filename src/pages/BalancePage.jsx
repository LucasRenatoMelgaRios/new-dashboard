import styled from "styled-components";
import { DataTable } from "../components/DataTable";
import { SideBar } from "../components/Sidebar";
import { Paginado } from "../components/Paginado";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ContextEgresoGet } from "../context/contextBalance/ContextEgresoGet";
import { ContextIngresoGet } from "../context/contextBalance/ContextIngresoGet";
import { FormInsertEgreso } from "../forms/egreso/FormInsertEgreso";
import { FormEditEgreso } from "../forms/egreso/FormEditEgreso";


export const BalancePage = () => {

    const [ingreso, setIngreso]=useState([]);
    const [egreso,setEgreso]=useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Estado para el modal de editar

    const[egresoToEdit, setEgresoToEdit]=useState(null);

    const titulosIngresos = ["Venta", "Ganancia Total", "Fecha"];
    const titulosEgresos = ["Concepto", "Monto", "Fecha"];

    useEffect(()=>{
        const fetchIngreso=async()=>{
            const data=await ContextIngresoGet();
            setIngreso(data);
        };
        fetchIngreso();
    },[]);

    useEffect(()=>{
        const FetchEgreso=async()=>{
            const data=await ContextEgresoGet();
            setEgreso(data);
        };
        FetchEgreso();
    },[]);

    const handleEgresoAdded=(newEgreso)=>{
        if(egresoToEdit){
            const updatedEgreso=egreso.map(egres=> egres.id ===newEgreso.id ? newEgreso:egres);
            setEgreso(updatedEgreso);
        }else{
            setEgreso([...egreso,newEgreso]);
        }
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
    };

    /* const handleEgresoDeleted=async(id)=>{
        try{
            await
        }
    } */

        const openAddModal=()=>{
            setIsAddModalOpen(true);
            setIsEditModalOpen(false);
            setEgresoToEdit(null);
        };

        const openEditModal=(id)=>{
            const egresos=egreso.find(egres=>egres.id===id);
            if(egresos){
                setEgresoToEdit(egresos);
                setIsEditModalOpen(true);
                setIsAddModalOpen(false);
            }
        };

        const closeModals=()=>{
            setIsAddModalOpen(false);
            setIsEditModalOpen(false);
            setEgresoToEdit(null);
        }

    return (
        <>
            <SideBar />
            <TablesContainer>
                <DataTable
                    titulos={titulosIngresos}
                    datos={ingreso}
                    onDelete={false}
                    onEdite={false}
                />
                <DataTable
                    titulos={titulosEgresos}
                    datos={egreso}
                    onDelete={handleEgresoAdded}
                    onEdite={openEditModal}
                />
            </TablesContainer>
            <AddButton onClick={openAddModal}>
                    <FaPlus />
                </AddButton>

                {isAddModalOpen && (
                <FormInsertEgreso onClose={closeModals} onEgresoAdded={handleProductAdded} />
            )}
            {isEditModalOpen && (
                <FormEditEgreso
                    onClose={closeModals}
                    onEgresoAdded={handleEgresoAdded}
                    egresoToEdit={egresoToEdit} // Pasa el proveedor a editar al formulario
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



const TablesContainer = styled.div`
    width: 100%;
    display: flex;

`;
