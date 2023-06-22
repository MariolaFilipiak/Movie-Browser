import { Link } from "react-router-dom";
import styled from "styled-components";

export const Tile = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
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
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: center;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  aspect-ratio: 2 / 3;
  display: block;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 34vw;
    height: auto;
    min-width: 114px;
    margin: 0px;
  }
`;
export const Title = styled.p`
  font-size: 22px;
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: 500;
  word-break: break-word;
  line-height: 1.3;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 4px;
  }
`;

export const Year = styled.p`
  color: ${({ theme }) => theme.color.waterloo};
  margin: 0px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 13px;
    margin-bottom: 0px;
  }
`;
export const Rating = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-items: flex-end;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    align-items: flex-start;
  }
`;
export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-top: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 8px;
  }
`;

export const TagsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
export const Tags = styled.div``;
export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 12px;

  background: #e4e6f0;
  border-radius: 5px;
  font-size: 14px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    align-self: flex-start;
    font-size: 10px;
    padding: 4px 8px;
  }
`;
export const styleIcon = (Icon) => styled(Icon)`
  height: 24px;
  width: 24px;
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    height: 16px;
    width: 30vw;
  }
`;
export const InfoBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-left: 16px;
  }
`;
