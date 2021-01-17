import { Container, Grid } from "@material-ui/core";

import Button from "../Button/Button";

import { SearchResultsWrapper, ResultCard } from "./styles";

const SearchResults = ({ title, options }) => {
  return (
    <SearchResultsWrapper>
      <Container>
        <Grid container spacing={2}>
          <Grid item container xs={12} justify="center">
            <h2>{title}</h2>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {options.map((option, index) => (
            <Grid key={index} item container md={3} justify="center">
              <ResultCard>
                <img src={option.src} alt={option.name} />
                <h3>{option.name}</h3>
                <p>{option.area}</p>
                <Button href="/" content="Ver Perfil" />
              </ResultCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SearchResultsWrapper>
  );
};

export default SearchResults;
