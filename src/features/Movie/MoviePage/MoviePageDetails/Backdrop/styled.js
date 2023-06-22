import styled from "styled-components";
import { ReactComponent as Star } from "../../../../../core/icon/Vector.svg";

export const BackdropWrapper = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.black};
  margin-bottom: 64px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-bottom: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 16px;
  }
`;

export const BackdropContainer = styled.section`
  position: relative;
  max-width: 1368px;
  margin: 0 auto;

  &&::after {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        270deg,
        #000000 0%,
        rgba(0, 0, 0, 0.689555) 4.66%,
        rgba(0, 0, 0, 0.439033) 9.34%,
        rgba(0, 0, 0, 0.20628) 15.16%,
        rgba(0, 0, 0, 0) 24.22%
      ),
      linear-gradient(
        90deg,
        #000000 0%,
        rgba(0, 0, 0, 0.689555) 4.66%,
        rgba(0, 0, 0, 0.439033) 9.34%,
        rgba(0, 0, 0, 0.20628) 15.16%,
        rgba(0, 0, 0, 0) 24.22%
      ),
      linear-gradient(
        180deg,
        #000000 0%,
        rgba(0, 0, 0, 0.689555) 4.66%,
        rgba(0, 0, 0, 0.439033) 9.34%,
        rgba(0, 0, 0, 0.20628) 15.16%,
        rgba(0, 0, 0, 0) 24.22%
      ),
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 58.48%,
        rgba(0, 0, 0, 0.106473) 63.17%,
        rgba(0, 0, 0, 0.235359) 68.85%,
        rgba(0, 0, 0, 0.492821) 78.08%,
        rgba(0, 0, 0, 0.740286) 85.86%,
        #000000 100%
      );
  }
`;

export const BackdropImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const BackdropBox = styled.div`
  position: absolute;
  left: 2%;
  bottom: 40px;
  z-index: 3;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    bottom: 0;
  }
`;

export const RatingWrapper = styled.div`
display: block;
margin-bottom: 16px;

@media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
    margin-bottom: 2px;
}
`



export const BackdropTitle = styled.h1`
  font-size: 64px;
  font-weight: 600;
  line-height: 76px;
  margin: 25px;
  margin-left: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.max}) {
    font-size: 48px;
    line-height: 56px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 34px;
    line-height: 38px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 24px;
    line-height: 28px;
    margin: 8px;
    margin-left: 0;
  }
`;

export const RatingBox = styled.div`
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 8px;
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
    font-size: 14px;
    line-height: 18px;
    margin: 4px;
  }
`;

export const RateOn = styled.span`
  font-size: 16px;
  vertical-align: middle;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const Votes = styled.span`
  font-size: 15px;
  line-height: 19px;
  vertical-align: middle;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 10px;
    margin-left: 8px;
    margin-bottom: 8px;
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
  }
`;
