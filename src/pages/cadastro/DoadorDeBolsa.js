import { useContext } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../components/Input/Input";

import CadastroLayout from "../../layouts/CadastroLayout";
import Button from "../../components/Button/Button";

import { AuthContext } from "../../contexts/auth";

const CadastroDoadorDeVaga = () => {
  const { handleSignIn } = useContext(AuthContext);

  const router = useHistory();

  return (
    <CadastroLayout
      onSubmit={(event) => {
        event.preventDefault();

        handleSignIn(event, () => {
          router.push("/cadastro/confirmar-email");
        });
      }}
    >
      <h1>Cadastro Doador de Bolsa</h1>

      <Input name="area" label="Área" required />
      <Input name="quantidade" label="Quantidade" required />
      <Input name="empresa" label="Empresa" required />

      <Button type="button" content="Concluir" />
    </CadastroLayout>
  );
};

export default CadastroDoadorDeVaga;
