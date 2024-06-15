import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end; 
  margin-bottom: 20px;
  margin-top: 28px;
  width: 1408px;

  @media only screen and (max-width: 1430px) {
    margin-right: 20px;
  }

`;

const ImageDiv = styled.img`
  ${props => props.withMargin && `margin-left: 1.8em;`} 
`;

export { HeaderContainer, ImageDiv };
