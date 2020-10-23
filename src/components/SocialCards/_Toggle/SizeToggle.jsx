import React from 'react';

import LandscapeToggle from './LandscapeToggle';
import SquareToggle from './SquareToggle';
import ToggleButtonContainer from './ToggleButtonContainer';
import square from '../../../images/square.svg';
import landscape from '../../../images/landscape.svg';

const SizeToggle = ({ isLandscape }) => {
  return (
    <ToggleButtonContainer>
      <SquareToggle isLandscape={isLandscape}>
        <img src={square} alt='square mode' />
      </SquareToggle>
      <LandscapeToggle isLandscape={isLandscape}>
        <img src={landscape} alt='landscape mode' />
      </LandscapeToggle>
    </ToggleButtonContainer>
  );
};

export default SizeToggle;
