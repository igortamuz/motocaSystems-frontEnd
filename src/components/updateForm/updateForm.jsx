import { useState, useEffect, useRef } from "react";
import axios from "axios";
import FormTitle from "../formTitle/formTitle";
import {
    FormContainer,
    InputCode,
    Wrapper,
    HashSymbol,
    LabelStyled,
    Input,
    FormBody,
    ButtonContainer,
    ButtonImage,
    DropdownButton,
    DropdownContainer,
    DropdownItem,
    Textbutton,
    DropdownContent,
    ErrorMessage,
    DropdownErrorMessage,
    FloatingMessage
} from "./styled";
import SetaUp from "../../assets/input/SetaUp.png";

export default function UpdateForm({ id, code, name, price, color, status }) {
    
    // States
    const [codigo, setCodigo] = useState(code || "");
    const [modelo, setModelo] = useState(name || "");
    const [cor, setCor] = useState(color || "");
    const [valor, setValor] = useState(price || "");
    const [selectedOption, setSelectedOption] = useState(status || "");
    const [isOpen, setIsOpen] = useState(false);
    const [errors, setErrors] = useState({
        codigo: '',
        modelo: '',
        cor: '',
        valor: '',
        selectedOption: ''
    });
    const [floatingMessage, setFloatingMessage] = useState({ visible: false, message: '', type: '' });

    const options = ["Sem estoque", "Em trânsito", "Em estoque"];
    const dropdownRef = useRef(null);

    // useEffect
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    // Inputs
    const validateInputs = () => {
        let valid = true;
        const newErrors = {
            codigo: '',
            modelo: '',
            cor: '',
            valor: '',
            selectedOption: ''
        };

        //Erros

        if (codigo.length > 6 || codigo.length < 4 || !/^\d+$/.test(codigo)) {
            newErrors.codigo = 'Mínimo de 4 e máximo de 6 números!';
            valid = false;
        }

        if (!modelo.trim()) {
            newErrors.modelo = 'Preencha o modelo da moto.';
            valid = false;
        }

        if (!cor.trim() || /\d/.test(cor)) {
            newErrors.cor = 'A cor não pode conter números.';
            valid = false;
        }

        if (!valor.trim() || !/^(\d{1,3}(\.\d{3})*|\d+)(,\d{2})?$/.test(valor)) {
            newErrors.valor = 'Informe um valor válido (ex: 10000 ou 10.000,00).';
            valid = false;
        }

        if (!selectedOption) {
            newErrors.selectedOption = 'Selecione o status da moto.';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    // Handles
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateInputs()) {
            return;
        }

        try {
            const existingMoto = await axios.get(`http://localhost:3001/motos/${id}`);
            const existingMotoData = existingMoto.data;

            if (
                existingMotoData.code === codigo &&
                existingMotoData.name === modelo &&
                existingMotoData.color === cor &&
                existingMotoData.price === valor &&
                existingMotoData.status === selectedOption
            ) {


                setFloatingMessage({ visible: true, message: "Não é necessário fazer o update, pois está idêntico.", type: "warning" });
                setTimeout(() => {
                    setFloatingMessage(prevFloatingMessage => ({ ...prevFloatingMessage, visible: false }));
                }, 4000);
                return;
            }

            let formattedValue = valor.replace(/[^\d,]/g, '');
            const decimalSeparatorIndex = formattedValue.indexOf(',');

            if (decimalSeparatorIndex !== -1 && decimalSeparatorIndex !== formattedValue.length - 1) {
                const integerPart = formattedValue.substring(0, decimalSeparatorIndex);
                const decimalPart = formattedValue.substring(decimalSeparatorIndex + 1);
                formattedValue = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + decimalPart;
            } else {
                formattedValue += ",00";
                formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            }

            const updatedMoto = {
                code: codigo,
                name: modelo,
                color: cor,
                price: formattedValue,
                status: selectedOption
            };

            await axios.put(`http://localhost:3001/motos/${id}`, updatedMoto);

            setFloatingMessage({ visible: true, message: "O Modelo da Moto foi atualizado com sucesso!", type: "success" });
        } catch (error) {
            console.error("Error when updating the moto:", error);
            setFloatingMessage({ visible: true, message: "Houve erro ao atualizar o modelo da moto!", type: "error" });
        }

        setTimeout(() => {
            setFloatingMessage(prevFloatingMessage => ({ ...prevFloatingMessage, visible: false }));
        }, 4000);
    };

    //Handles

    const handleCodigoChange = (value) => {
        setCodigo(value);
        if (errors.codigo) {
            setErrors(prevErrors => ({ ...prevErrors, codigo: '' }));
        }
    };

    const handleItemClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleModeloChange = (value) => {
        setModelo(value);
        if (errors.modelo) {
            setErrors(prevErrors => ({ ...prevErrors, modelo: '' }));
        }
    };

    const handleCorChange = (value) => {
        setCor(value);
        if (errors.cor) {
            setErrors(prevErrors => ({ ...prevErrors, cor: '' }));
        }
    };

    const handleValorChange = (value) => {
        setValor(value);
        if (errors.valor) {
            setErrors(prevErrors => ({ ...prevErrors, valor: '' }));
        }
    };

    // Componente

    return (
        <>
            <FormTitle title={"Edite as informações que preferir! 📝"} />
            <FormContainer>
                <FormBody>
                    <Wrapper>
                        <LabelStyled>{"Código"}</LabelStyled>
                        <HashSymbol>#</HashSymbol>
                        <InputCode value={codigo} onChange={(e) => handleCodigoChange(e.target.value)} />
                        {errors.codigo && <ErrorMessage>{errors.codigo}</ErrorMessage>}
                    </Wrapper>
                    <Wrapper>
                        <LabelStyled>{"Modelo da Moto"}</LabelStyled>
                        <Input value={modelo} onChange={(e) => handleModeloChange(e.target.value)} />
                        {errors.modelo && <ErrorMessage>{errors.modelo}</ErrorMessage>}
                    </Wrapper>
                    <Wrapper>
                        <LabelStyled>{"Cor"}</LabelStyled>
                        <Input value={cor} onChange={(e) => handleCorChange(e.target.value)} />
                        {errors.cor && <ErrorMessage>{errors.cor}</ErrorMessage>}
                    </Wrapper>
                    <Wrapper>
                        <LabelStyled>{"Valor"}</LabelStyled>
                        <Input value={valor} onChange={(e) => handleValorChange(e.target.value)} />
                        {errors.valor && <ErrorMessage>{errors.valor}</ErrorMessage>}
                    </Wrapper>
                    <DropdownContainer ref={dropdownRef}>
                        <LabelStyled>{"Status"}</LabelStyled>
                        <DropdownButton onClick={() => setIsOpen(!isOpen)}>
                            <Textbutton>
                                {selectedOption || ''}
                            </Textbutton>
                        </DropdownButton>
                        <DropdownContent isOpen={isOpen}>
                            {options.map(option => (
                                <DropdownItem key={option} onClick={() => handleItemClick(option)}>
                                    {option}
                                </DropdownItem>
                            ))}
                        </DropdownContent>
                        {errors.selectedOption && <DropdownErrorMessage>{errors.selectedOption}</DropdownErrorMessage>}
                    </DropdownContainer>
                </FormBody>

                <ButtonContainer onClick={handleSubmit}>
                    <ButtonImage src={SetaUp} alt="SetaUp icon" />
                    {"ATUALIZAR"}
                </ButtonContainer>
            </FormContainer>

            {floatingMessage.visible && (
                <FloatingMessage type={floatingMessage.type}>
                    {floatingMessage.message}
                </FloatingMessage>
            )}
        </>
    );
}