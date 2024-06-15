import React, { useState, useEffect } from 'react';
import PageTitle from "../../components/pageTitle/pageTitle";
import Card from "../../components/card/card";
import { CenteredContainer } from "./styled";

export default function MotoTable() {
  //States
  const [motos, setMotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  ///Chamado da api
  useEffect(() => {
    fetch('http://localhost:3001/motos')
      .then(response => response.json())
      .then(data => setMotos(data))
      .catch(error => console.error('Error fetching motos:', error));
  }, []);

  //Filtros
  const filteredMotos = motos.filter(moto =>
    (typeof moto.code === 'string' && moto.code.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (typeof moto.name === 'string' && moto.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (typeof moto.color === 'string' && moto.color.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  //Pagina
  return (
    <CenteredContainer>

      <PageTitle title="Tabela de Motos" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {filteredMotos.map(moto => (
        <Card
          key={moto.id}
          id={moto.id}
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
