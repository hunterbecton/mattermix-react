import styled from 'styled-components';

const CardEditorForm = styled.section`
  background-color: ${(props) => props.theme.colors.black02};
  grid-column: 1 / span 6;
  padding: 3rem;
  color: ${(props) => props.theme.colors.white01};
  position: relative;
  height: calc(100vh - 7.75rem);
  overflow-y: scroll;

  .download {
    position: absolute;
    top: 3rem;
    right: 3rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  h2:first-child {
    margin-bottom: 3rem;
  }

  @media ${(props) => props.theme.breakpoints.m} {
    height: auto;
    order: 2;
    grid-column: 1 / span 8;
  }
`;

export default CardEditorForm;
