import React, { useState } from 'react';
import axios from 'axios';
import { Spinner, ItemCardContainer, ItemInfo, ItemId, ItemInfoPart2, ItemInfoPart3, StatusBadge, ItemActions, TrashButton, EyeButton, ItemName, ItemValue, ItemColor, ItemNameNBadgeDiv, FloatingMessage } from './styled';
import { Eye, Trash  } from 'lucide-react';

import { Link } from 'react-router-dom';

export default function Card({ id, code, name, price, color, status }) {
    //States
    const [floatingMessage, setFloatingMessage] = useState({ visible: false, message: '', type: '' });
    const [deleted, setDeleted] = useState(false);
    const [loading, setLoading] = useState(false);

    //Uppercase para padronização
    const nameUpper = name.toUpperCase();
    const colorUpper = color.toUpperCase();

    //Delay pra ver o loading
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    //Função para mostrar mensagem
    const showMessage = (message, type) => {
        setFloatingMessage({ visible: true, message, type });
        setTimeout(() => {
            setFloatingMessage({ visible: false, message: '', type: '' });
        }, 2000);
    };

    //Handle
    const handleDelete = async () => {
        if (status === "Em estoque") {
            showMessage("Você não pode excluir um item em estoque!", "warning");
            return;
        }

        try {
            setLoading(true);
            await axios.delete(`http://localhost:3001/motos/${id}`);
            await delay(1000);
            showMessage("Item excluído com sucesso!", "success");
            setDeleted(true);
            setLoading(false);
            console.log("Item excluído com sucesso!");

        } catch (error) {
            showMessage("Erro ao excluir o item!", "error");
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
                        <ItemInfoPart2>
                            <ItemId>#{code}</ItemId>
                        </ItemInfoPart2>
                        <ItemInfoPart3>
                            <ItemNameNBadgeDiv>
                                <ItemName>{nameUpper}</ItemName>
                                <StatusBadge status={status}>{status}</StatusBadge>
                            </ItemNameNBadgeDiv>
                            <ItemValue>Valor: R$ {price}</ItemValue>
                            <ItemColor>Cor: {colorUpper}</ItemColor>
                        </ItemInfoPart3>
                    </ItemInfo>
                    <ItemActions>
                        {loading ? (
                            <Spinner />
                        ) : (
                            <TrashButton onClick={handleDelete}>                          
                                <Trash color='#FF4C51' size="1.6rem"/>
                            </TrashButton>
                        )}
                        <Link to={`editar/${id}`} style={{ textDecoration: 'none' }}>
                            <EyeButton>
                                <Eye color='#E7E3FC' size="1.6rem"/>
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
