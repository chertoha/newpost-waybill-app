import Container from "components/Container";
import { ROUTES } from "router";
import {
  IconWrapper,
  StyledHeader,
  StyledLink,
  TextWrapper,
} from "./Header.styled";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { AiOutlineUnorderedList } from "react-icons/ai";

const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <StyledLink to={ROUTES.WAYBILL}>
          <TextWrapper>Перевірити ТТН</TextWrapper>
          <IconWrapper>
            <HiOutlineDocumentSearch size={32} />
          </IconWrapper>
        </StyledLink>
        <StyledLink to={ROUTES.WAREHOUSE}>
          <TextWrapper>Список відділень</TextWrapper>
          <IconWrapper>
            <AiOutlineUnorderedList size={32} />
          </IconWrapper>
        </StyledLink>
      </StyledHeader>
    </Container>
  );
};

export default Header;
