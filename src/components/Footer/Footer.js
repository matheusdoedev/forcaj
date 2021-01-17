import { Container, Grid } from "@material-ui/core";
import SocialMedias from "../SocialMedias/SocialMedias";

import { FooterWrapper, FooterNav, Copyright } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Grid container spacing={2} style={{ marginBottom: "var(--gap-sm)" }}>
          <Grid item container md={3} />
          <Grid item container md={3}>
            <FooterNav>
              <ul>
                <li>
                  <a href="/sobre">Sobre</a>
                </li>
                <li>
                  <a href="/para-alunos">Para alunos</a>
                </li>
                <li>
                  <a href="/para-parceiros">Para parceiros</a>
                </li>
                <li>
                  <a href="/contato">Contato</a>
                </li>
              </ul>
            </FooterNav>
          </Grid>
          <Grid item container md={3}>
            <SocialMedias />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item container xs={12} justify="center">
            <Copyright>
              Orienta Jovem 2020 @ Todos os direitos reservados&copy;
            </Copyright>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
