import React from "react";
import styled, { createGlobalStyle } from "styled-components";

// Add this GlobalStyle component to override browser autofill styles
const GlobalStyle = createGlobalStyle`
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.bg} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.text_secondary} !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  padding: 0px 4px;
  text-transform: uppercase;
`;

const OutlinedInput = styled.div`
  border-radius: 8px;
  border: 0.5px solid ${({ theme }) => theme.text_secondary + 70};
  background-color: transparent;
  color: ${({ theme }) => theme.text_secondary};
  outline: none;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  &:focus-within {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 14px;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text_secondary};
  &:focus {
    outline: none;
  }
`;

const TextInput = ({
  label,
  placeholder,
  name,
  value,
  handelChange,
  textArea,
  rows,
  columns,
}) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Label>{label}</Label>
        <OutlinedInput>
          <Input
            as={textArea ? "textarea" : "input"}
            name={name}
            rows={rows}
            columns={columns}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handelChange(e)}
          />
        </OutlinedInput>
      </Container>
    </>
  );
};

export default TextInput;
