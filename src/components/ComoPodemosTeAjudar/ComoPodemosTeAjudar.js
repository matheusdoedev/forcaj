import { Container, Grid } from "@material-ui/core";

import encontreMentorImg from "../../assets/encontre-mentor.jpg";
import sejaUmMentorImg from "../../assets/seja-um-mentor.jpg";
import encontreUmaBolsaImg from "../../assets/encontre-uma-bolsa.jpg";
import doeUmaBolsaImg from "../../assets/doe-uma-bolsa.jpg";
import encontreUmaVagaImg from "../../assets/encontre-uma-vaga.jpg";
import oferecaUmaVagaImg from "../../assets/ofereca-uma-vaga.jpg";

import { ComoPodemosTeAjudarWrapper, OptionCard, OptionCards } from "./styles";

const comoPodemosAjudarOptions = [
  {
    src: encontreMentorImg,
    label: "Encontre um mentor",
    href: "/encontre-um-mentor",
  },
  {
    src: sejaUmMentorImg,
    label: "Seja um mentor",
    href: "/",
  },
  {
    src: encontreUmaBolsaImg,
    label: "Encontre uma bolsa",
    href: "/encontre-uma-bolsa",
  },
  {
    src: doeUmaBolsaImg,
    label: "Doe uma bolsa",
    href: "/",
  },
  {
    src: encontreUmaVagaImg,
    label: "Encontre uma vaga",
    href: "/encontre-uma-vaga",
  },
  {
    src: oferecaUmaVagaImg,
    label: "Ofereça uma vaga",
    href: "/",
  },
];

const ComoPodemosTeAjudar = () => {
  return (
    <ComoPodemosTeAjudarWrapper>
      <Container>
        <Grid container spacing={2}>
          <Grid item container xs="12" style={{ justifyContent: "center" }}>
            <h2>Como podemos te ajudar?</h2>
          </Grid>
        </Grid>
      </Container>

      <OptionCards>
        {comoPodemosAjudarOptions.map((item, index) => (
          <OptionCard key={index} src={item.src} to={item.href}>
            <h3>{item.label}</h3>
          </OptionCard>
        ))}
      </OptionCards>
    </ComoPodemosTeAjudarWrapper>
  );
};

export default ComoPodemosTeAjudar;
