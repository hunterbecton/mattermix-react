import styled from 'styled-components';

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.colors.blue01};
  border: none;
  border-radius: 0.25rem;
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')};
  color: ${(props) => props.theme.colors.white01};
  font-size: 0.875rem;
  font-weight: 700;
  transition: ${(props) => props.theme.animations.button};

  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.hover ? props.hover : props.theme.colors.blue02};
  }
`;

export default Button;
