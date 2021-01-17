import styled from "styled-components";

import colors from "../../styles/settings/colors";

export const FooterWrapper = styled.footer`
  padding: var(--gap-lg) 0;
  background-color: ${colors.primary.color2};
`;

export const FooterNav = styled.nav`
  a {
    color: white;
    transition: 0.3s;

    :hover {
      color: ${colors.green};
      transition: 0.3s;
    }
  }

  li {
    margin-bottom: var(--gap-xs);

    :last-child {
      margin-bottom: 0;
    }
  }
`;

export const Copyright = styled.p`
  text-align: center;
  color: white;
  opacity: 0.6;
`;
