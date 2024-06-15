import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MotoTable from "../pages/motoTable/motoTable";
import Header from "../components/header/header";
import MotoRegistration from "../pages/motoRegistration/motoRegistration";
import MotoEdit from "../pages/motoEdit/motoEdit";
import {AppContainer, GlobalStyle, HeaderContainer, CenterContainer} from "../app/styled"

//json-server --watch src/db.json --port 3001

function App() {
  return (
    <Router>
      <AppContainer className="App">
        <GlobalStyle />
        <CenterContainer>
          <HeaderContainer>
            <Header />
          </HeaderContainer>
          <Routes>
            <Route path="/" element={<MotoTable />} />
            <Route path="/registro" element={<MotoRegistration />} />
            <Route path="/editar/:id" element={<MotoEdit />} />
          </Routes>
        </CenterContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
