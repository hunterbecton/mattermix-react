import styled from 'styled-components';

const FauxButton = styled.span`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.colors.blue01};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white01};
  font-size: 0.875rem;
  font-weight: 700;
  transition: ${(props) => props.theme.animations.button};
  margin: ${(props) => (props.margin ? props.margin : 0)};

  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.hover ? props.hover : props.theme.colors.blue02};
  }
`;

export default FauxButton;
