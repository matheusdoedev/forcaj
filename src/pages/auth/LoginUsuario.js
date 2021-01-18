import { useContext } from "react";
import { useHistory } from "react-router-dom";

import Seo from "../../components/Seo/Seo";
import CadastroLayout from "../../layouts/CadastroLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { AuthContext } from "../../contexts/auth";

const LoginUsuario = () => {
  const { handleLogin, password, email, setPassword, setEmail } = useContext(
    AuthContext
  );

  const router = useHistory();

  return (
    <>
      <Seo
        title="Login do usuário"
        description="Login do usuário"
        type="website"
        lang="pt-br"
      />

      <CadastroLayout
        onSubmit={(event) => {
          event.preventDefault();

          handleLogin(() => {
            router.push("/encontre-um-mentor");
          });
        }}
      >
        <h1>Login</h1>

        <Input
          type="email"
          name="email"
          label="E-mail"
          value={email}
          setValue={setEmail}
          required
        />
        <Input
          type="password"
          name="password"
          label="Senha"
          value={password}
          setValue={setPassword}
          required
        />
        <Button as="button" type="submit" content="Entrar" />
      </CadastroLayout>
    </>
  );
};

export default LoginUsuario;
