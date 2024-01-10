import React from "react";
import styled  from "styled-components";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    text: string,
    onClick?: () => void
}

const BaseButton = styled.button`
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};
  font-size: ${(props) => props.theme.regular};
  border: 0px;
  min-width:100px;
`

const RegularButton = styled(BaseButton)`
  padding:16px 32px;
  background-color: ${(props) => props.theme.primaryButtonColor};
  transition: .3s;
  color: ${(props) => props.theme.textColorOnTertiary};
  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
  }
  &:disabled {
    background-color: ${(props) => props.theme.primaryDisabledButtonColor};
    cursor: not-allowed;
  }
`

export const Button: React.FC<ButtonProps> = ({text, onClick, disabled}) => {
    return (<RegularButton disabled={disabled} onClick={() => onClick()}>{
        text
    }</RegularButton>)
}