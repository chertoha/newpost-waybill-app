import styled from "styled-components";
import { Field } from "components/UIKit/Field/Field.styled";
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

export const WaybillField = styled(Field)`
  margin-bottom: 16px;

  ${theme.mq.tablet} {
    width: 461px;
    margin-bottom: 0;
  }

  ${theme.mq.desktop} {
    width: 519px;
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
