import styled from 'styled-components';

const ToggleButtonContainer = styled.div`
  display: flex;
  align-items: center;

  button:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  button:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
  }
`;

export default ToggleButtonContainer;
