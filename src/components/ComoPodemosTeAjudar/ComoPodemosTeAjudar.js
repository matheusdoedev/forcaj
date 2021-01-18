import { Container, Grid } from "@material-ui/core";

// import encontreMentorImg from "../../../assets/encontre-mentor.jpg";
// import sejaUmMentorImg from "../../../assets/seja-um-mentor.jpg";
// import encontreUmaBolsaImg from "../../../../assets/encontre-uma-bolsa.jpg";
// import doeUmaBolsaImg from "../../assets/doe-uma-bolsa.jpg";
// import encontreUmaVagaImg from "../../../assets/encontre-uma-vaga.jpg";
// import oferecaUmaVagaImg from "../../../assets/ofereca-uma-vaga.jpg";

import { ComoPodemosTeAjudarWrapper, OptionCard, OptionCards } from "./styles";

const comoPodemosAjudarOptions = [
  {
    src: "",
    label: "Encontre um mentor",
    href: "/encontre-um-mentor",
  },
  {
    src: "",
    label: "Seja um mentor",
    href: "/",
  },
  {
    src: "",
    label: "Encontre uma bolsa",
    href: "/encontre-uma-bolsa",
  },
  {
    src: "",
    label: "Doe uma bolsa",
    href: "/",
  },
  {
    src: "",
    label: "Encontre uma vaga",
    href: "/encontre-uma-vaga",
  },
  {
    src: "",
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
