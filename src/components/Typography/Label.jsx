import styled from 'styled-components';

const Label = styled.label`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.grey01};
  margin: ${(props) => props.margin};
  display: inline-block;
`;

export default Label;
