import React from "react";
// import {GlobalStyle, theme} from "../styles"
import styled, { ThemeProvider } from "styled-components";
import { Theme } from "./styles";
import { GlobalStyle } from "./styles/global";
import { Illustrations } from "./assets";
import { Button } from "./components/button/Button";
import { LinkButton } from "./components/link-button/LinkButton";
import { DropDownList } from "./components/drop-down-list/DropDownList";
import { SearchInput } from "./components/search-input/SearchInput";
import { Paginator } from "./components/paginator/Paginator";

const BaseButton = styled.button`
  cursor: pointer;
  font-family: ${Theme.primaryFont};
  font-size: ${Theme.primaryFontSizes.regular};
  border: 0px;
  min-width: 100px;
`;

const RegularButton = styled(BaseButton)`
  padding: 16px 32px;
  background-color: ${Theme.primaryButtonColor};
  transition: 0.3s;
  color: ${Theme.textColorOnTertiary};
  &:hover {
    background-color: ${Theme.primaryHoverColor};
  }
  &:disabled {
    background-color: ${Theme.primaryDisabledButtonColor};
    cursor: not-allowed;
  }
`;

const FocusRegularButton = styled(RegularButton)`
  &:focus {
    outline: 3px solid ${Theme.primaryButtonColor};
    outline-offset: 2px;
  }
`;

const ButtonLink = styled.a`
  cursor: pointer;
  color: ${Theme.textColorOnSecondary};
  transition: 0.3s;
  line-height: 1.6;

  &:hover {
    color: ${Theme.primaryHoverColor};
  }
`;

const Paraghraph = styled.p`
  width: 200px;
  color: ${Theme.textColorOnSecondary};
  line-height: 1.6;
`;

const Banner = styled.span`
  background-color: ${Theme.status.successColor};
  padding: 16px 32px;
  color: ${Theme.status.successColorTextOnPrimary};
`;

const WarningBanner = styled.span`
  background-color: ${Theme.status.warningColor};
  padding: 16px 32px;
  color: ${Theme.status.successColorTextOnPrimary};
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <div>
          {" "}
          <Button text="View more" />
        </div>
        <div>
          <LinkButton text="Lorep ipsum" />
        </div>
        <div>
          <DropDownList defaultMessage="Select" options={[{key:"Asc", value: "Asc"},{key:"Des", value: "Des"}]} defaultOptionIndex={0} />
        </div>
          <div>
          <LinkButton text="Lorep ipsum" />
        </div>
        <div>
          <SearchInput ariaLabel="search input" placeholder="Search..." />
        </div>
        <div>
          <Paginator ariaLabel="paginator" page={1} pages={20} offset={5} onPageChange={() => {}} />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
