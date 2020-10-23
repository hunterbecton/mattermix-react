import styled from 'styled-components';

const CardEditorLayout = styled.main`
  grid-column: 1 / span 3;
  display: grid;
  grid-template-columns:
    minmax(3rem, auto) minmax(auto, 43.5rem) calc(648px)
    minmax(3rem, auto);
`;

export default CardEditorLayout;
