import React from "react";
// import {GlobalStyle, theme} from "../styles"
import styled from "styled-components";
import { Theme } from "./styles"
import { GlobalStyle } from "./styles/global";

const BaseButton = styled.button`
  cursor: pointer;
  font-family: ${Theme.primaryFont};
  font-size: ${Theme.primaryFontSizes.regular};
  border: 0px;
  min-width:100px;
`

const RegularButton = styled(BaseButton)`
  padding:16px 32px;
  background-color: ${Theme.primaryButtonColor};
  transition: .3s;
  color: ${Theme.textColorOnTertiary};
  &:hover {
    background-color: ${Theme.primaryHoverColor};
  }
  &:disabled {
    background-color: ${Theme.primaryDisabledButtonColor};
    cursor: not-allowed;
  }
`

const FocusRegularButton = styled(RegularButton)`
   &:focus {
     outline: 3px solid ${Theme.primaryButtonColor};
     outline-offset: 2px;
   }
`;

const ButtonLink = styled.a`
  cursor: pointer;
  color: ${Theme.textColorOnSecondary};
  transition: .3s;
  line-height: 1.6;

  &:hover {
    color: ${Theme.primaryHoverColor};
  }
`

const Paraghraph = styled.p`
  width: 200px;
  color: ${Theme.textColorOnSecondary};
  line-height: 1.6;
`;

const App = () => {
  return <>
    <GlobalStyle />
    <div>
    <RegularButton>View More</RegularButton>
    </div>
    <div>
       <RegularButton disabled>View More</RegularButton>
    </div>
    <div>
    <FocusRegularButton>View More</FocusRegularButton>
    </div>
    <h2>Characters</h2>
    <h3>Captain America</h3>
    <Paraghraph>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</Paraghraph>
    <span>Lorep Ipsum</span>
    <div>
    <ButtonLink>Lorep Ipsum</ButtonLink>
    </div>
  </>
}

export default App;
