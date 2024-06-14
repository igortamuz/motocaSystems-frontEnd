import React, { useEffect, useState } from 'react';
import PageTitle from "../../components/pageTitle/pageTitle";
import Card from "../../components/card/card";
import { CenteredContainer } from "./styled";

export default function MotoTable() {
  const [motos, setMotos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/motos')
      .then(response => response.json())
      .then(data => setMotos(data))
      .catch(error => console.error('Error fetching motos:', error));
  }, []);

  return (
    <CenteredContainer>
      <PageTitle title="Tabela de Motos" />
      {motos.map(moto => (
        <Card
          key={moto.id}
          code={moto.code}
          name={moto.name} 
          price={moto.price} 
          color={moto.color} 
          status={moto.status}
        />
      ))}
    </CenteredContainer>
  );
}
