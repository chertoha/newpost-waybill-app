import { FC, ReactNode } from "react";
import { StyledContainer } from "./Container.styled";

interface IContainerProps {
  children: ReactNode;
}

const Container: FC<IContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
export default Container;
