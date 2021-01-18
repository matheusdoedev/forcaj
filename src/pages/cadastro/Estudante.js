import { useContext } from "react";
import { useHistory } from "react-router-dom";

import Seo from "../../components/Seo/Seo";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import CadastroLayout from "../../layouts/CadastroLayout";

import { AuthContext } from "../../contexts/auth";

const CadastroEstudante = () => {
  const { handleSignIn } = useContext(AuthContext);

  const router = useHistory();

  return (
    <>
      <Seo
        title="Cadastro estudante"
        description="Cadastro estudante"
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
        <h1>Cadastro do Estudante</h1>

        <Input name="age" label="Idade" required />
        <Input name="escola" label="Escola" required />
        <Input name="renda" label="Renda" required />
        <Input name="nis" label="NIS" required />

        <Button as="button" type="submit" content="Concluir" />
      </CadastroLayout>
    </>
  );
};

export default CadastroEstudante;
