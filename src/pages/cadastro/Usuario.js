import { useContext } from "react";
import { useHistory } from "react-router-dom";

import Seo from "../../components/Seo/Seo";
import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";

import CadastroLayout from "../../layouts/CadastroLayout";
import Button from "../../components/Button/Button";

import { AuthContext } from "../../contexts/auth";

const CadastroUsuario = () => {
  const {
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

  const router = useHistory();

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

          if (roles[0] === "estudante") {
            router.push("/cadastro/estudante");
          } else if (roles[0] === "mentor") {
            router.push("/cadastro/mentor");
          } else if (roles[0] === "doador-de-bolsas") {
            router.push("/cadastro/doador-de-bolsas");
          } else {
            router.push("/cadastro/divulgador-de-vagas");
          }
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
            width: `60%`,
            marginBottom: `var(--gap-xs)`,
          }}
        >
          <Checkbox
            label="Estudante"
            checked={roles.includes("estudante")}
            handleChange={(event) => {
              if (event.currentTarget.checked === true) {
                setRoles(["estudante"]);
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
                setRoles(["mentor"]);
              } else {
                setRoles(roles.filter((i) => i !== "mentor"));
              }
            }}
          />
          <Checkbox
            checked={roles.includes("doador-de-bolsas")}
            handleChange={(event) => {
              if (event.currentTarget.checked === true) {
                setRoles(["doador-de-bolsas"]);
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
                setRoles(["divulgador-de-vagas"]);
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
