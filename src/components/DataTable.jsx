import React from 'react';
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";


export const DataTable = ({ titulos, datos, onDelete, onEdite, showActions = true }) => {

    const handleDeleteClick = (id) => {
        onDelete(id);
    };

    const handleEditClick = (id) => {
        onEdite(id);
    };

    return (
        <MainContainer>
            <TableContainer>
                <Table>
                    <thead>
                        <tr>
                            {titulos.map((titulo, index) => (
                                <Th key={index}>{titulo}</Th>
                            ))}
                            {showActions && <Th>Acciones</Th>}
                        </tr>
                    </thead>
                    <TBody>
                        {datos.map((fila, indexFila) => (
                            <tr key={indexFila}>
                                {titulos.map((titulo, indexColumna) => (
                                    <Td key={indexColumna}>{fila[titulo]}</Td>
                                ))}
                                {showActions && (
                                    <Td>
                                        <ActionContainer>
                                            <ActionButton onClick={() => handleEditClick(fila.id)}>
                                                <FaEdit />
                                            </ActionButton>
                                            <ActionButton onClick={() => handleDeleteClick(fila.id)}>
                                                <FaTrash />
                                            </ActionButton>
                                        </ActionContainer>
                                    </Td>
                                )}
                            </tr>
                        ))}
                    </TBody>
                </Table>
            </TableContainer>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const TBody = styled.tbody`

@media (max-width: 688px) {
       font-size: 0.9rem;
    }
    @media (max-width: 603px) {
       font-size: 0.8rem;
    }
    @media (max-width: 540px) {
       font-size: 0.7rem;
    }

`;

const TableContainer = styled.div`
    width: 50%;
    overflow-x: auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #3ba5b3;

    @media (max-width: 1320px) {
        transition: width 0.5s ease;

        width: 60%;
    }
    @media (max-width: 1098px) {
        transition: width 0.5s ease;
        width: 70%;
    }
    @media (max-width: 940px) {
        transition: width 0.5s ease;
        width: 80%;
    }
    @media (max-width: 823px) {
        transition: width 0.5s ease;
        width: 90%;
    }
 
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    color: #fff;
`;

const Th = styled.th`
    padding: 10px;
    color: #fff;
    font-weight: bold;
    text-align: center;

    @media (max-width: 733px) {
        font-size: 0.9rem;
    }

    @media (max-width: 580px) {
        font-size: 0.8rem;
    }

    @media (max-width: 535px) {
        font-size: 0.7rem;
    }
`;

const Td = styled.td`
    padding: 10px;
    text-align: center;
`;

const ActionContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;




`;

const ActionButton = styled.button`
    background-color: #135669;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #0a3c4b;
    }

    svg {
        font-size: 16px;
    }

    @media (max-width: 500px) {
        width: 27px;
        height: 27px;
  }

    @media (max-width: 500px) {
    svg {
        font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    svg {
        font-size: 0.8rem;
    }
  }

    
`;
