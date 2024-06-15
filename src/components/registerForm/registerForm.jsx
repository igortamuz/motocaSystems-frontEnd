import { useState, useEffect, useRef } from "react";
import axios from "axios";
import FormTitle from "../../components/formTitle/formTitle";
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
import Plus from "../../assets/input/Plus.png";

export default function RegisterForm() {

    //States
    const [codigo, setCodigo] = useState("");
    const [modelo, setModelo] = useState("");
    const [cor, setCor] = useState("");
    const [valor, setValor] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
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

    //UseEffect
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

    //Inputs
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

    //Handles
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateInputs()) {
            return;
        }

        try {

            //Verificação de uso de código
            const existingMoto = await axios.get(`http://localhost:3001/motos?code=${codigo}`);
            if (existingMoto.data.length > 0) {
                setErrors({ ...errors, codigo: 'Este código já está em uso. Por favor, escolha outro.' });
                return;
            } else {
                setErrors({ ...errors, codigo: '' });
            }

            let formattedValue = valor.replace(/[^\d,]/g, '');
            const decimalSeparatorIndex = formattedValue.indexOf(',');

            //Verificação de milhar!
            if (decimalSeparatorIndex !== -1 && decimalSeparatorIndex !== formattedValue.length - 1) {
                const integerPart = formattedValue.substring(0, decimalSeparatorIndex);
                const decimalPart = formattedValue.substring(decimalSeparatorIndex + 1);
                formattedValue = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + decimalPart;
            } else {
                formattedValue += ",00";
                formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            }

            const newMoto = {
                code: codigo,
                name: modelo,
                color: cor,
                price: formattedValue,
                status: selectedOption
            };

            //Post do axios
            await axios.post("http://localhost:3001/motos", newMoto);
            setCodigo("");
            setModelo("");
            setCor("");
            setValor("");
            setSelectedOption("");
            setIsOpen(false);
            setErrors({
                codigo: '',
                modelo: '',
                cor: '',
                valor: '',
                selectedOption: ''
            });

            //Mensagem de sucesso
            setFloatingMessage({ visible: true, message: "A Moto foi RegistradA com sucesso!", type: "success" });
        } catch (error) {
            console.error("Error when creating the moto:", error);

            // Mensagem de erro
            setFloatingMessage({ visible: true, message: "Houve erro ao registrar a moto!", type: "error" });
        }

        //Esconder a mensagem em 4 segundos
        setTimeout(() => {
            setFloatingMessage({ ...floatingMessage, visible: false });
        }, 4000);
    };

    const handleItemClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleCodigoChange = (value) => {
        setCodigo(value);
        if (errors.codigo) {
            setErrors({ ...errors, codigo: '' });
        }
    };

    const handleModeloChange = (value) => {
        setModelo(value);
        if (errors.modelo) {
            setErrors({ ...errors, modelo: '' });
        }
    };

    const handleCorChange = (value) => {
        setCor(value);
        if (errors.cor) {
            setErrors({ ...errors, cor: '' });
        }
    };

    const handleValorChange = (value) => {
        setValor(value);
        if (errors.valor) {
            setErrors({ ...errors, valor: '' });
        }
    };

    //Componente
    return (
        <>
            <FormTitle title={"Preencha as informações abaixo para registrar uma Moto 🏍️"} />
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
                    <ButtonImage src={Plus} alt="Plus icon" />
                    {"REGISTRAR"}
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