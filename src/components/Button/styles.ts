import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.div<{
  noPadding?: boolean;
  buttonType?: 'primary' | 'secondary' | 'grey';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  cursor: pointer;
  padding: 0 ${(props) => (props.noPadding ? 0 : props.theme.spacing.md)};
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 500;
  text-align: center;

  :hover {
    filter: brightness(1.2);
  }

  ${(props) =>
    props.buttonType === 'secondary' &&
    css`
      background: transparent;
      color: ${props.theme.colors.black};
      text-align: left;
    `}

  ${(props) =>
    props.buttonType === 'grey' &&
    css`
      filter: brightness(2.2) saturate(0);

      :hover {
        filter: brightness(1.8) saturate(0);
      }
    `}
`;

export const IconWrapper = styled.div`
  margin-left: ${(props) => props.theme.spacing.md};
`;
