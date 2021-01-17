import { Link } from "react-router-dom";

import { NavWrapper } from "./styles";

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link href="/">Sobre</Link>
        </li>
        <li>
          <Link href="/">Para alunos</Link>
        </li>
        <li>
          <Link href="/">Para parceiros</Link>
        </li>
        <li>
          <Link href="/">Contato</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
