import styled from "styled-components";
import { theme } from "styles/theme";

export const StyledForm = styled("form")`
  width: 100%;
  margin-bottom: 16px;

  ${theme.mq.tablet} {
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${theme.mq.desktop} {
    justify-content: flex-start;
    column-gap: 24px;
  }
`;

export const Field = styled("input")`
  display: block;
  width: 100%;
  padding: 13px 24px;
  margin-bottom: 16px;

  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 1.25;
  color: #968787;

  border: 1px solid #d3c8c8;
  border-radius: ${(p) => p.theme.radii.borderRadius.small};
  background-color: ${(p) => p.theme.colors.primaryBackground};

  ${theme.mq.tablet} {
    width: 461px;
    padding: 13px 32px;
    margin-bottom: 0;
    font-size: ${(p) => p.theme.fontSizes.s};
    /* line-height: 1.2; */
  }

  ${theme.mq.desktop} {
    width: 519px;
    font-size: ${(p) => p.theme.fontSizes.m};
    /* line-height: 1.2; */
  }
`;

export const Submit = styled("button")`
  width: 100%;
  padding: 14px;

  color: #ffffff;
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 1.25;

  background-color: ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radii.borderRadius.small};

  ${theme.mq.tablet} {
    width: 219px;
    align-self: stretch;
  }

  ${theme.mq.desktop} {
    width: 302px;
    font-size: 20px;
  }

  &:hover,
  &:active {
    background-color: ${(p) => p.theme.colors.activeAccent};
  }
`;
