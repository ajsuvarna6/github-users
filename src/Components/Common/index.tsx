import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex: 1;
`;

const Span = styled.span`
    display: flex;
`;

const Input = styled.input`
    display: flex;
    flex: 1;
    border: 1px solid #ccc;
    padding: 10px 15px;
    height: 20px;
`;

const Button = styled.button`
    border: 1px solid #ccc;
    outline: none;
    background-color: #fff;
    font-size: 12px;
    color: #000;
    cursor: pointer;
    &:hover, &:active {
        background-color: #f5f5f5;
    }
`;


const Image = styled.img`
    display: flex;
`;

const Anchor = styled.a`
    text-decoration: none;
`;

export { Div, Span, Input, Button, Image, Anchor };