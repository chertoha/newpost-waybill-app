import styled from "styled-components";
import { theme } from "styles/theme";

export const Field = styled("input")`
  display: block;
  width: 100%;
  padding: 13px 24px;

  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 1.25;
  color: #968787;

  border: 1px solid #d3c8c8;
  border-radius: ${(p) => p.theme.radii.borderRadius.small};
  background-color: ${(p) => p.theme.colors.primaryBackground};

  ${theme.mq.tablet} {
    padding: 13px 32px;
    font-size: ${(p) => p.theme.fontSizes.s};
  }

  ${theme.mq.desktop} {
    font-size: ${(p) => p.theme.fontSizes.m};
  }
`;
