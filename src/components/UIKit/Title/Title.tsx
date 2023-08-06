import { FC } from "react";
import { StyledTitle } from "./Title.styled";

interface ITitleProps {
  text: string;
}

const Title: FC<ITitleProps> = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;
