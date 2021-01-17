import { useContext } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../components/Input/Input";

import CadastroLayout from "../../layouts/CadastroLayout";
import Button from "../../components/Button/Button";

import { AuthContext } from "../../contexts/auth";

const CadastroMentor = () => {
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
      <h1>Cadastro do Mentor</h1>

      <Input name="area" label="Área" required />
      <Input name="data" label="Data" required />
      <Input name="horario" label="Horário" required />
      <Input name="experiencia" label="Experiência" required />

      <Button type="button" content="Concluir" />
    </CadastroLayout>
  );
};

export default CadastroMentor;
