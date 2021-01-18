import { useContext } from "react";
import { useHistory } from "react-router-dom";

import Seo from "../../components/Seo/Seo";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import CadastroLayout from "../../layouts/CadastroLayout";

import { AuthContext } from "../../contexts/auth";

const CadastroDoadorDeVaga = () => {
  const { handleSignIn } = useContext(AuthContext);

  const router = useHistory();

  return (
    <>
      <Seo
        title="Cadastro doador de bolsa"
        description="Cadastro doador de bolsa"
        type="website"
        lang="pt-br"
      />

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
    </>
  );
};

export default CadastroDoadorDeVaga;
