import React from 'react';
import styled from 'styled-components';

export const SearchBar = ({ searchTerm, setSearchTerm, searchField, setSearchField, fields }) => {
    return (
        <SearchContainer>
            <SearchInput
                type="text"
                placeholder={`Buscar por ${searchField.toLowerCase()}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchSelect value={searchField} onChange={(e) => setSearchField(e.target.value)}>
                {fields.map(field => (
                    <option key={field} value={field}>{field}</option>
                ))}
            </SearchSelect>
        </SearchContainer>
    );
};

const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
    gap: 10px;
`;

const SearchInput = styled.input`
    width: 50%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
`;

const SearchSelect = styled.select`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
`;
