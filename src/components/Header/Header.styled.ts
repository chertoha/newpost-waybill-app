import { NavLink } from "react-router-dom";
import { theme } from "styles/theme";
import styled from "styled-components";

export const StyledHeader = styled("header")`
  padding: 16px 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 12px;
  border-bottom: 1px solid rgba(99, 99, 99, 0.08);

  ${theme.mq.tablet} {
    padding: 32px 0;
    column-gap: 24px;
    justify-content: flex-start;
    border-bottom: none;
  }

  ${theme.mq.desktop} {
    padding: 40px 0;
    column-gap: 32px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: ${(p) => p.theme.colors.primaryText};
  font-weight: ${(p) => p.theme.fontWeights.bold};

  ${theme.mq.tablet} {
    font-size: ${(p) => p.theme.fontSizes.m};
  }

  ${theme.mq.desktop} {
    font-size: ${(p) => p.theme.fontSizes.l};
  }

  &.active,
  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const TextWrapper = styled("span")`
  display: block;
  ${theme.mq.mobileOnly} {
    display: none;
  }
`;

export const IconWrapper = styled("span")`
  display: block;
  ${theme.mq.tablet} {
    display: none;
  }

  & > svg {
    display: block;
  }
`;
