import styled from 'styled-components';

const ProCard = styled.div`
  padding: 4rem;
  background-color: ${(props) => props.theme.colors.black02};
  border-radius: 0.25rem;
  margin: auto;
  z-index: 500;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 6.5rem;

  h1 {
    text-align: center;
  }

  button {
    margin-top: 2rem;
  }
`;

export default ProCard;
