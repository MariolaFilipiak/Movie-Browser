import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as VideoIcon } from "./video.svg";

const activeClassName = "active";

export const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -1.5px;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
  }
  @media (max-width: 530px) {
    font-size: 13px;
  }
`;

export const StyledVideoIcon = styled(VideoIcon)`
  margin: 16px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 10px;
    max-width: 22px;
    max-height: 22px;
  }

  @media (max-width: 530px) {
    margin: auto 8px;
    max-width: 16px;
    max-height: 16px;
  }
`;

export const NavBar = styled.nav`
  margin: auto;
  flex-basis: 1368px;
  min-height: 94px;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: 530px) {
    grid-template-columns: auto;
    justify-content: center;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 64px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  @media (max-width: 530px) {
    grid-template-columns: minmax(70px, 230px) 1fr 1fr;
    margin-right: 28px;
    margin-left: 18px;
  }
`;

export const NavItem = styled.li`
  gap: 12px;
`;

export const StyledNavLinkTitle = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;

  &:hover {
    color: ${({ theme }) => theme.color.silver};
  }

  &:active {
    color: ${({ theme }) => theme.color.white};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 13px;
  }
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  font-style: normal;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  display: flex;
  align-items: center;

  @media (max-width: 530px) {
    font-size: 12px;
  }

  &:hover {
    color: ${({ theme }) => theme.color.silver};
  }

  &:active {
    color: ${({ theme }) => theme.color.white};
  }

  &.${activeClassName} {
    border-top: 1px solid ${({ theme }) => theme.color.white};
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
    border-left: 1px solid ${({ theme }) => theme.color.white};
    border-right: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 33px;
    padding: 14px;

    @media (max-width: 530px) {
      padding: 8px;
      padding: 8px 10px;
    }
  }
`;
