import styled from 'styled-components';

import social from '../../../../images/332x468.jpg';

const titleLandscapeFontSize = 56;

const titleLandscapeLineSize = 64;

const Card02Container = styled.div`
  font-family: 'Roboto', sans-serif;
  width: ${(props) => (props.isLandscape ? 1200 : 1000)}px;
  height: ${(props) => (props.isLandscape ? 628 : 1000)}px;
  padding: 80px;
  transform-origin: 0 0 0;
  transform: ${(props) => `scale(${props.size})`};
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${(props) => props.mainColor};
  overflow: hidden;

  header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-bottom: 16px;
  }

  .logo {
    height: ${(props) => {
      if (props.logoSize === 's') {
        return '30px';
      }

      if (props.logoSize === 'm') {
        return '40px';
      }

      if (props.logoSize === 'l') {
        return '50px';
      }
    }};
    cursor: pointer;
  }

  .content {
    width: ${(props) => (props.isLandscape ? 632 : 840)}px;
    height: ${(props) => (props.isLandscape ? 'auto' : '266px')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${(props) => props.textColor};
    position: ${(props) => (props.isLandscape ? 'absolute' : 'static')};
    top: ${(props) => (props.isLandscape ? '50%' : 'auto')};
    transform: ${(props) =>
      props.isLandscape ? 'translateY(-50%)' : 'translateY(0)'};
  }

  .content__title {
    width: ${(props) => (props.isLandscape ? '632px' : '100%')};
    font-size: ${(props) => {
      if (props.titleSize === 's' && props.isLandscape) {
        return `${titleLandscapeFontSize * 0.84}px`;
      }

      if (props.titleSize === 'm' && props.isLandscape) {
        return `${titleLandscapeFontSize}px`;
      }

      if (props.titleSize === 'l' && props.isLandscape) {
        return `${titleLandscapeFontSize * 1.16}px`;
      }

      if (props.titleSize === 's' && !props.isLandscape) {
        return '54px';
      }

      if (props.titleSize === 'm' && !props.isLandscape) {
        return '62px';
      }

      if (props.titleSize === 'l' && !props.isLandscape) {
        return '72px';
      }
    }};
    font-weight: 500;
    line-height: ${(props) => {
      /* titleSize * 1.16 */
      if (props.titleSize === 's' && props.isLandscape) {
        return `${titleLandscapeLineSize * 0.84}px`;
      }

      if (props.titleSize === 'm' && props.isLandscape) {
        return `${titleLandscapeLineSize}px`;
      }

      if (props.titleSize === 'l' && props.isLandscape) {
        return `${titleLandscapeLineSize * 1.16}px`;
      }

      if (props.titleSize === 's' && !props.isLandscape) {
        return '60px';
      }

      if (props.titleSize === 'm' && !props.isLandscape) {
        return '72px';
      }

      if (props.titleSize === 'l' && !props.isLandscape) {
        return '74px';
      }
    }};
  }

  .social__image {
    position: absolute;
    top: ${(props) => (props.isLandscape ? '80px' : 'auto')};
    bottom: ${(props) => (props.isLandscape ? 'auto' : '80px')};
    right: ${(props) => (props.isLandscape ? '80px' : 'auto')};
    left: ${(props) => (props.isLandscape ? 'auto' : '80px')};
    width: 332px;
    height: 468px;
    background-image: ${(props) =>
      props.social === '' ? `url(${social})` : `url(${props.social})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .cta {
    color: ${(props) => props.textColor};
    position: absolute;
    bottom: 80px;
    right: ${(props) => (props.isLandscape ? 'auto' : '80px')};
    left: ${(props) => (props.isLandscape ? '80px' : 'auto')};
    display: flex;
    align-items: center;
  }

  .cta__text {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    margin-left: ${(props) => (props.isLandscape ? 0 : 'auto')};
  }
`;

export default Card02Container;
