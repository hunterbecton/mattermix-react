import React from 'react';
import styled from 'styled-components';

const CardOptionsContainer = styled.div`
  grid-column: 2 / span 1;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.black02};
  border-radius: 0.25rem;
  height: max-content;
  z-index: 1000;

  > div:not(:last-child) {
    margin-bottom: 1rem;
  }

  label {
    margin-bottom: 0.5rem;
  }

  @media ${(props) => props.theme.breakpoints.s} {
    grid-column: 1 / span 2;
  }
`;

const CardOptions = ({ componentWidth, children }) => {
  return (
    <CardOptionsContainer componentWidth={componentWidth}>
      {children}
    </CardOptionsContainer>
  );
};

export default CardOptions;
