import styled, { keyframes } from 'styled-components';

const ItemCardContainer = styled.div`
    background-color: #312D4B;
    color: #E7E3FC;
    border-radius: 10px;
    padding: 16px;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 138px;
    width: 1408px;
    animation-fill-mode: forwards;
    
    &.fade-in {
        animation: fadeIn 1.5s forwards;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

  @media only screen and (max-width: 1430px) {
    width: 80vw;
  }

  @media only screen and (max-width: 850px) {
    width: 100vw;
    border-radius: 0;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center; 
  gap: 10px; 
  width: 100%;

  @media only screen and (max-width: 420px) {
    width: 90%;
  }
`;

const ItemId = styled.h2`
  color: #8c57ff;
  text-decoration: none;
  font-size: 17px;
  font-weight: 500;
  margin-left: 56px;
  font-style: normal;
  width: 50px;

  @media only screen and (max-width: 500px) {
    margin-left: 16px;
  }

  @media only screen and (max-width: 420px) {
    margin-left: -10px;
    padding-left: -20px;
  }
  `;

const ItemInfoPart2 = styled.div`
  width: 20%;

  @media only screen and (max-width: 500px) {
    width: 7%;
  }

  @media only screen and (max-width: 420px) {
    width: 5%;
    padding-right: 5px;
  }
`;

const ItemInfoPart3 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 58px;
  width: 50%;
  padding-right: 5px;

  @media only screen and (max-width: 500px) {
    width: 80%;
  }

  @media only screen and (max-width: 420px) {
    width: 70%;

  }

`;

const ItemNameNBadgeDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

  @media only screen and (max-width: 500px) {
    justify-content: space-between;
  }
`

const ItemName = styled.div`
  font-weight: 600;
  font-size: 17px;

  @media only screen and (max-width: 500px) {
    font-size: 13px;
    min-width: 120px;
    max-width: 120px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media only screen and (max-width: 420px) {
    min-width: 100px;
    max-width: 100px;
    font: 10px;
  }

`;

const StatusBadge = styled.span`
  background-color: ${({ status }) => {
    if (status === 'Sem estoque') return '#55304C';
    if (status === 'Em estoque') return '#354546';
    if (status === 'Em trânsito') return '#544146';
  }};
  color: ${({ status }) => {
    if (status === 'Sem estoque') return '#ff4c51';
    if (status === 'Em estoque') return '#56ca00';
    if (status === 'Em trânsito') return '#FFB400';
    ;
  }};
  padding: 3px 10px;
  border-radius: 35px;
  font-size: 15px;
  text-align: center;
  align-self: flex-start;
  margin-left:  12px;
  font-weight: 500;

  @media only screen and (max-width: 850px) {
    width: 120px
  }

  @media only screen and (max-width: 500px) {
    margin-right: 10px;
  }

  @media only screen and (max-width: 420px) {
    font-size: 11px;
    margin-right: 0px;
  }
`;

const ItemValue = styled.div`
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 11px;
`;

const ItemColor = styled.div`
  font-weight: 500;
  font-size: 15px;
`;


const ItemActions = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 16px;
    cursor: pointer;
  }

  svg:first-child path {
    fill: #ff4c51;
  }

  svg:last-child path {
    fill: #e7e3fc;
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
  }


`;

const TrashButton = styled.div`
  margin-right: 20px;
  cursor: pointer;

  @media only screen and (max-width: 500px) {
    margin-right: 0px;
    margin-bottom: 25px;
  }
`

const EyeButton = styled.div`
  margin-right: 53.36px;
  cursor: pointer;

  @media only screen and (max-width: 500px) {
    margin-right: 0px;
  }
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
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #ff4c51;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-right: 20px;
    animation: ${spin} 1s linear infinite;
    margin-right: 20px;
  
  @media only screen and (max-width: 500px) {
    margin-right: 0px;
    margin-bottom: 25px;
  }

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
    animation: fadeInOut 1s forwards;

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
      animation: fadeOut 0.75s forwards;
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

export { Spinner, ItemInfoPart2, ItemCardContainer, ItemInfo, ItemId, ItemInfoPart3, StatusBadge, ItemActions, TrashButton, EyeButton, ItemName, ItemColor, ItemValue, ItemNameNBadgeDiv, FloatingMessage };
