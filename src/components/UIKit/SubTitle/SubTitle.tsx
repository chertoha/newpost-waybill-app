import { FC } from "react";
import { StyledSubTitle } from "./SubTitle.styled";

interface ISubTitleProps {
  text: string;
}

const SubTitle: FC<ISubTitleProps> = ({ text }) => {
  return <StyledSubTitle>{text}</StyledSubTitle>;
};

export default SubTitle;
