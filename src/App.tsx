import React from "react";
// import {GlobalStyle, theme} from "../styles"
import styled from "styled-components";
// import {applyStyleModifiers} from 'styled-components-modifiers';


const PrimaryButton = styled.button`
  color: red;
`

const App = () => {
  return <>
    <PrimaryButton>View More</PrimaryButton>
    <p>Lorep Ipsum</p>
  </>
}

/* const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 0.5rem;
    padding: 8px;
  `,
  large: () => `
    font-size: .4rem;
  `
}

const BaseButton = styled.button`
  border:0px;
  background-color: ${theme.secondaryBackgroundColor};
  color: ${theme.secondaryTextColor};
  cursor: pointer;
`

const LargeButton = styled(BaseButton)`
  &:hover {
    background-color: ${theme.primaryHoverBackgroundColor};
    transition: .5s;
  }
  &:focus{
    background-color: ${theme.primaryHoverBackgroundColor};
    outline: 3px solid ${theme.primaryHoverBackgroundColor};
    outline-offset: 2px;
  }
  &:disabled {
    background-color: ${theme.primaryDisabledBackgroundColor};
    cursor:not-allowed;
  }
  padding: 16px 32px;
  min-width: 100px;

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const MediumButton = styled(BaseButton)`
    padding: 8px 16px;
    min-width: 100px;

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const GhostButton = styled(BaseButton)`
  padding: 16px 32px;
  min-width: 100px;
  background-color: ${theme.primaryGhostBackgroundColor};
  color: ${theme.primaryBackgroundColor};
  &:hover {
    border: 1px solid ${theme.primaryHoverBackgroundColor};
    transition: .5s;
  }
  &:focus{
    outline: 3px solid ${theme.primaryHoverBackgroundColor};
    outline-offset: 2px;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

const DescriptionParagraph = styled.p`
  color: ${theme.primaryTextColor};
  line-height: 1.7;
`

const Title = styled.span`
  font-weight: 600;
  color: ${theme.ternaryTextColor};
  font-size: ${theme.h5}
`;

const App = () => {
  return (
    <>
    <GlobalStyle />
    <div style={{display:"flex", flexDirection: "column", width:"auto", alignItems:"center"}}>
     <Title>LOREP IPSUM</Title>
     <DescriptionParagraph>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</DescriptionParagraph>
     <LargeButton modifiers={['success', 'large']}  >View more</LargeButton>
     <MediumButton >View more</MediumButton>
     <GhostButton>View More</GhostButton>
    </div>
    </>
  );
}; */

export default App;
