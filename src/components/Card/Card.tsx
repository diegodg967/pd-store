import { ReactNode, SyntheticEvent } from 'react';

import { CardWrapper } from './styles';

interface Props {
  children: ReactNode;
  onClick?: (event: SyntheticEvent<HTMLDivElement>) => unknown;
}

export const Card = ({ children, onClick }: Props) => (
  <CardWrapper {...(onClick && { onClick })}>{children}</CardWrapper>
);
