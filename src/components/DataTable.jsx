import React from 'react';
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";

export const DataTable = ({ titulos, datos, onDelete }) => {

    const handleDeleteClick = (id) => {
        onDelete(id);
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
                            <Th>Acciones</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((fila, indexFila) => (
                            <tr key={indexFila}>
                                {titulos.map((titulo, indexColumna) => (
                                    <Td key={indexColumna}>{fila[titulo]}</Td>
                                ))}
                                <Td>
                                    <ActionContainer>
                                        <ActionButton>
                                            <FaEdit />
                                        </ActionButton>
                                        <ActionButton onClick={() => handleDeleteClick(fila.id)}>
                                            <FaTrash />
                                        </ActionButton>
                                    </ActionContainer>
                                </Td>
                            </tr>
                        ))}
                    </tbody>
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

const TableContainer = styled.div`
    width: 50%;
    overflow-x: auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #3ba5b3;
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
`;
