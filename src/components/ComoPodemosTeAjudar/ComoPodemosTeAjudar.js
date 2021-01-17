import { Container, Grid } from "@material-ui/core";
import {
  ComoPodemosTeAjudarWrapper,
  OptionCard,
  OptionCardRight,
  OptionCards,
} from "./styles";

const comoPodemosAjudarOptions = [
  {
    src: "../../../public/assets/encontre-mentor.jpg",
    label: "Encontre um mentor",
    href: "",
  },
  {
    src: "../../../public/assets/seja-um-mentor.jpg",
    label: "Seja um mentor",
    href: "",
  },
  {
    src: "../../../public/assets/encontre-uma-bolsa.jpg",
    label: "Encontre uma bolsa",
    href: "",
  },
  {
    src: "../../../public/assets/doe-uma-bolsa.jpg",
    label: "Doe uma bolsa",
    href: "",
  },
  {
    src: "../../../public/assets/encontre-uma-vaga.jpg",
    label: "Encontre uma vaga",
    href: "",
  },
  {
    src: "../../../public/assets/ofereca-uma-vaga.jpg",
    label: "Ofereça uma vaga",
    href: "",
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
        <OptionCard
          href=""
          style={{
            backgroundImage:
              "url(" +
              `${require("../../../public/assets/encontre-mentor.jpg")}` +
              ")",
          }}
        >
          <h3>Encontre um mentor</h3>
        </OptionCard>
        <OptionCard
          href=""
          style={{
            backgroundImage:
              "url(" +
              `${require("../../../public/assets/seja-um-mentor.jpg")}` +
              ")",
          }}
        >
          <h3>Seja um mentor</h3>
        </OptionCard>
        <OptionCard
          href=""
          style={{
            backgroundImage:
              "url(" +
              `${require("../../../public/assets/encontre-uma-bolsa.jpg")}` +
              ")",
          }}
        >
          <h3>Encontre uma bolsa</h3>
        </OptionCard>
        <OptionCard
          href=""
          style={{
            backgroundImage:
              "url(" +
              `${require("../../../public/assets/doe-uma-bolsa.jpg")}` +
              ")",
          }}
        >
          <h3>Doe uma bolsa</h3>
        </OptionCard>
        <OptionCard
          href=""
          style={{
            backgroundImage:
              "url(" +
              `${require("../../../public/assets/encontre-uma-vaga.jpg")}` +
              ")",
          }}
        >
          <h3>Encontre uma vaga</h3>
        </OptionCard>
        <OptionCard
          href=""
          style={{
            backgroundImage:
              "url(" +
              `${require("../../../public/assets/ofereca-uma-vaga.jpg")}` +
              ")",
          }}
        >
          <h3>Ofereça uma vaga</h3>
        </OptionCard>
      </OptionCards>
    </ComoPodemosTeAjudarWrapper>
  );
};

export default ComoPodemosTeAjudar;
