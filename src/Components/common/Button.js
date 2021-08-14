import React from "react";
import styled, { css } from "styled-components";

export const Button = ({ value, width, marginTop, onClick, type }) => {
  return (
    <StyledButton type={type} width={width} marginTop={marginTop} onClick={onClick}>
      {value}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${({ theme }) => theme.flexSet("center", "center")}
  width: ${({ width }) => width || "100%"};
  height: 40px;
  padding: 0 15px;
  margin-top: ${({ marginTop }) => marginTop || "0"};
  background: ${({ theme }) => theme.color.button};
  border-radius: 5px;
  color: ${({ theme }) => theme.color.fontWhite};
  font-size: 1rem;
  font-weight: 600;

  ${({ theme }) =>
    css`
      &:hover {
        background: ${theme.color.buttonHover};
      }
    `}
`;

Button.defalutProps = {
  type: "button",
};

export default Button;
