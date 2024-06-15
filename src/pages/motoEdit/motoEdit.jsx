import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "../../components/pageTitle/pageTitle";
import UpdateForm from "../../components/updateForm/updateForm";
import { CenteredContainer } from "./styled";

export default function MotoEdit() {
    //id pelo parametro e states
    const { id } = useParams();
    const [moto, setMoto] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        //Pegar code pelo id
        fetch(`http://localhost:3001/motos/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("ID inválido");
                }
                return response.json();
            })
            .then((data) => setMoto(data))
            .catch((error) => {
                console.error("Erro ao buscar detalhes da moto:", error);
                navigate("/");
            });
    }, [id, navigate]);

    if (!moto) {
        return <div style={{ marginLeft: '60px' }}>Não foram encontradas motos...</div>;
    }

    //Pagina
    return (
        <CenteredContainer>
            <PageTitle title="Editar" />
            <UpdateForm
                id={id}
                code={moto.code}
                name={moto.name}
                price={moto.price}
                color={moto.color}
                status={moto.status}
            />
        </CenteredContainer>
    );
}
