import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 100px;
  gap: ${(props) => props.theme.spacing.xl};

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: ${(props) => props.theme.spacing.xl};

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    display: block;
  }

  @media (max-width: 1280px) {
    padding: ${(props) => props.theme.spacing.xl}
      ${(props) => props.theme.spacing.md};
  }
`;

export const GridProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.theme.spacing.xl};
  padding-top: ${(props) => props.theme.spacing.xl};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GridBuyBox = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    display: block;
  }
`;
