import styled from "styled-components";

import colors from "../../styles/settings/colors";

export const SearchResultsWrapper = styled.section`
  padding: var(--gap-lg) 0;

  h2 {
    color: ${colors.primary.color2};
    margin-bottom: var(--gap-md);
  }
`;

export const ResultCard = styled.article`
  padding: var(--gap);

  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin: var(--gap-xs) 0;
  }

  p {
    margin-bottom: var(--gap-xs);
  }
`;
