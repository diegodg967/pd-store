import styled from 'styled-components';

export const SelectWrapper = styled.select`
  width: 100%;
  max-width: 290px;
  height: 40px;
  padding: ${(props) => props.theme.spacing.sm};
  border: 1px solid #e7e7e7;
  border-radius: ${(props) => props.theme.borderRadius.xs};
  background: ${(props) => props.theme.colors.white};
  font-weight: 300;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: none;
  }
`;
