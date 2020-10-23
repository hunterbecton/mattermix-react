import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAuth } from '../../hooks/useAuth';
import Layout from '../Layout/Layout';
import Loader from '../Loader/Loader';

const LoaderContainer = styled.div`
  grid-column: 2 / span 12;

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
  }
`;

const Verify = () => {
  const { verify } = useAuth();

  const history = useHistory();

  const location = useLocation();

  useEffect(() => {
    // Redirect to login if no hash is present
    if (!location.hash) {
      toast.error('Expired or invalid token.');
      history.push('/login');
    }

    if (location.hash) {
      // Get token from hash
      const fields = location.hash.split('=');

      const token = fields[1];

      try {
        verify(token).then((res) => {
          if (res.status === 'success') {
            toast('Successfully logged in!');
            history.push('/templates');
          } else {
            toast.error('Expired or invalid token.');
            history.push('/login');
          }
        });
      } catch (error) {
        toast.error('Error logging in. Please try again.');
        history.push('/login');
      }
    }
  }, []);

  return (
    <Layout>
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    </Layout>
  );
};

export default Verify;
