import styled from "styled-components";
import { theme } from "styles/theme";

export const ListWrapper = styled("div")`
  padding: 24px;

  color: ${(p) => p.theme.colors.secondaryText};
  font-size: ${(p) => p.theme.fontSizes.s};

  background-color: ${(p) => p.theme.colors.primaryBackground};
  border-radius: ${(p) => p.theme.radii.borderRadius.small};

  ${theme.mq.tablet} {
    padding: 32px;
    font-size: ${(p) => p.theme.fontSizes.l};
    border-radius: ${(p) => p.theme.radii.borderRadius.medium};
  }

  ${theme.mq.desktop} {
    padding: 32px 64px;
    font-size: ${(p) => p.theme.fontSizes.l};
    border-radius: ${(p) => p.theme.radii.borderRadius.medium};
  }
`;

export const List = styled("ul")`
  margin-top: 24px;

  ${theme.mq.tablet} {
    margin-top: 32px;
  }
`;

export const Item = styled("li")`
  margin-bottom: 24px;
`;
