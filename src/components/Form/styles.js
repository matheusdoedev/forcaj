import styled from "styled-components";

import colors from "../../styles/settings/colors";

export const FormWrapper = styled.form`
  padding: var(--gap-xl) 0;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  h1 {
    text-align: center;
    color: ${colors.primary.color2};
    margin: 0 auto var(--gap-lg) auto;
  }
`;
