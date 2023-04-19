import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.div<{
  noPadding?: boolean;
  buttonType?: 'primary' | 'secondary';
}>`
  display: flex;
  align-items: center;
  height: 48px;
  cursor: pointer;
  padding: 0 ${(props) => (props.noPadding ? 0 : props.theme.spacing.md)};
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 500;

  ${(props) =>
    props.buttonType === 'secondary' &&
    css`
      background: transparent;
      color: ${props.theme.colors.black};
    `}
`;
