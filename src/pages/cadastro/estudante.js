import { useContext } from "react";
import { useRouter } from "next/router";

import Input from "../../components/Input/Input";

import CadastroLayout from "../../layouts/CadastroLayout";
import Button from "../../components/Button/Button";

import { AuthContext } from "../../contexts/auth";

const CadastroEstudante = () => {
  const { handleSignIn } = useContext(AuthContext);

  const router = useRouter();

  return (
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

      <Button type="button" content="Concluir" />
    </CadastroLayout>
  );
};

export default CadastroEstudante;
