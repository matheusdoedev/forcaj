import styled from "styled-components";
import colors from "../../styles/settings/colors";

export const FormWrapper = styled.form`
  padding: var(--gap-xl) 0;
  width: 100%;

  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    color: ${colors.primary.color2};
    margin: 0 auto var(--gap-md) auto;
  }
`;
