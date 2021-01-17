import { useContext } from "react";
import { useRouter } from "next/router";

import Seo from "../../components/Seo/Seo";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";

import CadastroLayout from "../../layouts/CadastroLayout";
import Button from "../../components/Button/Button";

import { AuthContext } from "../../contexts/auth";

const CadastroUsuario = () => {
  const {
    handleSignIn,
    name,
    password,
    email,
    roles,
    photoUrl,
    setName,
    setEmail,
    setPassword,
    setPhotoUrl,
    setRoles,
  } = useContext(AuthContext);

  const router = useRouter();

  return (
    <>
      <Seo
        title="Cadastro do usuário"
        description="Cadastre-se aqui"
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
        <h1>Cadastro do usuário</h1>

        <Input
          name="name"
          label="Nome"
          value={name}
          setValue={setName}
          required
        />
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
        <Input
          type="url"
          name="photoUrl"
          label="Foto"
          value={photoUrl}
          setValue={setPhotoUrl}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: `100%`,
            marginBottom: `var(--gap-xs)`,
          }}
        >
          <Checkbox
            label="Estudante"
            checked={roles.includes("estudante")}
            handleChange={(event) => {
              if (event.currentTarget.checked === true) {
                setRoles([...roles, "estudante"]);
              } else {
                setRoles(roles.filter((i) => i !== "estudante"));
              }
            }}
          />
          <Checkbox
            label="Mentor"
            checked={roles.includes("mentor")}
            handleChange={(event) => {
              if (event.currentTarget.checked === true) {
                setRoles([...roles, "mentor"]);
              } else {
                setRoles(roles.filter((i) => i !== "mentor"));
              }
            }}
          />
          <Checkbox
            checked={roles.includes("doador-de-bolsas")}
            handleChange={(event) => {
              if (event.currentTarget.checked === true) {
                setRoles([...roles, "doador-de-bolsas"]);
              } else {
                setRoles(roles.filter((i) => i !== "doador-de-bolsas"));
              }
            }}
            label="Doador de bolsas de estudo"
          />
          <Checkbox
            label="Divulgador de vagas"
            checked={roles.includes("divulgador-de-vagas")}
            handleChange={(event) => {
              if (event.currentTarget.checked === true) {
                setRoles([...roles, "divulgador-de-vagas"]);
              } else {
                setRoles(roles.filter((i) => i !== "divulgador-de-vagas"));
              }
            }}
          />
        </div>
        <Button type="button" content="Enviar" />
      </CadastroLayout>
    </>
  );
};

export default CadastroUsuario;
