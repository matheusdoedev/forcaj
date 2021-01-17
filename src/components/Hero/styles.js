import styled from "styled-components";

export const HeroWrapper = styled.section`
  min-height: 90vh;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  > h1 {
    color: white;
    margin-bottom: var(--gap-xs);
  }

  > p {
    color: white;
    margin-bottom: var(--gap-sm);
  }
`;
