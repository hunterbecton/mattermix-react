import styled from 'styled-components';

import Chevron from '../../../images/chevron.svg';

const CardFormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: ${(props) => props.width};

  label {
    font-size: 0.75rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.grey01};
    margin-bottom: 0.5rem;
  }

  input {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.white01};
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.white01};
    background: ${(props) => props.theme.colors.black03};
    padding: 0.5rem;
    transition: ${(props) => props.theme.animations.field};
  }

  input::placeholder {
    color: ${(props) => props.theme.colors.grey01};
  }

  select {
    appearance: none;
    color: ${(props) => props.theme.colors.white01};
    background: ${(props) => props.theme.colors.black03};
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.white01};
    font-size: 1rem;
    padding: 0.5rem;
    transition: ${(props) => props.theme.animations.field};
    cursor: pointer;
  }

  select:focus {
    outline: 2px solid ${(props) => props.theme.colors.blue01};
    outline-offset: 2px;
  }
`;

export default CardFormFieldContainer;
