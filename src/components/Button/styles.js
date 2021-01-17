import styled from "styled-components";

import Link from "next/link";

import colors from "../../styles/settings/colors";
import border from "../../styles/tools/border";

export const ButtonWrapper = styled.a`
  display: block;
  margin: 0 auto;
  padding: var(--gap-xs) var(--gap-lg);
  background-color: ${(props) =>
    props.type === "secondary"
      ? `white !important`
      : `${colors.green} !important`};
  color: ${(props) =>
    props.type === "secondary"
      ? `${colors.green} !important`
      : `white !important`};
  transition: 0.3s;
  border: none;
  ${border.buttonRadius}

  :hover {
    filter: brightness(85%);
    transition: 0.3s;
    text-decoration: none !important;
  }
`;
