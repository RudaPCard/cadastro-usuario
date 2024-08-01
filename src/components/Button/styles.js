import styled from 'styled-components';

export const Button = styled.button`
    border: ${(props) => props.theme === 'primary' ? 'none' : '1px solid #ffffff'};
    background: ${(props) => props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent'};
    font-size: 16px;
    color: #ffffff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;
    transition: background 0.3s, color 0.3s, border 0.3s; /* Correção aqui */

    &:hover {
        background: ${(props) => props.theme === 'primary' ? '#ffffff' : '#f0f0f0'};
        color: ${(props) => props.theme === 'primary' ? '#007bff' : '#007bff'};
        border: ${(props) => props.theme === 'primary' ? '1px solid #007bff' : '1px solid #007bff'};
    }

    &:active {
        opacity: 0.5;
    }
`;
