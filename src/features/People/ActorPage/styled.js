import styled from "styled-components";

export const TileWrapper = styled.div`
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

export const TileContainer = styled.div`
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

export const Image = styled.img`
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

  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    width: 114px;
    height: auto;
  }
`;

export const Content = styled.div`
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

export const Title = styled.header`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 1.3;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 40px 40px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 4px;
    margin: 0px 0px 4px;
  }
`;

export const InfoLabel = styled.span`
  font-size: 18px;
  line-height: 1.2;
  margin-right: 10px;
  color: ${({ theme }) => theme.color.stormGrey};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    display: none;
  }
`;

export const InfoText = styled.span`
  font-size: 18px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 12px;
    line-height: 1.3;
    margin-bottom: 8px;
    padding: 0;
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
