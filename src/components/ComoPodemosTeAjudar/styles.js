import styled from "styled-components";
import colors from "../../styles/settings/colors";

export const ComoPodemosTeAjudarWrapper = styled.section`
  padding: var(--gap-xl) 0;
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

export const OptionCard = styled.a`
  height: 200px;
  position: relative;
  background-size: cover;

  h3 {
    position: absolute;
    top: var(--gap-md);
    right: var(--gap-md);

    color: white;
  }
`;

export const OptionCardRight = styled(OptionCard)`
  h3 {
    top: 0;
    right: 0;
    bottom: var(--gap-md);
    left: var(--gap-md);
  }
`;
