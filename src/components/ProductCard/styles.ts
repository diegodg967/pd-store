import styled from 'styled-components';

export const ProductThumbnail = styled.div`
  background: #0f0;

  img {
    display: block;
    width: 100%;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.spacing.lg};
`;

export const ProductTitle = styled.div``;

export const ProductPrice = styled.div``;

export const ProductButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.spacing.lg};
`;
