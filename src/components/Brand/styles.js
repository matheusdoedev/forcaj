import styled from "styled-components";

import { Link } from "react-router-dom";

export const BrandWrapper = styled(Link)`
  cursor: pointer;

  > img {
    width: 50px;
    height: 50px;
  }
`;
