import styled from "styled-components";

import { Link } from "react-router-dom";

import colors from "../../styles/settings/colors";

import bgOptionDefault from "../../assets/encontre-mentor.jpg";

export const ComoPodemosTeAjudarWrapper = styled.section`
  padding: var(--gap-lg) 0;
  background-color: ${colors.primary.color2};

  h2 {
    color: white;
    margin-bottom: var(--gap-lg);
  }
`;

export const OptionCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: var(--gap-sm);
  row-gap: var(--gap-sm);
`;

export const OptionCard = styled(Link)`
  display: block;
  position: relative;
  background: url(${bgOptionDefault});
  background-size: cover;
  width: 100%;
  height: 200px;
  transition: 0.3s;

  h3 {
    position: absolute;
    top: var(--gap-md);
    right: var(--gap-md);

    color: white;
  }

  :hover {
    filter: brightness(85%);
    transition: 0.3s;
  }
`;
