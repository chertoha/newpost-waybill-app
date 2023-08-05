import styled from "styled-components";

export const List = styled("ul")``;

export const Item = styled("li")`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }

  background-color: transparent;
`;

export const ItemButton = styled("button")`
  padding: 13px;
  display: block;
  width: 100%;
  overflow: hidden;

  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  color: ${(p) => p.theme.colors.secondaryText};

  border-radius: ${(p) => p.theme.radii.borderRadius.small};
  background-color: ${(p) => p.theme.colors.secondaryBackground};

  &:hover {
    background-color: ${(p) => p.theme.colors.accent};
    color: #f0e9ee;
  }
`;
