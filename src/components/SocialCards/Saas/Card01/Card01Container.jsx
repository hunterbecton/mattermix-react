import styled from 'styled-components';

import woman from '../../../../images/woman.jpg';

const titleLandscapeFontSize = 48;

const titleLandscapeLineSize = 56;

const Card01Container = styled.div`
  font-family: 'Roboto', sans-serif;
  width: ${(props) => (props.isLandscape ? 1200 : 1000)}px;
  height: ${(props) => (props.isLandscape ? 628 : 1000)}px;
  padding: 80px;
  transform-origin: 0 0 0;
  transform: ${(props) => `scale(${props.size})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(props) => props.mainColor};
  overflow: hidden;

  header {
    width: 100%;
    display: flex;
    align-items: flex-start;
  }

  .tag {
    padding: 12px 24px;
    background-color: ${(props) => props.textColor};
    position: relative;
    box-shadow: 8px 8px 0px 0px ${(props) => props.secondaryColor};
  }

  .tag__text {
    font-size: 24px;
    font-weight: 500;
    color: ${(props) => props.mainColor};
  }

  .logo__wrapper {
    margin-left: auto;
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

  .info {
    display: flex;
    flex-direction: ${(props) => (props.isLandscape ? 'row' : 'column')};
  }

  .content {
    width: ${(props) => (props.isLandscape ? 536 : 708)}px;
    display: flex;
    flex-direction: column;
    color: ${(props) => props.textColor};
  }

  .content__title {
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
        return '36px';
      }

      if (props.titleSize === 'm' && !props.isLandscape) {
        return '54px';
      }

      if (props.titleSize === 'l' && !props.isLandscape) {
        return '64px';
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
        return '42px';
      }

      if (props.titleSize === 'm' && !props.isLandscape) {
        return '63px';
      }

      if (props.titleSize === 'l' && !props.isLandscape) {
        return '74px';
      }
    }};
    margin-bottom: 32px;
  }

  .content__date {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    margin-bottom: 12px;
  }

  .content__time {
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
  }

  .speaker {
    margin-left: ${(props) => (props.isLandscape ? 'auto' : 0)};
    margin-top: ${(props) => (props.isLandscape ? 0 : 3)}rem;
    display: flex;
    color: ${(props) => props.textColor};
    background-color: ${(props) => props.secondaryColor};
    height: 224px;
    width: 448px;
  }

  .speaker__info {
    padding: 16px;
    align-self: center;
  }

  .speaker__first,
  .speaker__last {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    margin-bottom: 8px;
  }

  .speaker__title,
  .speaker__company {
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
  }

  .speaker__title {
    margin-bottom: 8px;
  }

  .speaker__image {
    height: 224px;
    width: 224px;
    margin-left: auto;
    background-image: ${(props) =>
      props.profile === '' ? `url(${woman})` : `url(${props.profile})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }

  .cta {
    color: ${(props) => props.textColor};
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

export default Card01Container;
