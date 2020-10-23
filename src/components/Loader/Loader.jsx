import React, { Fragment } from 'react';
import Lottie from 'react-lottie';
import loaderAnimation from '../../lottie/loader.json';

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Fragment>
      <Lottie
        options={defaultOptions}
        height={60}
        width={60}
        style={{ margin: '0' }}
      />
    </Fragment>
  );
};

export default Loader;
