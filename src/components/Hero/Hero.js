import { InputGroupt } from "../../styles/objects/input-group";

import Button from "../Button/Button";

import { HeroWrapper } from "./styles";

const Hero = () => {
  return (
    <HeroWrapper
      style={{
        backgroundImage:
          "url(" + `${require("../../../public/assets/bg-hero.jpg")}` + ")",
      }}
    >
      <h1>Conheça a Orienta Jovem</h1>
      <p>
        Plataforma que conecta mentores, bolsas e vagas do mercado de trabalho
        com os jovens de baixa renda
      </p>
      <InputGroupt>
        <Button content="Cadastre-se aqui" href="/cadastro/usuario" />
        <Button content="Login" type="secondary" href="/auth/login-usuario" />
      </InputGroupt>
    </HeroWrapper>
  );
};

export default Hero;
