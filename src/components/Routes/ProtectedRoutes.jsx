import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../../hooks/useAuth';
import Layout from '../Layout/Layout';
import Loader from '../Loader/Loader';

const LoaderContainer = styled.div`
  grid-column: 2 / span 12;

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
  }
`;

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticating, isLoggedIn, user } = useAuth();

  // useEffect(() => {
  //   const runIsLoggedIn = async () => {
  //     await isLoggedIn();
  //   };
  //   runIsLoggedIn();
  // }, []);

  if (isAuthenticating) {
    return (
      <Layout>
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </Layout>
    );
  }

  if (!isAuthenticating && user && user.role === 'pro') {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }

  if (!isAuthenticating && user && user.role !== 'pro') {
    return <Route {...rest} render={() => <Redirect to='/pro' />} />;
  }

  if (!isAuthenticating && !user) {
    return <Route {...rest} render={() => <Redirect to='/login' />} />;
  }
};

export default ProtectedRoute;
