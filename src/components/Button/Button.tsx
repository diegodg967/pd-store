import { ButtonHTMLAttributes, ReactNode, SyntheticEvent } from 'react';

import { ButtonWrapper, IconWrapper } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  label: string;
  noPadding?: boolean;
  onClick: (event: SyntheticEvent<HTMLDivElement>) => unknown;
  buttonType?: 'primary' | 'secondary' | 'grey';
}

export const Button = ({
  icon,
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
      {icon && <IconWrapper>{icon}</IconWrapper>}
    </ButtonWrapper>
  );
};
