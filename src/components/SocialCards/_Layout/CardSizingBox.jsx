import styled from 'styled-components';

const CardSizingBox = styled.div`
  grid-column: 1 / span 1;
  width: ${(props) =>
    props.isLandscape ? 1200 * props.cardSize : 1000 * props.cardSize}px;
  height: ${(props) =>
    props.isLandscape ? 628 * props.cardSize : 1000 * props.cardSize}px;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.s} {
    grid-column: 1 / span 2;
  }
`;

export default CardSizingBox;
