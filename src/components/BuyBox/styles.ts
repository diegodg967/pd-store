import styled from 'styled-components';

export const BuyBoxWrapper = styled.div`
  position: sticky;
  top: ${(props) => props.theme.spacing.xl};
  max-height: calc(100vh - (${(props) => props.theme.spacing.xl} * 2));
  overflow: auto;
  border-radius: ${(props) => props.theme.borderRadius.sm};
  box-shadow: 0px 4px 20px -4px rgba(0, 0, 0, 0.25);
`;

export const BuyBoxHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BuyBoxTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 500;
`;

export const BuyBoxCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 400;
`;

export const BuyBoxProducts = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
`;

export const BuyBoxProduct = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.suface};
  padding: ${(props) => props.theme.spacing.md} 0;
`;

export const BuyBoxProductContent = styled.div`
  flex: 1;
`;

export const BuyBoxProductPrice = styled.div``;

export const BuyBoxProductTitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 400;
`;

export const BuyBoxProductVariantTitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 400;
`;

export const BuyBoxProductRemove = styled.div`
  padding: ${(props) => props.theme.spacing.sm};
  cursor: pointer;
`;

export const BuyBoxProductRemoveWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const BuyBoxSubtotal = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.sm};
  padding: ${(props) => props.theme.spacing.lg} 0
    ${(props) => props.theme.spacing.md};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 600;
`;

export const BuyBoxFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const EmptyBuyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.xl} 0;
`;
