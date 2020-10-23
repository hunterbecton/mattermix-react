import styled from 'styled-components';

import woman from '../../../../images/woman.jpg';

const titleLandscapeFontSize = 48;

const titleLandscapeLineSize = 56;

const Card04Container = styled.div`
  font-family: 'Roboto', sans-serif;
  width: ${(props) => (props.isLandscape ? 1200 : 1000)}px;
  height: ${(props) => (props.isLandscape ? 628 : 1000)}px;
  padding: 80px;
  transform-origin: 0 0 0;
  transform: ${(props) => `scale(${props.size})`};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.isLandscape ? 'space-between' : 'flex-start'};
  position: relative;
  background-color: ${(props) => props.mainColor};
  overflow: hidden;

  header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-bottom: ${(props) => (props.isLandscape ? '0' : '90px')};
  }

  .tag {
    padding: 12px 24px;
    background-color: ${(props) => props.textColor};
    box-shadow: 8px 8px 0px 0px ${(props) => props.secondaryColor};
  }

  .tag__text {
    font-size: 24px;
    font-weight: 500;
    color: ${(props) => props.mainColor};
    border: none;
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

  .speakers {
    margin-left: ${(props) => (props.isLandscape ? 'auto' : 0)};
    display: flex;
    flex-direction: column;
    color: ${(props) => props.textColor};
    background-color: ${(props) => props.secondaryColor};
    height: 368px;
    width: 368px;
    position: ${(props) => (props.isLandscape ? 'static' : 'absolute')};
    bottom: ${(props) => (props.isLandscape ? 'auto' : '80px')};
  }

  .speaker__group {
    width: 368px;
    height: 184px;
    display: flex;
  }

  .speaker__info {
    width: 50%;
    padding: 12px;
    align-self: center;
  }

  .speaker__first,
  .speaker__last {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 2px;
  }

  .speaker__title,
  .speaker__company {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
  }

  .speaker__title {
    margin-bottom: 6px;
  }

  .speaker__image {
    width: 50%;
    margin-left: auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }

  .speaker__image--1 {
    background-image: ${(props) =>
      props.profile1 === '' ? `url(${woman})` : `url(${props.profile1})`};
  }

  .speaker__image--2 {
    background-image: ${(props) =>
      props.profile2 === '' ? `url(${woman})` : `url(${props.profile2})`};
  }

  .cta {
    color: ${(props) => props.textColor};
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 80px;
    left: ${(props) => (props.isLandscape ? '80px' : 'auto')};
    right: ${(props) => (props.isLandscape ? 'auto' : '80px')};
  }

  .cta__text {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    margin-left: ${(props) => (props.isLandscape ? 0 : 'auto')};
  }
`;

export default Card04Container;
