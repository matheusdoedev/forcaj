import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";

import { Container, Grid } from "@material-ui/core";

const CadastroLayout = ({ children, onSubmit }) => {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <Header />
      <Container>
        <Grid container spacing={2}>
          <Grid item container md={3} />
          <Grid item container md={6}>
            <Form onSubmit={onSubmit}>{children}</Form>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </main>
  );
};

export default CadastroLayout;
