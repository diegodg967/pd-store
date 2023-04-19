import styled from 'styled-components';

import heroBannerBackground from '../../assets/images/hero-banner.jpg';

export const HeroBannerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 280px;
  background-position: center;
  background-image: url(${heroBannerBackground});
  background-size: cover;
`;
