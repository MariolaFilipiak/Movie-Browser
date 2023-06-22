import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 24px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.max}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
