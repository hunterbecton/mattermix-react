import React from 'react';

import HamburgerContainer from './HamburgerContainer';

const Hamburger = ({ isMobileOpen, setMobileOpen }) => {
  return (
    <HamburgerContainer
      role='button'
      tabIndex={0}
      onClick={() => setMobileOpen(!isMobileOpen)}
      onKeyDown={(e) =>
        e.key === 'Enter' ? setMobileOpen(!isMobileOpen) : null
      }
      className='hamburger'
      isMobileOpen={isMobileOpen}
      data-open={isMobileOpen ? 'open' : 'closed'}
    >
      <span></span>
      <span></span>
      <span></span>
    </HamburgerContainer>
  );
};

export default Hamburger;
