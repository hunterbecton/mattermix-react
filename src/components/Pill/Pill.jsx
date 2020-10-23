import styled from 'styled-components';

const Pill = styled.span`
  background-color: ${(props) => props.theme.colors.black03};
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.grey01};
  font-size: 0.875rem;
  margin-right: 1rem;
`;

export default Pill;
