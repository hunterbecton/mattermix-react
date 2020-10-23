import React from 'react';
import styled from 'styled-components';

const FaqWrapper = styled.div`
  margin-top: 3rem;

  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2.625rem;
    color: ${(props) => props.theme.colors.white01};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.375rem;
    color: ${(props) => props.theme.colors.white01};
  }
`;

const Faq = ({ question, answer }) => {
  return (
    <FaqWrapper>
      <h4>{question}</h4>
      <p>{answer}</p>
    </FaqWrapper>
  );
};

export default Faq;
