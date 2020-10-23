import styled from 'styled-components';

const CardEditorPreview = styled.section`
  grid-column: 2 / span 12;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 216px;
  gap: 2rem;

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
  }
`;

export default CardEditorPreview;
