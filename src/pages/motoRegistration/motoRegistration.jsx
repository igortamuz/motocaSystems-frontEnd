import PageTitle from "../../components/pageTitle/pageTitle"
import RegisterForm from "../../components/registerForm/registerForm";
import { CenteredContainer } from "./styled";

export default function MotoRegistration () {
    //Pagina
    return (
        <CenteredContainer>
            <PageTitle title = "Registro de Motos"/>
            <>
                <RegisterForm/>
            </>
        </CenteredContainer>
    );
}
