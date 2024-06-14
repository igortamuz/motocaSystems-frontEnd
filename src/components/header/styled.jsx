import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end; 
  margin-bottom: 20px;
  margin-top: 28px;
  width: 1408px;
  padding-right: 18px;
`;

const ImageDiv = styled.img`
  ${props => props.withMargin && `margin-left: 18px;`}
`;

export { HeaderContainer, ImageDiv };
