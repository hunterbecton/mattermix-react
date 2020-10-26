import React, { useState } from 'react';
import styled from 'styled-components';

import Grid from '../Layout/Grid';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import MobileNav from '../Mobile/MobileNav';

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
  const [isMobileOpen, setMobileOpen] = useState(false);

  return (
    <LayoutGrid
      marginDefault={marginDefault}
      marginMedium={marginMedium}
      marginSmall={marginSmall}
    >
      <MobileNav isMobileOpen={isMobileOpen} />
      <Nav setMobileOpen={setMobileOpen} isMobileOpen={isMobileOpen} />
      {children}
      {noFooter ? null : <Footer />}
    </LayoutGrid>
  );
};

export default Layout;
