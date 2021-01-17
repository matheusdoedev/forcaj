import { Container, Grid } from "@material-ui/core";

import Input from "../Input/Input";

import { SearchHeadWrapper, SearchFilterButton } from "./styles";

const SearchHead = ({ title, options }) => {
  return (
    <SearchHeadWrapper>
      <Container>
        <Grid container spacing={2} style={{ marginBottom: `var(--gap-md)` }}>
          <Grid item container xs={12} justify="center">
            <h1>{title} por area</h1>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginBottom: `var(--gap-lg)` }}>
          {options.map((option) => (
            <Grid item container md={3}>
              <SearchFilterButton>{option.label}</SearchFilterButton>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2}>
          <Grid
            item
            container
            xs={12}
            alignItems="center"
            style={{ flexDirection: `column` }}
          >
            <h2 style={{ marginBottom: `var(--gap-md)` }}>{title} por nome</h2>
            <Input name="encontre-mentor" placeholder="Encontre um mentor" />
          </Grid>
        </Grid>
      </Container>
    </SearchHeadWrapper>
  );
};

export default SearchHead;
