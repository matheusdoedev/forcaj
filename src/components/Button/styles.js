import styled from "styled-components";

import { Link } from "react-router-dom";

import colors from "../../styles/settings/colors";
import border from "../../styles/tools/border";

export const ButtonWrapper = styled(Link)`
  display: block;
  margin: 0 auto;
  padding: var(--gap-xs) var(--gap-md);
  background-color: ${(props) =>
    props.type === "secondary"
      ? `white !important`
      : `${colors.green} !important`};
  color: ${(props) =>
    props.type === "secondary"
      ? `${colors.green} !important`
      : `${colors.primary.color2} !important`};
  transition: 0.3s;
  border: none;
  ${border.buttonRadius}

  :hover {
    filter: brightness(85%);
    transition: 0.3s;
    text-decoration: none !important;
  }
`;
