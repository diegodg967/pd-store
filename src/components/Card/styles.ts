import { SyntheticEvent } from 'react';
import styled, { css } from 'styled-components';

export const CardWrapper = styled.div<{
  onClick?: (event: SyntheticEvent<HTMLDivElement>) => unknown;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 20px -4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  transition: all 0.2s;

  ${(props) =>
    props.onClick &&
    css`
      cursor: pointer;

      :hover {
        transform: scale(1.05);
      }
    `}
`;
