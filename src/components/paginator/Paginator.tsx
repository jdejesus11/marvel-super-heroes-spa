import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Illustrations } from "../../assets/index";

export interface PaginatorProps {
  page: number;
  pages: number;
  onPageChange: () => void;
  ariaLabel: string;
}

const PageContainer = styled.li``;

const Page = styled.button<{ $selected?: boolean }>`
  font-size: ${(props) => props.theme.regular};
  display: inline-block;
  width: 50px;
  height: 50px;
  padding: 16px 16px;
  color: ${(props) => props.theme.textColorOnSecondary};
  -webkit-box-shadow: 0px 0px 3px 1px ${(props) => props.theme.textColorOnSecondary};
  -moz-box-shadow: 0px 0px 3px 1px ${(props) => props.theme.textColorOnSecondary};
  box-shadow: 0px 0px 3px 1px ${(props) => props.theme.textColorOnSecondary};
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
  background: ${(props) => props.theme.textColorOnTertiary};
  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnTertiary};
  }

  ${(props) =>
    props.$selected &&
    css`
      background: ${props.theme.primarySelectedButtonColor};
    `}
`;

const Icon = styled.img`
  max-width: 15px;
  max-height: 15px;
`;

const IconContainer = styled.button`
  font-size: ${(props) => props.theme.regular};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 16px 16px;
  color: ${(props) => props.theme.textColorOnSecondary};
  -webkit-box-shadow: 0px 0px 3px 1px ${(props) => props.theme.textColorOnSecondary};
  -moz-box-shadow: 0px 0px 3px 1px ${(props) => props.theme.textColorOnSecondary};
  box-shadow: 0px 0px 3px 1px ${(props) => props.theme.textColorOnSecondary};
  text-align: center;
  cursor: pointer;
  background: ${(props) => props.theme.textColorOnTertiary};
`;

const Container = styled.ul`
  display: flex;
  gap: 8px;
`;

export const Paginator: React.FC<PaginatorProps> = ({ onPageChange, pages, ariaLabel }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (pages <= 0) return;

  const onPageChangeEvent = (page: number) => {
    setCurrentPage(page);
    onPageChange();
  };

  const onPageGoForwardChangeEvent = () => {
    if (currentPage + 1 > pages) return;
    setCurrentPage(currentPage + 1);
    onPageChangeEvent(currentPage + 1);
  };

  const onPageGoBackwardChangeEvent = () => {
    if (currentPage - 1 <= 0) return;
    setCurrentPage(currentPage - 1);
    onPageChangeEvent(currentPage - 1);
  };

  return (
    <Container aria-label={ariaLabel}>
      <PageContainer>
        <IconContainer onClick={() => onPageGoBackwardChangeEvent()}>
          <Icon src={Illustrations.LeftArrow} alt="go backward" />
        </IconContainer>
      </PageContainer>
      {Array.from({ length: pages }).map((__, index) => (
        <PageContainer key={index}>
          <Page aria-current={currentPage === index + 1} onClick={() => onPageChangeEvent(index + 1)} $selected={currentPage === index + 1}>
            {index + 1}
          </Page>
        </PageContainer>
      ))}
      <PageContainer>
        <IconContainer onClick={() => onPageGoForwardChangeEvent()}>
          <Icon src={Illustrations.RigthArrow} alt="go forward" />
        </IconContainer>
      </PageContainer>
    </Container>
  );
};
