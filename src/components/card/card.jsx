import React, { useState } from 'react';
import axios from 'axios';
import { ItemCardContainer, ItemInfo, ItemId, ItemInfoPart2, StatusBadge, ItemActions, TrashButton, EyeButton, ItemName, ItemValue, ItemColor, ItemNameNBadgeDiv, FloatingMessage } from './styled';
import trashIcon from './../../assets/buttons/Trash.png';
import eyeIcon from './../../assets/buttons/Eye.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Card({ id, code, name, price, color, status }) {

    // States
    const [floatingMessage, setFloatingMessage] = useState({ visible: false, message: '', type: '' });
    const [deleted, setDeleted] = useState(false);

    // Handles
    const handleDelete = async () => {
        if (status === "Em estoque") {
            setFloatingMessage({ visible: true, message: "Você não pode excluir um item em estoque!", type: "warning" });
            return;
        }

        try {
            await axios.delete(`http://localhost:3001/motos/${id}`);
            setFloatingMessage({ visible: true, message: "Item excluído com sucesso!", type: "success" });
            setDeleted(true);
            setTimeout(() => {
                console.log("Item excluído com sucesso!");
            }, 1500); 
        } catch (error) {
            setFloatingMessage({ visible: true, message: "Erro ao excluir o item!", type: "error" });
            console.error("Erro ao excluir o item:", error);
        }
    };

    return (
        <>
            {!deleted && (
                <ItemCardContainer className={deleted ? 'fade-out' : 'fade-in'}>
                    <ItemInfo>
                        <ItemId>#{code}</ItemId>
                        <ItemInfoPart2>
                            <ItemNameNBadgeDiv>
                                <ItemName>{name}</ItemName>
                                <StatusBadge status={status}>{status}</StatusBadge>
                            </ItemNameNBadgeDiv>
                            <ItemValue>Valor: R$ {price}</ItemValue>
                            <ItemColor>Cor: {color}</ItemColor>
                        </ItemInfoPart2>
                    </ItemInfo>
                    <ItemActions>
                        <TrashButton onClick={handleDelete}>
                            <img src={trashIcon} alt="TrashButton" height="20" />
                        </TrashButton>
                        <Link to={`editar/${id}`} style={{ textDecoration: 'none' }}>
                            <EyeButton>
                                <img src={eyeIcon} alt="Eyebutton" height="20" />
                            </EyeButton>
                        </Link>
                    </ItemActions>
                </ItemCardContainer>
            )}
            {floatingMessage.visible && (
                <FloatingMessage type={floatingMessage.type}>
                    {floatingMessage.message}
                </FloatingMessage>
            )}
        </>
    );
}