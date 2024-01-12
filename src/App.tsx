import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Paginator } from "./components/paginator/Paginator";
import { SearchInput } from "./components/search-input/SearchInput";
import { Theme } from "./styles";
import { GlobalStyle } from "./styles/global";
import { Illustrations } from "./assets";
import { DropDownList } from "./components/drop-down-list/DropDownList";

const Header = styled.header`
  background-color: ${Theme.primaryBackground};
`;
const Main = styled.main`
  flex: 1 1;
  background-color: ${Theme.secondaryBackground};
`;

const Footer = styled.footer`
  background-color: ${Theme.primaryBackground};
`;

const Container = styled.div`
  padding: 8px;
  max-width: 1200px;
  @media (min-width: 1200px) {
    margin: auto;
  }
`;

const ContentContainer = styled.div`
  padding: 0px 8px;
  max-width: 1200px;
  @media (min-width: 1200px) {
    margin: auto;
    padding: 0px;
  }
  height: 100%;
`;

const FlexContainer = styled(Container)`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`;

const FluidContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
`;

const GridContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (min-width: 1200px) {
    flex-direction: none;
    display: grid;
    grid-template-columns: 75% 25%;
  }
`;

const ContentGridContainer = styled(GridContainer)`
  height: 100%;
`;

const InputContainer = styled.div`
  width: 600px;
`;

const FlexRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  height: 50px;
`;

const CharacterIcon = styled.img`
  height: 40px;
`;

const FavouriteIcon = styled.img`
  height: 40px;
  margin-right: 16px;
`;

const Section = styled.section``;

const LeftSection = styled(Section)`
  padding: 16px 0px;
  @media (min-width: 1200px) {
    padding: 16px 16px 16px 0;
  }
`;

const RightSection = styled(Section)`
  background-color: ${Theme.quaternaryBackground};
  display: none;
  @media (min-width: 1200px) {
    display: block;
    padding: 16px;
  }
`;

const ContentBody = styled.div`
  margin-bottom: 32px;
`;

const PaginatorContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  height: 400px;
  background-color: red;
`;

const CardsContainer = styled.div`
  display: grid;
  row-gap: 8px;
  @media (min-width: 1200px) {
    row-gap: 32px;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
  }
`;

const FavouritesContainer = styled.div`
  width: 100%;
  display: grid;
  row-gap: 64px;
  grid-template-columns: minmax(200px, 1fr);
`;

const Block = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const BlockSpaceBetween = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Header>
          <FlexContainer>
            <GridContainer>
              <FluidContainer>
                <Logo src={Illustrations.MarvelLogo} />
                <InputContainer>
                  <SearchInput ariaLabel="search input" placeholder="Search..." />
                </InputContainer>
              </FluidContainer>
              <span></span>
            </GridContainer>
          </FlexContainer>
        </Header>
        <Main>
          <ContentContainer>
            <ContentGridContainer>
              <LeftSection>
                <FlexRow>
                  <BlockSpaceBetween>
                    <Block>
                    <CharacterIcon src={Illustrations.Characters} />
                    <h2>Characters</h2>
                    </Block>
                  
                  <DropDownList
            defaultMessage="Select"
            options={[
              { key: "Asc", value: "Asc" },
              { key: "Des", value: "Des" },
            ]}
            defaultOptionIndex={0}
          /></BlockSpaceBetween>
                </FlexRow>
                <ContentBody>
                  <CardsContainer>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>

                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                  </CardsContainer>
                </ContentBody>
                <PaginatorContainer>
                  <Paginator ariaLabel="paginator" page={1} pages={8} offset={5} onPageChange={() => {}} />
                </PaginatorContainer>
              </LeftSection>
              <RightSection>
                <FlexRow>
                  <FavouriteIcon src={Illustrations.Favourites} />
                  <h2>Favourites</h2>
                  <FavouritesContainer>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                  </FavouritesContainer>
                </FlexRow>
              </RightSection>
            </ContentGridContainer>
          </ContentContainer>
        </Main>
        <Footer>
          <Container>footer</Container>
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
