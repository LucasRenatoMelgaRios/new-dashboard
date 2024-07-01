import { DataTable } from "../components/DataTable";
import { Paginado } from "../components/Paginado";
import { SideBar } from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import styled from "styled-components";
import UserInfo from "../components/UserInfo";
import LogoutButton from "../components/LogoutButton";
import { ContextPersonalGet } from '../context/contextPersonal/ContextPersonalGet';
import { FormInsertPersonal } from '../forms/personal/FormInsertPersonal';
import { ContextPersonalDelete } from '../context/contextPersonal/ContextPersonalDelete';
import { FormEditarPersonal } from '../forms/personal/FormEditarPersonal';


export const PersonalPage = () => {

    const [personal, setPersonal] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [personalToEdit, setPersonalToEdit] = useState(null);

  useEffect(() => {
    const fetchPersonal = async () => {
      const data = await ContextPersonalGet();
      setPersonal(data);
    };
    fetchPersonal();
  }, []);

  const handlePersonalAdded = (newPersonal) => {
    if (personalToEdit) {
      const updatedPersonal = personal.map(per =>
        per.id === newPersonal.id ? newPersonal : per
      );
      setPersonal(updatedPersonal);
    } else {
      setPersonal([...personal, newPersonal]);
    }
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
  };

  const handlePersonalDeleted = async (id) => {
    try {
      await ContextPersonalDelete(id);
      setPersonal(personal.filter(p => p.id !== id));
    } catch (error) {
      console.error('Error deleting personal:', error);
    }
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
    setIsEditModalOpen(false);
    setPersonalToEdit(null);
  };

  const openEditModal = (id) => {
    const person = personal.find(p => p.id === id);
    if (person) {
      setPersonalToEdit(person);
      setIsEditModalOpen(true);
      setIsAddModalOpen(false);
    }
  };

  const closeModals = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setPersonalToEdit(null);
  };

    const titulos = ["Nombre", "Apellidos", "Cargo", "Fecha de Contratación", "Salario"];
    
    

    return (
        <>
        
            <SideBar/>
            
            <DataTable 
                titulos={titulos}
                datos={personal}
                onDelete={handlePersonalDeleted}
                onEdite={openEditModal}
            />
            <Paginado/>
            <AddButton onClick={openAddModal}>
                    <FaPlus />
                </AddButton>
                {isAddModalOpen && (
        <FormInsertPersonal onClose={closeModals} onPersonalAdded={handlePersonalAdded} />
      )}
      {isEditModalOpen && (
        <FormEditarPersonal
        onClose={closeModals}
          onPersonalAdded={handlePersonalAdded}
          personalToEdit={personalToEdit}
        /> )}
                <Logout>
                    <LogoutButton/>
                </Logout>
                <UserInfo/>
        </>
    );
};
const Logout = styled.button`
    position: absolute;
    bottom: 60px;
    right: 20px;
    background-color: transparent;
    color: #fff;
    border: none;
    padding: 15px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  
    

    svg {
        font-size: 20px;
    }
`;
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