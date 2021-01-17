import styled from "styled-components";

import colors from "../../styles/settings/colors";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;

  > ul {
    display: flex;
    justify-content: flex-end;

    a {
      color: white;
      transition: 0.3s;
    }

    a:hover {
      transition: 0.3s;
      color: ${colors.green};
    }
  }
`;
