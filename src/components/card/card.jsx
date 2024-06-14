import React, { useState } from 'react';
import axios from 'axios';
import { Spinner, ItemCardContainer, ItemInfo, ItemId, ItemInfoPart2, StatusBadge, ItemActions, TrashButton, EyeButton, ItemName, ItemValue, ItemColor, ItemNameNBadgeDiv, FloatingMessage } from './styled';
import trashIcon from './../../assets/buttons/Trash.png';
import eyeIcon from './../../assets/buttons/Eye.png';
import { Link } from 'react-router-dom';

export default function Card({ id, code, name, price, color, status }) {
    //States
    const [floatingMessage, setFloatingMessage] = useState({ visible: false, message: '', type: '' });
    const [deleted, setDeleted] = useState(false);
    const [loading, setLoading] = useState(false);

    ///Uppercasae para padronização
    const nameUpper = name.toUpperCase();
    const colorUpper = color.toUpperCase();

    //Delay pra ver o loading
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    //Handle
    const handleDelete = async () => {
        if (status === "Em estoque") {
            setFloatingMessage({ visible: true, message: "Você não pode excluir um item em estoque!", type: "warning" });
            return;
        }

        try {
            setLoading(true);
            await axios.delete(`http://localhost:3001/motos/${id}`);
            await delay(1000);
            setFloatingMessage({ visible: true, message: "Item excluído com sucesso!", type: "success" });
            setDeleted(true);
            setTimeout(() => {
                setLoading(false);
                console.log("Item excluído com sucesso!");
            }, 1000);
        } catch (error) {
            setFloatingMessage({ visible: true, message: "Erro ao excluir o item!", type: "error" });
            console.error("Erro ao excluir o item:", error);
            setLoading(false);
        }
    };

    //Componente
    return (
        <>
            {!deleted && (
                <ItemCardContainer className={deleted ? 'fade-out' : 'fade-in'}>
                    <ItemInfo>
                        <ItemId>#{code}</ItemId>
                        <ItemInfoPart2>
                            <ItemNameNBadgeDiv>
                                <ItemName>{nameUpper}</ItemName>
                                <StatusBadge status={status}>{status}</StatusBadge>
                            </ItemNameNBadgeDiv>
                            <ItemValue>Valor: R$ {price}</ItemValue>
                            <ItemColor>Cor: {colorUpper}</ItemColor>
                        </ItemInfoPart2>
                    </ItemInfo>
                    <ItemActions>
                        {loading ? (
                            <Spinner />
                        ) : (
                            <TrashButton onClick={handleDelete}>
                                <img src={trashIcon} alt="TrashButton" height="20" />
                            </TrashButton>
                        )}
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
