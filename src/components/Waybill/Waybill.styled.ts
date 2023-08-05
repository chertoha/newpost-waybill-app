import styled from "styled-components";
import { theme } from "styles/theme";
import { visuallyHidden } from "styles/visuallyHidden";

export const WaybillContainer = styled("div")`
  padding-top: 40px;

  ${theme.mq.tablet} {
    padding-top: 60px;
  }

  ${theme.mq.desktop} {
    padding-top: 80px;
  }
`;

export const Title = styled("h1")`
  font-size: ${(p) => p.theme.fontSizes.l};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  text-align: center;

  ${theme.mq.tablet} {
    ${visuallyHidden()}
  }
`;
