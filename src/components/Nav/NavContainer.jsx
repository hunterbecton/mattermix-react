import styled from 'styled-components';

const NavContainer = styled.nav`
  grid-column: 2 / span 12;
  padding: 2rem 0;
  display: flex;
  align-items: center;

  a,
  p {
    color: ${(props) => props.theme.colors.white01};
    font-size: 1rem;
    font-weight: 900;
    margin-right: 2rem;
    transition: ${(props) => props.theme.animations.link};
  }

  p {
    cursor: default;
  }

  a:hover,
  a:focus {
    outline: none;
    color: ${(props) => props.theme.colors.blue01};
  }

  img {
    width: 2rem;
  }

  .logo {
    margin-right: 3rem;
  }

  .logo:focus-visible {
    outline: 1px solid ${(props) => props.theme.colors.blue01};
  }

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
  }
`;

export default NavContainer;
