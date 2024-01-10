import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Theme } from "./styles";
import { GlobalStyle } from "./styles/global";


const Header = styled.header`
  background-color: ${Theme.primaryBackground};
`
const Main = styled.main`
  flex: 1 1;
  background-color: ${Theme.secondaryBackground};
`

const Footer = styled.footer`
  background-color: ${Theme.primaryBackground};
`

const Container = styled.div`
  padding: 1rem;   
`; 

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
       <Header>
          <Container>
            Header
          </Container>
       </Header>
       <Main>
          <Container>
            Main
          </Container>
       </Main>
       <Footer>
          <Container>
            footer
          </Container>
       </Footer>
      </ThemeProvider>
    </>
  );
};

export default App;


/**
 * 
 * <ThemeProvider theme={Theme}>
        <div>
          {" "}
          <Button text="View more" />
        </div>
        <div>
          <LinkButton text="Lorep ipsum" />
        </div>
        <div>
          <DropDownList
            defaultMessage="Select"
            options={[
              { key: "Asc", value: "Asc" },
              { key: "Des", value: "Des" },
            ]}
            defaultOptionIndex={0}
          />
        </div>
        <div>
          <LinkButton text="Lorep ipsum" />
        </div>
        <div>
          <SearchInput ariaLabel="search input" placeholder="Search..." />
        </div>
        <div>
          <Paginator ariaLabel="paginator" page={1} pages={8} offset={5} onPageChange={() => {}} />
        </div>
 * 
 */
