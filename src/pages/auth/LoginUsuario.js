import { useContext } from "react";
import { useHistory } from "react-router-dom";

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
    <CadastroLayout
      onSubmit={(event) => {
        event.preventDefault();

        handleLogin(event, () => {});

        router.push("");
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
      <Button type="button" content="Entrar" />
    </CadastroLayout>
  );
};

export default LoginUsuario;
