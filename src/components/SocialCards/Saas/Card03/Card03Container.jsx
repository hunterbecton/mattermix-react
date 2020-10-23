import styled from 'styled-components';

const titleLandscapeFontSize = 56;

const titleLandscapeLineSize = 64;

const Card03Container = styled.div`
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
    width: 100%;
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .content__quote {
    color: ${(props) => props.textColor};
    text-align: center;
    font-size: ${(props) => {
      if (props.quoteSize === 's' && props.isLandscape) {
        return `${titleLandscapeFontSize * 0.84}px`;
      }

      if (props.quoteSize === 'm' && props.isLandscape) {
        return `${titleLandscapeFontSize}px`;
      }

      if (props.quoteSize === 'l' && props.isLandscape) {
        return `${titleLandscapeFontSize * 1.16}px`;
      }

      if (props.quoteSize === 's' && !props.isLandscape) {
        return '54px';
      }

      if (props.quoteSize === 'm' && !props.isLandscape) {
        return '62px';
      }

      if (props.quoteSize === 'l' && !props.isLandscape) {
        return '72px';
      }
    }};
    font-weight: 500;
    line-height: ${(props) => {
      /* quoteSize * 1.16 */
      if (props.quoteSize === 's' && props.isLandscape) {
        return `${titleLandscapeLineSize * 0.84}px`;
      }

      if (props.quoteSize === 'm' && props.isLandscape) {
        return `${titleLandscapeLineSize}px`;
      }

      if (props.quoteSize === 'l' && props.isLandscape) {
        return `${titleLandscapeLineSize * 1.16}px`;
      }

      if (props.quoteSize === 's' && !props.isLandscape) {
        return '60px';
      }

      if (props.quoteSize === 'm' && !props.isLandscape) {
        return '72px';
      }

      if (props.quoteSize === 'l' && !props.isLandscape) {
        return '74px';
      }
    }};
    /* margin-bottom: 48px; */
    position: relative;
  }

  .content__person {
    color: ${(props) => props.textColor};
    text-align: center;
    font-weight: 400;
    font-size: 32px;
    line-height: 36px;
    position: absolute;
    top: calc(100% + 48px);
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default Card03Container;
