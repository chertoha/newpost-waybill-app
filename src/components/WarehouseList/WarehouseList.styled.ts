import styled from "styled-components";
import { theme } from "styles/theme";

export const ListWrapper = styled("div")`
  margin-top: 32px;
  padding: 24px;

  color: ${(p) => p.theme.colors.secondaryText};
  font-size: ${(p) => p.theme.fontSizes.s};

  background-color: ${(p) => p.theme.colors.primaryBackground};
  border-radius: ${(p) => p.theme.radii.borderRadius.small};

  ${theme.mq.tablet} {
    margin-top: 40px;
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

export const LoadMoreBtn = styled("button")`
  display: block;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;

  font-size: ${(p) => p.theme.fontSizes.xxs};
  text-decoration: underline;
  color: rgba(175, 61, 143, 0.6);

  ${theme.mq.tablet} {
    margin-top: 40px;
    font-size: ${(p) => p.theme.fontSizes.l};
  }
`;
