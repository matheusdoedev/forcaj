import { NavWrapper } from "./styles";

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <a href="/sobre">Sobre</a>
        </li>
        <li>
          <a href="/para-alunos">Para alunos</a>
        </li>
        <li>
          <a href="/para-parceiros">Para parceiros</a>
        </li>
        <li>
          <a href="/contato">Contato</a>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
