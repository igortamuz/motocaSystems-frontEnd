import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const BigZone = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  text-align: left;
`;

const StyledPageTitle = styled.h1`
  font-size: 25px;
  font-weight: 600;
  color: #CAC9CD;
  margin-bottom: 18px;
`;

const LargeLine = styled.hr`
  border: 0;
  border-top: 0.5px solid #CAC9CD;
  width: 1408px;
  margin: 0 auto;
`;

const SecondZone = styled.div`
  display: flex;
  flex-direction: row;
`

const InputContainer = styled.div`
  width: 385px;
  height: 35px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #CAC9CD;
  margin-right: 26px;
`;

const InputImage = styled.img`
  margin-left: 10px;
  height: 14px;
  width: 14px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 10px;
  background-color: transparent;
  color: #CAC9CD;
  font-weight: 400;
  font-size: 11px;

  &::placeholder {
    color: #CAC9CD; 
  }
`;

const ButtonContainer = styled.button`
  width: 142px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3BADFB;
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
`;

const ButtonImage = styled.img`
  margin-right: 5px;
  height: 12px;
  width: 12px;
`;

export {
  Container,
  BigZone,
  TitleContainer,
  StyledPageTitle,
  LargeLine,
  InputContainer,
  InputImage,
  StyledInput,
  ButtonContainer,
  ButtonImage,
  SecondZone
};
