import { CurrencyIcon } from '../Icon';
import { PriceWrapper } from './styles';

interface PriceProps {
  price: number;
  textSize?: string;
}

export const Price = ({ price, textSize }: PriceProps) => {
  return (
    <PriceWrapper textSize={textSize}>
      <CurrencyIcon />
      {price}
    </PriceWrapper>
  );
};
