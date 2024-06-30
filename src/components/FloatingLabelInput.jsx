// src/components/FloatingLabelInput.jsx
import { useState } from 'react';
import styled, { css } from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 95%;
  padding: 10px;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: none;

  &:focus {
    outline: none;
    border-color: #30acac;
    border: 2px solid #30acac;
    color: #30acac;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0;
    left: 10px;
    font-size: 0.8rem;
    color: #30acac;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease;
  background: #fff;
  padding: 0 5px;
  pointer-events: none;
  font-size: 1.2rem;
  color: #aaa;

  ${({ hasContent }) =>
    hasContent &&
    css`
      top: 0;
      left: 10px;
      font-size: 0.8rem;
      color: #30acac;
    `}
`;

const FloatingLabelInput = ({ label, value, onChange, ...props }) => {
  const [hasContent, setHasContent] = useState(value !== '');

  const handleChange = (e) => {
    setHasContent(e.target.value !== '');
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <InputContainer>
      <StyledInput {...props} value={value} onChange={handleChange} placeholder=" " />
      <StyledLabel hasContent={hasContent}>{label}</StyledLabel>
    </InputContainer>
  );
};

export default FloatingLabelInput;
