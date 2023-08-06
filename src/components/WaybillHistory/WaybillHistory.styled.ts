import styled from "styled-components";
import { theme } from "styles/theme";

export const HistoryContainer = styled("div")`
  padding: 24px;
  width: 100%;
  background-color: ${(p) => p.theme.colors.primaryBackground};
  border-radius: ${(p) => p.theme.radii.borderRadius.small};

  ${theme.mq.tablet} {
    padding: 32px;
    border-radius: ${(p) => p.theme.radii.borderRadius.medium};
  }

  ${theme.mq.desktop} {
    width: 519px;
  }
`;

export const TitleWrapper = styled("div")`
  margin-bottom: 32px;

  ${theme.mq.tablet} {
    margin-bottom: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  ${theme.mq.desktop} {
  }
`;

export const ClearButton = styled("button")`
  display: block;
  margin: 0 auto;

  font-size: ${(p) => p.theme.fontSizes.xs};
  color: rgba(175, 61, 143, 0.6);
  text-decoration: underline;

  ${theme.mq.tablet} {
    margin: 0;
    font-size: ${(p) => p.theme.fontSizes.s};
  }

  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;
