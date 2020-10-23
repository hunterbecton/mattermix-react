import styled from 'styled-components';

import ToggleButton from './ToggleButton';

const LandscapeToggle = styled(ToggleButton)`
  background-color: ${(props) =>
    props.isLandscape ? props.theme.colors.blue01 : props.theme.colors.black03};
`;

export default LandscapeToggle;
