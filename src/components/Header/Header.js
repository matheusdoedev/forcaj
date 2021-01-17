import { Container, Grid } from "@material-ui/core";

import { HeaderWrapper } from "./styles";

import Nav from "../Nav/Nav";
import Brand from "../Brand/Brand";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item container xs={4} md={6}>
            <Brand />
          </Grid>
          <Grid item container xs={8} md={6} justify="flex-end">
            <Nav />
          </Grid>
        </Grid>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
