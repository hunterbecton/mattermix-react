import styled from 'styled-components';

import ToggleButton from './ToggleButton';

const SquareToggle = styled(ToggleButton)`
  background-color: ${(props) =>
    props.isLandscape ? props.theme.colors.black03 : props.theme.colors.blue01};
`;

export default SquareToggle;
