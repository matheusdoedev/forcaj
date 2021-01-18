import { useContext } from "react";
import { useHistory } from "react-router-dom";

import Seo from "../../components/Seo/Seo";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import CadastroLayout from "../../layouts/CadastroLayout";

import { AuthContext } from "../../contexts/auth";

const CadastroDivulgadorDeVagas = () => {
  const { handleSignIn } = useContext(AuthContext);

  const router = useHistory();

  return (
    <>
      <Seo
        title="Cadastro divulgador de vagas"
        description="Cadastro divulgador de vagas"
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
        <h1>Cadastro Divulgador de Vagas</h1>

        <Input name="area" label="Área" required />
        <Input name="quantidade" label="Quantidade" required />
        <Input name="empresa" label="Empresa" required />

        <Button type="button" content="Concluir" />
      </CadastroLayout>
    </>
  );
};

export default CadastroDivulgadorDeVagas;
