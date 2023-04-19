import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 100px;
  gap: ${(props) => props.theme.spacing.xl};

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.xl} 0;

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
    gap: ${(props) => props.theme.spacing.md};
  }
`;

export const GridBuyBox = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    display: block;
  }
`;

export const LoadingProducts = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 160px 0;
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
