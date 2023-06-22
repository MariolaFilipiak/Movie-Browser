import { Link } from "react-router-dom";
import styled from "styled-components";

export const Tile = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: column;
  background-color:${({ theme }) => theme.color.white};

  box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
  height: 100%;
  border-radius: 5px;
  padding: 16px;
  transition: opacity 1s linear 0s, transform 1s linear 0s;
  grid-template-rows: auto 1fr;
  transition: 0.3s;
  &:hover {
    opacity: 0.5s;
    transform: scale(1.03);
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 8px;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  aspect-ratio: 2 / 3;
  display: block;
`;
export const Title = styled.p`
  font-size: 22px;
  margin-top: 14px;
  margin-bottom: 50px;
  font-weight: 500;

  line-height: 1.3;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 30px;
  }
`;

export const Info = styled.span`
  text-align: center;
  justify-self: baseline;
  margin: auto;
  margin-bottom: 16px;
  margin-top: -42px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 15px;
    line-height: 17px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 13px;
    line-height: 17px;
    margin: 8px auto;
    margin-top: -24px;
  }
`;
