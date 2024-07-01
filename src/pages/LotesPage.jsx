import { DataTable } from "../components/DataTable";
import { Paginado } from "../components/Paginado";
import { SideBar } from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserInfo from "../components/UserInfo";
import LogoutButton from "../components/LogoutButton";
import { ContextLotesGet } from '../context/contextLotes/ContextLotesGet';
import { FormInsertLotes } from '../forms/lotes/FormInsertLotes';
import { ContextLotesDelete } from '../context/contextLotes/ContextLotesDelete';
import { FormEditLotes } from '../forms/lotes/FormEditLotes';

export const LotesPage = () => {
  const [lotes, setLotes] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [loteToEdit, setLoteToEdit] = useState(null);

  useEffect(() => {
    const fetchLotes = async () => {
      const data = await ContextLotesGet();
      setLotes(data);
    };
    fetchLotes();
  }, []);

  const handleLoteAdded = (newLote) => {
    if (loteToEdit) {
      const updatedLotes = lotes.map(lote =>
        lote.id === newLote.id ? newLote : lote
      );
      setLotes(updatedLotes);
    } else {
      setLotes([...lotes, newLote]);
    }
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
  };

  const handleLoteDeleted = async (id) => {
    try {
      await ContextLotesDelete(id);
      setLotes(lotes.filter(lote => lote.id !== id));
    } catch (error) {
      console.error('Error deleting lote:', error);
    }
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
    setIsEditModalOpen(false);
    setLoteToEdit(null);
  };

  const openEditModal = (id) => {
    const lote = lotes.find(lote => lote.id === id);
    if (lote) {
      setLoteToEdit(lote);
      setIsEditModalOpen(true);
      setIsAddModalOpen(false);
    }
  };

  const closeModals = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setLoteToEdit(null);
  };

  const titulos = ["Nombre", "Cantidad", "Fecha"];

  return (
    <>
      <SideBar />
      
      <DataTable 
        titulos={titulos}
        datos={lotes}
        onDelete={handleLoteDeleted}
        onEdite={openEditModal}
      />
      <Paginado />
      <AddButton onClick={openAddModal}>
        <FaPlus />
      </AddButton>
      {isAddModalOpen && (
        <FormInsertLotes onClose={closeModals} onLoteAdded={handleLoteAdded} />
      )}
      {isEditModalOpen && (
        <FormEditLotes
          onClose={closeModals}
          onLoteUpdated={handleLoteAdded}
          loteToEdit={loteToEdit}
        />
      )}
      <Logout>
        <LogoutButton />
      </Logout>
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
