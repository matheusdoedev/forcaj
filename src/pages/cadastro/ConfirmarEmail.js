import { Link } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";

import Seo from "../../components/Seo/Seo";

import MainLayout from "../../layouts/MainLayout";

const ConfirmarEmail = () => {
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
                Envio de confirmação do email enviado.
              </h1>
              <p style={{ marginBottom: `var(--gap-sm)` }}>
                Verifique sua caixa de email.
              </p>
              <Link to="/">Voltar para a pagina inicial</Link>
            </Grid>
          </Grid>
        </Container>
      </MainLayout>
    </>
  );
};

export default ConfirmarEmail;
