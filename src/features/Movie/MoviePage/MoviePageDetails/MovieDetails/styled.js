import styled from "styled-components";
import { ReactComponent as Cover } from "../../../MoviesList/Poster.svg";
import { ReactComponent as Star } from "../../../../../core/icon/Vector.svg";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 64px auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.max}) {
    margin: 64px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 40px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 16px;
    margin-bottom: 0;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  max-width: 1368px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  background-color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: 1fr 2fr;
    margin-bottom: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 21px;
  }
`;

export const PosterImage = styled.img`
  max-width: 312px;
  max-height: 464px;
  width: 30vw;
  margin: 40px;
  border-radius: 5px;
  grid-row: span 2;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 28px;
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 16px;
    margin-bottom: 0;
  }

  @media (max-width: ${({theme}) => theme.breakpoint.min}) {
    width: 114px;
    height: auto;
  }
`;

export const PosterCover = styled(Cover)`
  width: 312px;
  height: 464px;
  margin: 40px;
  border-radius: 5px;
  grid-row: span 2;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 28px;
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 16px;
    margin-bottom: 0;
  }

  @media (max-width: ${({theme}) => theme.breakpoint.min}) {
    width: 114px;
    height: auto;
  }
`;

export const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px 40px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 28px 28px 0 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  line-height: 43px;
  font-weight: 600;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 26px;
    line-height: 27px;
    font-weight: 500;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 21px;
  }
`;

export const Year = styled.span`
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
  margin-top: 24px;
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 16px;
    line-height: 19px;
    margin-top: 16px;
    margin-bottom: 10px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 13px;
    line-height: 17px;
    margin-top: 4px;
    margin-bottom: 0;
    color: ${({ theme }) => theme.color.waterloo};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 18px;
    line-height: 22px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  line-height: 21px;
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 15px;
    line-height: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Production = styled.span``;

export const Info = styled.span`
  font-size: 18px;
  line-height: 21px;
  font-weight: 400;
  margin-right: 10px;
  color: ${({ theme }) => theme.color.stormGrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const Date = styled.span``;

export const GenreBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 16px;
  margin: 24px 0px;
  padding-left: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    gap: 8px;
    margin: 12px 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 8px 0px;
  }
`;

export const Genre = styled.li`
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.mystic};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 12px;
    padding: 6px 12px;
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 10px;
    line-height: 11px;
    padding: 4px 8px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const RatingBox = styled.div`
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 8px;
    display: flex;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    margin-bottom: 0;
  }
`;

export const Rate = styled.span`
  font-size: 30px;
  line-height: 39px;
  font-weight: 600;
  vertical-align: middle;
  margin: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 22px;
    line-height: 26px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 13px;
    line-height: 17px;
    margin: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    margin-bottom: 0;
  }
`;

export const RateOn = styled.span`
  font-size: 16px;
  vertical-align: middle;
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const Votes = styled.span`
  font-size: 15px;
  line-height: 19px;
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 13px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.color.waterloo};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    margin-bottom: 0;
    margin-top: 4px;
  }
`;

export const Icon = styled(Star)`
  width: 38px;
  height: 40px;
  vertical-align: middle;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 32px;
    height: 31px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 16px;
    height: 16px;
margin-top: 4px
   
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 32px;
  margin: 0 40px 40px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-column: span 2;
    margin-top: 32px;
    margin-left: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-column: span 2;
    font-size: 14px;
    line-height: 22px;
    margin: 16px;
  }
`;
