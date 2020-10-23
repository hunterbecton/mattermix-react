import styled from 'styled-components';

const DropdownMenu = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.black02};
  border-radius: 0.25rem;
  width: fit-content;
  padding: 1.25rem;
  z-index: 1000;
  top: calc(100% + 0.5rem);
  left: 0;
  display: ${(props) => (props.isDropdownOpen ? 'flex' : 'none')};
  flex-direction: column;
  filter: ${(props) => props.theme.shadows.card};

  & > p {
    margin: 0.25rem 0;
    cursor: pointer;
  }

  & > p:hover,
  & > p:focus {
    outline: none;
    color: ${(props) => props.theme.colors.blue01};
  }
`;

export default DropdownMenu;
