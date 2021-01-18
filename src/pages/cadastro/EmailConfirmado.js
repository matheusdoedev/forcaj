import { Link } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";

import Seo from "../../components/Seo/Seo";

import MainLayout from "../../layouts/MainLayout";

import useActiveUser from "../../hooks/useActiveuser";

const EmailConfirmado = () => {
  useActiveUser();

  return (
    <>
      <Seo
        title="Cadastro divulgador de vagas"
        description="Cadastro divulgador de vagas"
        type="website"
        lang="pt-br"
      />

      <MainLayout>
        <Container style={{ padding: `var(--gap-xl) 0` }}>
          <Grid container spacing={2} justify="center">
            <Grid
              item
              container
              xs={12}
              alignItems="center"
              style={{ flexDirection: `column` }}
            >
              <h1 style={{ marginBottom: `var(--gap-sm)` }}>
                Email validado com sucesso
              </h1>
              <Link to="/auth/login-usuario">Vá para a tela de login</Link>
            </Grid>
          </Grid>
        </Container>
      </MainLayout>
    </>
  );
};

export default EmailConfirmado;
