import styled from "styled-components";
import { theme } from "styles/theme";
import { visuallyHidden } from "styles/visuallyHidden";

export const StyledTitle = styled("h1")`
  font-size: ${(p) => p.theme.fontSizes.l};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  text-align: center;

  margin-bottom: 24px;

  ${theme.mq.tablet} {
    ${visuallyHidden()}
  }
`;
