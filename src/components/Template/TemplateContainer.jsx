import styled from 'styled-components';

import MaxWidthSection from '../Layout/MaxWidthSection';

const TemplateContainer = styled(MaxWidthSection)`
  h1 {
    grid-column: 1 / span 12;
  }

  @media ${(props) => props.theme.breakpoints.m} {
    h1 {
      grid-column: 1 / span 6;
    }
  }
`;

TemplateContainer.displayName = 'TemplateContainer';

export default TemplateContainer;
