import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 0 ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.white};
`;
