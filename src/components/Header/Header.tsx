import { NavLink } from "react-router-dom";
import { ROUTES } from "router";

const Header = () => {
  return (
    <header>
      <NavLink to={ROUTES.WAYBILL}>Перевірити ТТН</NavLink>
      <NavLink to={ROUTES.WAREHOUSE}>Список відділень</NavLink>
    </header>
  );
};

export default Header;
