import React from 'react';
import { HeaderContainer, ImageDiv } from "./styled";
import HomeImage from "../../assets/header/Home.png";
import PerfilImage from "../../assets/header/Perfil.png";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <HeaderContainer>
      <>
        <Link to="/">
          <ImageDiv src={HomeImage} alt="HomeImage" width="33" height="28" />
        </Link>
        <ImageDiv src={PerfilImage} alt="Perfil" width="44" height="44" withMargin />
      </>
    </HeaderContainer>
  );
}
