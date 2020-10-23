import React from 'react';

import FooterContainer from './FooterContainer';
import FooterInfo from './FooterInfo';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfo>
        <p>
          © Mattermix •{' '}
          <a
            href='https://www.iubenda.com/privacy-policy/72838443'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            Privacy
          </a>{' '}
          •{' '}
          <a
            href='https://www.iubenda.com/terms-and-conditions/72838443'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            Terms
          </a>
        </p>
      </FooterInfo>
    </FooterContainer>
  );
};

export default Footer;
