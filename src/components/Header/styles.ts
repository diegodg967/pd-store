import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 0 ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.white};
`;

export const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.spacing.lg};
`;

export const HeaderCart = styled.div`
  position: relative;
`;

export const HeaderCartBadge = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -8px;
  right: -10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.xxs};
`;
