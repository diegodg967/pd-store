import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    colors: {
      primary: string;
      black: string;
      suface: string;
      white: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}

export const theme: DefaultTheme = {
  borderRadius: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  colors: {
    primary: '#13649D',
    black: '#1B1B1B',
    suface: '#F5F3F6',
    white: '#FCFCFD',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
    xxl: '32px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
};
