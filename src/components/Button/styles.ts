import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  cursor: pointer;
  padding: 0 ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
`;
