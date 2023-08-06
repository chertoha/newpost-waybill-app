import styled from "styled-components";
import { theme } from "styles/theme";

export const StyledSubTitle = styled("h2")`
  text-align: center;
  margin-bottom: 8px;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.bold};

  ${theme.mq.tablet} {
    margin-bottom: 0;
    font-size: ${(p) => p.theme.fontSizes.xl};
    line-height: 1;
  }

  ${theme.mq.desktop} {
    font-size: ${(p) => p.theme.fontSizes.xxl};
  }
`;
