import styled from 'styled-components';

const FooterContainer = styled.footer`
  grid-column: 1 / span 14;
  align-self: flex-end;
  background-color: ${(props) => props.theme.colors.black02};
  height: 100px;
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white01};
  font-size: 1rem;

  a {
    color: ${(props) => props.theme.colors.white01};
    transition: ${(props) => props.theme.animations.link};
  }

  a:hover,
  a:focus {
    color: ${(props) => props.theme.colors.blue01};
  }

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 1 / span 8;
  }
`;

export default FooterContainer;
