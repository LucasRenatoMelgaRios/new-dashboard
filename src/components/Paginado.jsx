import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const PaginadoMainContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: linear-gradient(
    to bottom,
    #0582a8,
    #005564
  ); /* Gradiente vertical de #0577a8 a #005380 */
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-top-left-radius: 90px;
  border-top-right-radius: 90px;
  border: 1px solid #0577a8; /* Borde sólido para el efecto de luz LED */
  box-shadow: 0 0 10px 5px #0d8aa0; /* Sombra para el efecto de luz LED */
  transition: width 0.5s ease;

  @media (max-width: 1030px) {
    width: 60%;
  }

  @media (max-width: 930px) {
    width: 70%;
  }

  @media (max-width: 730px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 100%;
    border-radius: 0;
  }

  @media (max-width: 455px) {
    gap: 10px;
  }

  @media (max-width: 400px) {
    gap: 5px;
  }
`;

const SimpleLabel = styled.label`
  color: #ffff;

  @media (max-width: 323px) {
    font-size: 0.6rem;
  }
`;

const SimpleButton = styled.button`
  padding: 5px;
  border: 1px;
  border-radius: 90px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 400px) {
    font-size: 0.7rem;
  }

  @media (max-width: 348px) {
    font-size: 0.5rem;
  }
`;

const SimpleInput = styled.input`
  width: 35px;
  text-align: center;
  border-radius: 90px;
  border: 0;
  margin-top: 3px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const WhiteArrowBackIcon = styled(IoIosArrowBack)`
  color: #ffffff;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

const WhiteArrowNextIcon = styled(IoIosArrowForward)`
  color: #ffffff;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

export function Paginado() {


  return (
    <>
      <PaginadoMainContainer>
        <SimpleButton>
          Ir al inicio
        </SimpleButton>

          <WhiteArrowBackIcon
          />

        <SimpleLabel>Página:</SimpleLabel>
        <SimpleInput
          type="number"
          min="1"
          // onChange={handleInputChange}
          // onKeyDown={handleInputKeyPress}
        />
        <SimpleLabel>De: 5</SimpleLabel>
          <WhiteArrowNextIcon/>

        <SimpleButton>
          Ir al final
        </SimpleButton>
      </PaginadoMainContainer>
    </>
  );
}