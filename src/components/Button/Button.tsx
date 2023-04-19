import { ButtonHTMLAttributes, SyntheticEvent } from 'react';

import { ButtonWrapper } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLDivElement> {
  label: string;
  onClick: (event: SyntheticEvent<HTMLDivElement>) => unknown;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{label}</ButtonWrapper>;
};
