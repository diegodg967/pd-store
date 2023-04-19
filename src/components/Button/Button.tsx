import { ButtonHTMLAttributes, SyntheticEvent } from 'react';

import { ButtonWrapper } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLDivElement> {
  label: string;
  noPadding?: boolean;
  onClick: (event: SyntheticEvent<HTMLDivElement>) => unknown;
  buttonType?: 'primary' | 'secondary';
}

export const Button = ({
  label,
  noPadding = false,
  onClick,
  buttonType = 'primary',
}: ButtonProps) => {
  return (
    <ButtonWrapper
      noPadding={noPadding}
      onClick={onClick}
      buttonType={buttonType}
    >
      {label}
    </ButtonWrapper>
  );
};
