import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';

import Layout from '../Layout/Layout';
import MaxWidthSection from '../Layout/MaxWidthSection';
import sadAnimation from '../../lottie/sad.json';

const NotFoundContainer = styled(MaxWidthSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > p {
    color: ${(props) => props.theme.colors.white01};
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
    font-weight: 400;
  }
`;

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: sadAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Layout>
      <NotFoundContainer>
        <Lottie
          options={defaultOptions}
          height={150}
          width={150}
          style={{ margin: '0' }}
        />
        <p>This page doesn't exist.</p>
      </NotFoundContainer>
    </Layout>
  );
};

export default NotFound;
