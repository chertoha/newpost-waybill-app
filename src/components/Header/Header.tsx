import Container from "components/Container";

import { HiOutlineDocumentSearch } from "react-icons/hi";
import { AiOutlineUnorderedList } from "react-icons/ai";

import { ROUTES } from "router";
import {
  IconWrapper,
  StyledHeader,
  StyledLink,
  TextWrapper,
} from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <StyledLink to={ROUTES.WAYBILL} aria-label="Перевірити ТТН">
          <TextWrapper>Перевірити ТТН</TextWrapper>
          <IconWrapper>
            <HiOutlineDocumentSearch size={28} />
          </IconWrapper>
        </StyledLink>
        <StyledLink to={ROUTES.WAREHOUSE} aria-label="Список відділень">
          <TextWrapper>Список відділень</TextWrapper>
          <IconWrapper>
            <AiOutlineUnorderedList size={28} />
          </IconWrapper>
        </StyledLink>
      </StyledHeader>
    </Container>
  );
};

export default Header;
