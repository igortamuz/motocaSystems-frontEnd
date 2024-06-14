import styled from 'styled-components';

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

    &.fade-out {
        animation: fadeOut 3s forwards;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
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

const ItemInfo = styled.div`
  display: flex;
  align-items: center; 
  gap: 10px; 
`;

const ItemId = styled.h2`
  color: #8c57ff;
  text-decoration: none;
  font-size: 17px;
  font-weight: 500;
  margin-left: 56px;
  font-style: normal;
  `;

const ItemInfoPart2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 98px;
`;

const ItemNameNBadgeDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`

const ItemName = styled.div`
  font-weight: 600;
  font-size: 17px;
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
`;

const TrashButton = styled.div`
  margin-right: 20px;
  cursor: pointer;
`

const EyeButton = styled.div`
  margin-right: 53.36px;
  cursor: pointer;
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
  animation: fadeInOut 1.5s forwards;

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
    animation: fadeOut 1.5s forwards;
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

export { ItemCardContainer, ItemInfo, ItemId, ItemInfoPart2, StatusBadge, ItemActions, TrashButton, EyeButton, ItemName, ItemColor, ItemValue, ItemNameNBadgeDiv, FloatingMessage };
