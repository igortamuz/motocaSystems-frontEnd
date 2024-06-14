import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/pageTitle/pageTitle";
import UpdateForm from "../../components/updateForm/updateForm";
import { CenteredContainer } from "./styled";

export default function MotoEdit() {

    //id pelo parametro e states

    const { id } = useParams();
    const [moto, setMoto] = useState(null);

    useEffect(() => {

        // Pegar code pelo id

        fetch(`http://localhost:3001/motos/${id}`)
            .then((response) => response.json())
            .then((data) => setMoto(data))
            .catch((error) =>
                console.error("Erro ao buscar detalhes da moto:", error)
            );
    }, [id]);

    if (!moto) {
        return <div>Não foram encontrado motos...</div>;
    }

    //Componente

    return (
        <CenteredContainer>
            <PageTitle title="Editar" />
            <UpdateForm
                id={id}
                code={moto.code}
                name={moto.name}
                price={moto.price}
                color={moto.color}
                status={moto.status} />
        </CenteredContainer>
    );
}
