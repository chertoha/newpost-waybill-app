import styled from "styled-components";
import { theme } from "styles/theme";
import { Field } from "../Field/Field.styled";

export const SelectContainer = styled("div")`
  position: relative;
`;

export const SelectField = styled(Field)``;

export const DropDown = styled("ul")`
  position: absolute;

  /* padding: 16px 24px; */
  padding: 0 24px;
  max-height: 400px;
  overflow-y: auto;

  top: 105%;

  background-color: ${(p) => p.theme.colors.secondaryBackground};
  /* border: 1px solid #d3c8c8; */
  border-top: 32px solid transparent;
  border-bottom: 32px solid transparent;
  border-radius: ${(p) => p.theme.radii.borderRadius.small};

  ${theme.mq.tablet} {
    top: 90%;
    left: 40px;
    max-width: 500px;
    /* padding: 32px; */
    padding: 0 32px;
  }
`;

export const DropDownItem = styled("li")`
  /* margin-bottom: 24px; */
  /* 
  ${theme.mq.desktop} {
    margin-bottom: 16px;
  } */

  /* &:last-child {
    margin-bottom: 0;
  } */

  border-bottom: 1px solid rgba(99, 99, 99, 0.08);

  &:last-child {
    border-bottom: none;
  }
`;

export const DropDownBtn = styled("button")`
  padding: 20px 0;
  text-align: left;
  display: block;

  font-size: ${(p) => p.theme.fontSizes.s};
  color: ${(p) => p.theme.colors.primaryText};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};

  &:hover,
  &:active {
    color: ${(p) => p.theme.colors.accent};
  }
`;
