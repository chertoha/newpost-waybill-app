import styled from "styled-components";
import { theme } from "styles/theme";

export const InfoItem = styled("div")`
  margin-bottom: 24px;

  ${theme.mq.desktop} {
    margin-bottom: 40px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoItemTitle = styled("span")`
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;
