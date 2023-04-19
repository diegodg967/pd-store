import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.colors.suface};
    font-family: 'Work Sans', sans-serif;
    color: ${theme.colors.black};
  }
`;
