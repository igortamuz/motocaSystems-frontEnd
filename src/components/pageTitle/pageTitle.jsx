import React from 'react';
import { Link } from 'react-router-dom'; 
import {
  Container,
  TitleContainer,
  StyledPageTitle,
  LargeLine,
  InputContainer,
  InputImage,
  StyledInput,
  ButtonContainer,
  ButtonImage,
  BigZone,
  SecondZone
} from './styled';
import Search from "../../assets/input/Search.png"
import Plus from "../../assets/input/Plus.png"

export default function PageTitle({ title }) {
  if (title === "Tabela de Motos") {
    return (
      <Container>
        <BigZone>
          <TitleContainer>
            <StyledPageTitle>{title}</StyledPageTitle>
          </TitleContainer>
          <SecondZone>
            <InputContainer>
              <InputImage src={Search} alt="search icon" />
              <StyledInput placeholder="Buscar por código, nome e cor" />
            </InputContainer>
            <Link to="/registro" style={{ textDecoration: 'none' }}>
              <ButtonContainer>
                <ButtonImage src={Plus} alt="new record icon" />
                {"NOVO REGISTRO"}
              </ButtonContainer>
            </Link>
          </SecondZone>
        </BigZone>
        <LargeLine />
      </Container>
    );
  }

  return (
    <Container>
      <TitleContainer>
        <StyledPageTitle>
          {title}
        </StyledPageTitle>
      </TitleContainer>
      <LargeLine />
    </Container>
  );
};
