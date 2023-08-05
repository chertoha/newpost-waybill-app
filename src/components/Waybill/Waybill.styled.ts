import styled from "styled-components";
import { theme } from "styles/theme";
// import { visuallyHidden } from "styles/visuallyHidden";

export const WaybillContainer = styled("div")`
  padding-top: 40px;

  ${theme.mq.tablet} {
    padding-top: 60px;
  }

  ${theme.mq.desktop} {
    padding-top: 80px;
  }
`;

// export const Title = styled("h1")`
//   font-size: ${(p) => p.theme.fontSizes.l};
//   font-weight: ${(p) => p.theme.fontWeights.bold};
//   text-align: center;

//   margin-bottom: 24px;

//   ${theme.mq.tablet} {
//     ${visuallyHidden()}
//   }
// `;

export const Data = styled("div")`
  ${theme.mq.desktop} {
    display: flex;
    column-gap: 24px;
  }
`;

export const InfoWrapper = styled("div")<{ $isvisible: string }>`
  display: ${({ $isvisible }) => ($isvisible ? "block" : "none")};
  padding: 24px;
  margin-bottom: 32px;
  width: 100%;

  font-size: ${(p) => p.theme.fontSizes.xxs};
  font-weight: ${(p) => p.theme.fontWeights.medium};

  background-color: ${(p) => p.theme.colors.primaryBackground};
  border-radius: ${(p) => p.theme.radii.borderRadius.small};

  ${theme.mq.tablet} {
    margin-bottom: 40px;
    padding: 24px 40px;
    font-size: ${(p) => p.theme.fontSizes.s};
    border-radius: ${(p) => p.theme.radii.borderRadius.medium};
  }

  ${theme.mq.desktop} {
    display: block;
    margin-bottom: 0;
    padding: 64px 32px;
    font-size: ${(p) => p.theme.fontSizes.l};
  }
`;
