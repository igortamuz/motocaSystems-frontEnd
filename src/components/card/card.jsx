import React from 'react';
import { ItemCardContainer, ItemInfo, ItemId, ItemInfoPart2, StatusBadge, ItemActions, TrashButton, EyeButton, ItemName, ItemValue, ItemColor, ItemNameNBadgeDiv } from './styled';
import trashIcon from './../../assets/buttons/Trash.png';
import eyeIcon from './../../assets/buttons/Eye.png';

export default function Card({ code, name, price, color, status }) {
    return (
        <ItemCardContainer>
            <ItemInfo>
                <ItemId>#{code}</ItemId>
                <ItemInfoPart2>
                    <ItemNameNBadgeDiv>
                        <ItemName>
                            {name}
                        </ItemName>
                        <StatusBadge status={status}>{status}</StatusBadge>
                    </ItemNameNBadgeDiv>
                    <ItemValue>Valor: R$ {price}</ItemValue>
                    <ItemColor>Cor: {color}</ItemColor>
                </ItemInfoPart2>
            </ItemInfo>
            <ItemActions>
                <TrashButton>
                    <img src={trashIcon} alt="TrashButton" height="20" />
                </TrashButton>

                <EyeButton>
                    <img src={eyeIcon} alt="Eyebutton" height="20" />
                </EyeButton>

            </ItemActions>
        </ItemCardContainer>
    );
}
