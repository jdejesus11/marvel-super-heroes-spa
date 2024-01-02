import React from "react";
import styled  from "styled-components";

export interface LinkButtonProps extends React.HTMLProps<HTMLButtonElement> {
    text: string,
    onClick?: () => void
}

const BaseLinkButton = styled.a`
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};
  font-size: ${(props) => props.theme.regular};
`

const StyledLinkButton = styled(BaseLinkButton)`
  transition: .3s;
  color: ${(props) => props.theme.textColorOnSecondary};
  &:hover {
    color: ${(props) => props.theme.primaryHoverColor};
  }
  &:active {
    color: ${(props) => props.theme.primaryHoverColor};
  }
`
export const LinkButton: React.FC<LinkButtonProps> = ({text, onClick }) => {
    return (<StyledLinkButton onClick={() => onClick?.() } >{
        text
    }</StyledLinkButton>)
}