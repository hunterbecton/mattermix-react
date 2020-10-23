import styled from 'styled-components';
import check from '../../images/check-circle.svg';

const ProFeature = styled.p`
  margin-top: 2rem;
  text-align: left;
  color: ${(props) => props.theme.colors.white01};
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;

  &::before {
    content: url(${check});
    width: 1.375rem;
    height: 1.375rem;
    margin-right: 0.5rem;
  }
`;

export default ProFeature;
