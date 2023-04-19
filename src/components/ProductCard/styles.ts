import styled from 'styled-components';

export const ProductThumbnail = styled.div`
  img {
    display: block;
    width: 100%;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.spacing.lg};
  align-items: center;
`;

export const ProductTitle = styled.div`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 400;
`;

export const ProductPrice = styled.div`
  margin-left: ${(props) => props.theme.spacing.sm};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  font-weight: 700;
`;

export const ProductButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column-reverse;
  }
`;
