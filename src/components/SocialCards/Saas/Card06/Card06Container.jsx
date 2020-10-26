import styled from 'styled-components';

const titleLandscapeFontSize = 56;

const titleLandscapeLineSize = 64;

const Card06Container = styled.div`
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
    width: ${(props) => (props.isLandscape ? '512px' : '100%')};
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

  .logos {
    width: 468px;
    height: 468px;
    position: absolute;
    top: ${(props) => (props.isLandscape ? '80px' : 'auto')};
    right: ${(props) => (props.isLandscape ? '80px' : 'auto')};
    bottom: ${(props) => (props.isLandscape ? 'auto' : '80px')};
    left: ${(props) => (props.isLandscape ? 'auto' : '80px')};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .logo__container {
    height: 218px;
    width: 218px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logos .logo__container:nth-child(1) {
    background-color: ${(props) => props.logo2Color};
  }

  .logos .logo__container:nth-child(2) {
    background-color: ${(props) => props.logo3Color};
  }

  .logos .logo__container:nth-child(3) {
    background-color: ${(props) => props.logo4Color};
    align-self: flex-end;
    margin-left: ${(props) => (props.isLandscape ? 'auto' : 0)};
  }

  .feature-logo {
    cursor: pointer;
    background-color: transparent;
  }

  .logo--2 {
    height: ${(props) => {
      if (props.logo2Size === 's') {
        return '30px';
      }

      if (props.logo2Size === 'm') {
        return '50px';
      }

      if (props.logo2Size === 'l') {
        return '60px';
      }
    }};
  }

  .logo--3 {
    height: ${(props) => {
      if (props.logo3Size === 's') {
        return '30px';
      }

      if (props.logo3Size === 'm') {
        return '50px';
      }

      if (props.logo3Size === 'l') {
        return '60px';
      }
    }};
  }

  .logo--4 {
    height: ${(props) => {
      if (props.logo4Size === 's') {
        return '30px';
      }

      if (props.logo4Size === 'm') {
        return '50px';
      }

      if (props.logo4Size === 'l') {
        return '60px';
      }
    }};
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

export default Card06Container;
