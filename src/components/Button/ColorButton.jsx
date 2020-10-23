import styled from 'styled-components';

const ColorButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.colors.blue01};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: ${(props) => props.theme.animations.filter};

  &:hover {
    filter: brightness(0.8);
  }
`;

export default ColorButton;
