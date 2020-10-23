import React from 'react';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';

import Button from '../Button/Button';

const CaptchaButton = ({
  onVerifyCaptcha,
  backgroundColor,
  hover,
  verified,
}) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const clickHandler = async () => {
    if (!executeRecaptcha) {
      return;
    }

    const token = await executeRecaptcha('contact');

    onVerifyCaptcha(token);
  };

  return (
    <Button
      onClick={clickHandler}
      type='button'
      backgroundColor={backgroundColor}
      cursor={verified ? true : false}
      hover={hover}
      disabled={verified ? true : false}
    >
      {verified ? 'Verified' : 'Verify you are human'}
    </Button>
  );
};

export const ReCaptcha = ({
  onVerifyCaptcha,
  backgroundColor,
  hover,
  verified,
}) => (
  <GoogleReCaptchaProvider
    reCaptchaKey={`${process.env.REACT_APP_CAPTCHA_SITE_KEY}`}
  >
    <CaptchaButton
      onVerifyCaptcha={onVerifyCaptcha}
      backgroundColor={backgroundColor}
      hover={hover}
      verified={verified}
    />
  </GoogleReCaptchaProvider>
);
