import { Link } from "react-router-dom";
import Seta from "../../assets/input/Seta.png";
import styled, { keyframes } from "styled-components";

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    font-weight: 600;
    opacity: 0;
    animation: fadeIn 1s forwards;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const LabelStyled = styled.span`
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: #2A233C;
  color: #E7E3FC;
  padding: 0 5px;
  font-size: 13px;
`;

const Input = styled.input`
  border: 0.5px solid #E7E3FC;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  background-color: transparent;
  width: 419px;
  height: 50px;
  margin-bottom: 35px;
  color: #E7E3FC; 

  &::placeholder {
    color: #E7E3FC;
  }

  &:focus {
    border-color: #E7E3FC;
    box-shadow: 0 0 5px rgba(46, 27, 71, 0.5);
  }

  @media only screen and (max-width: 850px) {
      width: 100%;
  }

`;

const InputCode = styled.input`
  border: 0.5px solid #88839C;
  padding: 10px 10px 10px 30px; 
  font-size: 14px;
  outline: none;
  background-color: transparent;
  width: 419px;
  height: 50px;
  margin-bottom: 35px;
  border-radius: 5px;
  color: #88839C;
  background: url("#") no-repeat left 10px center;
  background-size: 20px;
  font-weight: 500px;

  &::placeholder {
    color: #88839C;
  }

  &:focus {
    border-color: #88839C;
    box-shadow: 0 0 5px rgba(46, 27, 71, 0.5);
  }

  @media only screen and (max-width: 850px) {
      width: 100%;
  }

`;

const HashSymbol = styled.div`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-120%);
  color: #88839C;
  font-weight: 500;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  border: 0.5px solid #e7e3fc;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  background-color: transparent;
  width: 419px;
  height: 50px;
  color: #e7e3fc;
  background: url(${Seta}) no-repeat right 10px center;
  background-size: 15px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  @media only screen and (max-width: 850px) {
      width: 100%;
  }

`;

const Textbutton = styled.p`
  display: flex;
  justify-content: start;
`;

const DropdownContent = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #2a233c;
  border: 0.5px solid #E7E3FC;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px; 
  width: 419px;
`;

const DropdownItem = styled.div`
  font-size: 14px;
  padding: 12px 16px;
  cursor: pointer;
  border: 0.1px solid #ddd8f749;
  font-weight: 400;

  &:hover {
    background-color: #6a559e;
  }
`;

const ButtonContainer = styled.button`
  width: 418px;
  height: 45px;
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
  margin-top: 35px;
  transition: transform 0.1s ease;

  &:active {
    transform: scale(0.98);
  }

  @media only screen and (max-width: 850px) {
      width: 100%;
  }

`;

const ButtonImage = styled.img`
  margin-right: 5px;
  height: 18px;
  width: 18px;
`;

const ErrorMessage = styled.div`
  color: #ffffff;
  font-size: 12px;
  padding: 5px;
  margin-bottom: 10px; 
  background-color: #ff0000;
  border-radius: 5px;
  position: absolute;
  z-index: 1;
  right: 0;
  transform: translateY(-200%); 
  width: max-content;
`;

const DropdownErrorMessage = styled.div`
  color: #ffffff;
  font-size: 12px;
  padding: 5px;
  margin-bottom: 10px;
  background-color: #ff0000;
  border-radius: 5px;
  position: absolute;
  z-index: 1;
  right: 0;
  transform: translateY(calc(0% - 10px)); 
  width: max-content;
`;

const FloatingMessage = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: ${props => {
    switch (props.type) {
      case "success":
        return "#4CAF50";
      case "warning":
        return "#c5b62a"; 
      case "error":
        return "#F44336";
      default:
        return "#F44336"; 
    }
  }};  
  color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  opacity: 0;
  animation: fadeInOut 1.25s forwards;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  &.fade-out {
    animation: fadeOut 1s forwards;
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const LabelStyledCode = styled.span`
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: #2A233C;
  color: #88839C;
  padding: 0 5px;
  font-size: 13px;
`;

const spin = keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 2px solid white;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
  margin-right: 5px;
`;

const StyledLinkButton = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

export {
  FormContainer,
  InputCode,
  Wrapper,
  HashSymbol,
  LabelStyled,
  Input,
  FormBody,
  ButtonContainer,
  ButtonImage,
  DropdownContainer,
  DropdownItem,
  DropdownContent,
  Textbutton,
  DropdownButton,
  ErrorMessage,
  DropdownErrorMessage,
  FloatingMessage,
  LabelStyledCode,
  Spinner,
  StyledLinkButton
};
