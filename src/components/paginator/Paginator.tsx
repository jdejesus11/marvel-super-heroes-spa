import { off } from "process";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Illustrations } from "../../assets/index";

export interface PaginatorProps {
  page: number;
  pages: number;
  onPageChange: () => void;
  ariaLabel: string;
  offset?: number;
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

export const Paginator: React.FC<PaginatorProps> = ({ onPageChange, pages, ariaLabel, offset = 3 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [initialPage, setInitialPage] = useState(1);

  if (pages <= 0) return;

  const hasPageReachedUpperLimit = (page: number) => page === initialPage + offset;

  const hasPageReachedLowerLimit = (page: number) => page === initialPage - 1;

  const isPageVisible = (index: number) =>  index + 1 >= initialPage && index + 1 < initialPage + offset;

  const onPageChangeEvent = (page: number) => {
    setCurrentPage(page);
    onPageChange();
  };

  const onPageGoForwardChangeEvent = () => {
    const updatedPage = currentPage + 1;
    if (updatedPage > pages) return;
    setCurrentPage(updatedPage);
    onPageChangeEvent(updatedPage);
    if (hasPageReachedUpperLimit(updatedPage)) {
      setInitialPage(updatedPage);
    }
  };

  const onPageGoBackwardChangeEvent = () => {
    const updatedPage = currentPage - 1;
    if (updatedPage <= 0) return;
    setCurrentPage(updatedPage);
    onPageChangeEvent(updatedPage);
    if (hasPageReachedLowerLimit(updatedPage)) {
      setInitialPage(initialPage - offset);
    }
  };

  return (
    <Container aria-label={ariaLabel}>
      <PageContainer>
        <IconContainer onClick={() => onPageGoBackwardChangeEvent()}>
          <Icon src={Illustrations.LeftArrow} alt="go backward" />
        </IconContainer>
      </PageContainer>
      {Array.from({ length: pages }).map(
        (__, index) =>
            isPageVisible(index) && (
            <PageContainer key={index}>
              <Page aria-current={currentPage === index + 1} onClick={() => onPageChangeEvent(index + 1)} $selected={currentPage === index + 1}>
                {index + 1}
              </Page>
            </PageContainer>
          )
      )}
      <PageContainer>
        <IconContainer onClick={() => onPageGoForwardChangeEvent()}>
          <Icon src={Illustrations.RigthArrow} alt="go forward" />
        </IconContainer>
      </PageContainer>
    </Container>
  );
};
