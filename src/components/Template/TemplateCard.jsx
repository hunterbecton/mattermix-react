import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import Pill from '../Pill/Pill';

const TemplateCardContainer = styled(Link)`
  grid-column-end: span 6;
  background-color: ${(props) => props.theme.colors.black02};
  border-radius: 0.25rem;
  padding: 1.5rem;
  box-shadow: 0px 8px 8px -4px rgba(31, 31, 33, 0.6);
  transition: box-shadow 0.5s ease;

  img {
    width: 100%;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
  }

  .pro-tag {
    /* font-size: 1rem; */
    color: ${(props) => props.theme.colors.white01};
    background-color: ${(props) => props.theme.colors.blue01};
    margin: 0 0 0 auto;
  }

  &:hover {
    box-shadow: 0px 8px 8px 4px rgba(31, 31, 33, 0.6);
  }

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column-end: span 3;
  }

  @media ${(props) => props.theme.breakpoints.s} {
    grid-column-end: span 6;
  }
`;

const TemplateCardDetails = styled.div`
  display: flex;
  align-items: center;
`;

const TemplateCard = ({ slug, img, tags, pro }) => {
  return (
    <TemplateCardContainer to={slug}>
      <LazyLoad>
        <img src={img} alt='social card' />
      </LazyLoad>
      <TemplateCardDetails>
        {tags.map((tag, i) => (
          <Pill key={i}>{tag}</Pill>
        ))}
        {pro && <Pill className='pro-tag'>Pro</Pill>}
      </TemplateCardDetails>
    </TemplateCardContainer>
  );
};

export default TemplateCard;
