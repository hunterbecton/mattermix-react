import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Grid from '../Layout/Grid';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const LayoutGrid = styled(Grid)`
  min-height: 100vh;
`;

const Layout = ({
  children,
  marginDefault,
  marginMedium,
  marginSmall,
  noFooter,
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <LayoutGrid
      marginDefault={marginDefault}
      marginMedium={marginMedium}
      marginSmall={marginSmall}
    >
      <Nav />
      {children}
      {noFooter ? null : <Footer />}
    </LayoutGrid>
  );
};

export default Layout;
