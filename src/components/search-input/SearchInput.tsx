import React from "react";
import styled from "styled-components";
import { Illustrations } from "../../assets/index";

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  placeholder: string;
  ariaLabel: string;
  onChange?: (value: string) => void;
}

const BaseInput = styled.input`
  font-size: ${(props) => props.theme.regular};
  border: 1px solid ${(props) => props.theme.textColorOnSecondary};
`;

const StyledSearchInput = styled(BaseInput)`
  flex: 1;
  padding: 16px 16px;
  color: ${(props) => props.theme.textColorOnSecondary};
  max-height: 50px;
`;

const GlassIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding-left: 16px;
  right: 16px;
  top: 14px;
  background: ${(props) => props.theme.textColorOnTertiary};
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  min-width: 200px;
`;

/*
const StyledDropDownList = styled(BaseDropDownList)`
  position: relative;
  padding: 16px 16px;
  color: ${(props) => props.theme.textColorOnSecondary};
  &:disabled {
    background-color: ${(props) => props.theme.primaryDisabledButtonColor};
    cursor: not-allowed;
  }
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledOptionsList = styled.ul`
  background-color: ${(props) => props.theme.textColorOnTertiary};
  position: absolute;
  width: 100%;
  display: block;
  color: ${(props) => props.theme.textColorOnSecondary};
  border: 1px solid ${(props) => props.theme.textColorOnSecondary};
  border-top: 0;
`;

const StyledOptionsItem = styled.li`
  display: block;
  transition: 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnTertiary};
  }
`;

const StyledOptionsItemContent = styled.p`
  padding: 16px 16px;
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const DownArrowIcon = styled.img`
  width: 25px;
  height: 25px;
`; */

export const SearchInput: React.FC<SearchInputProps> = ({ placeholder, ariaLabel }) => {
  return (
    <Container>
      <StyledSearchInput aria-label={ariaLabel} placeholder={placeholder} />
      <IconContainer>
        <GlassIcon src={Illustrations.Glass} aria-hidden="true" />
      </IconContainer>
    </Container>
  );
};
