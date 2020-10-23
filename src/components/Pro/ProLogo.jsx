import styled from 'styled-components';

const ProLogo = styled.div`
  display: flex;
  filter: ${(props) => props.theme.shadows.card};
  border-radius: 0.25rem;
  width: 7.5rem;
  height: 7.5rem;
  background-color: ${(props) => props.theme.colors.black02};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  z-index: 1000;
  transform: translateY(2rem);

  img {
    width: 2.25rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: ${(props) => props.theme.colors.white01};
    font-weight: 900;
    font-size: 1rem;
  }
`;

export default ProLogo;
