import styled from 'styled-components';

export const PriceWrapper = styled.div<{ textSize?: string }>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  font-size: ${(props) => props.textSize || props.theme.fontSizes.xxl};
  font-weight: 700;
`;
