import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MotoTable from "./pages/motoTable/motoTable";
import Header from "./components/header/header";
import MotoRegistration from "./pages/motoRegistration/motoRegistration";

//  //json-server --watch src/db.json --port 3001

function App() {
  return (
    <Router>
      <AppContainer className="App">
        <GlobalFontStyle />
        <GlobalStyle />
        <CenterContainer>
          <Header />
          <Routes>
            <Route path="/" element={<MotoTable />} />
            <Route path="/registro" element={<MotoRegistration />} />
          </Routes>
        </CenterContainer>
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlobalFontStyle = createGlobalStyle`
  body {
    font-family: 'Poppins'; 
  }
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
`;

const CenterContainer = styled.div`
  width: 75%;
  margin: 0 auto; 
  padding: 20px; 
`;

export default App;
