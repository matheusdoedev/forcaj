import styled from "styled-components";

import colors from "../../styles/settings/colors";
import border from "../../styles/tools/border";

import bgImg from "../../assets/bg-encontre-um-mentor.jpg";

export const SearchHeadWrapper = styled.section`
  padding: var(--gap-xl) 0 var(--gap-lg) 0;
  background: url(${bgImg});

  h1,
  h2 {
    color: white;
  }

  h2 {
    opacity: 85%;
  }

  input {
    color: white;
  }

  fieldset {
    border: 2px solid ${colors.primary.color1};

    &:hover {
      border: 2px solid ${colors.green};
    }
  }
`;

export const SearchFilterButton = styled.button`
  display: block;
  width: 100%;
  border: 2px solid ${colors.primary.color1};
  background-color: rgba(0, 0, 0, 0);
  color: white;
  padding: var(--gap-xs) var(--gap);
  transition: 0.3s;
  ${border.buttonRadius}

  :hover {
    border: 2px solid ${colors.green};
    transition: 0.3s;
  }
`;
