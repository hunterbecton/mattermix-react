import styled from 'styled-components';

const HomepageHero = styled.div`
  grid-column: 4 / span 8;
  margin: 2rem 0;
  text-align: center;
  color: ${(props) => props.theme.colors.white01};

  h1 {
    font-size: 2.5rem;
    line-height: 3rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  p {
    margin-bottom: 1.5rem;
    font-weight: 400;
  }

  a {
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 0.375rem;
    color: ${(props) => props.theme.colors.white01};
    background-color: ${(props) => props.theme.colors.blue01};
    font-weight: 400;
    transition: ${(props) => props.theme.animations.button};
  }

  & > a:hover,
  & > a:focus {
    background-color: ${(props) =>
      props.hover ? props.hover : props.theme.colors.blue02};
  }

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
  }
`;

export default HomepageHero;
