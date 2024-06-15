import styled, {createGlobalStyle} from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #2A233C;
    color: #E7E3FC;
  }

  body {
    font-family: 'Poppins'; 
  }
`;

const CenterContainer = styled.div`
  margin: 0 auto;
  width: 100vw;;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export { GlobalStyle, CenterContainer, HeaderContainer, AppContainer}