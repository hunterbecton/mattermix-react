import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;

  & > p {
    cursor: pointer;
  }

  & > p:hover {
    color: ${(props) => props.theme.colors.blue01};
  }
`;

export default DropdownContainer;
