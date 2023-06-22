import styled from "styled-components";
import { ReactComponent as Danger } from "./Danger.svg";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled(Danger)`
    width: 100px;
    height: 90px;
    margin-top: 195px;    
`;

export const Header = styled.h2`
    text-align: center;
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin-top: 38px;
`;

export const Info = styled.div`
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    margin-top: 24px;
    width: 426px;
`;

export const Button = styled(Link)`
    margin-top: 24px;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    background: #0044CC;
   color: ${({ theme }) => theme.color.white};    text-decoration: none;
    padding: 16px 24px;
`;
