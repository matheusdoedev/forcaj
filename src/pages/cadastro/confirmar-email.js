import { Container, Grid } from "@material-ui/core";

import MainLayout from "../../layouts/MainLayout";

const ConfirmarEmail = () => {
  return (
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
            <p>Verifique sua caixa de email.</p>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default ConfirmarEmail;
