import React from 'react';
import { Link } from 'react-router-dom';

import MobileNavContainer from './MobileNavContainer';
import MobileNavLinks from './MobileNavLinks';
import { useAuth } from '../../hooks/useAuth';
import { apiGetPortalSession } from '../../api/payment';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const MobileNav = ({ isMobileOpen }) => {
  const { user, logout } = useAuth();

  const history = useHistory();

  const handlePortal = async (customerId) => {
    try {
      const { session } = await apiGetPortalSession(customerId);

      const sessionUrl = session.url;

      window.location.replace(sessionUrl);
    } catch (error) {
      toast.error('Could not redirect to customer portal.');
    }
  };

  return (
    <MobileNavContainer isMobileOpen={isMobileOpen}>
      <MobileNavLinks isMobileOpen={isMobileOpen}>
        <Link to='/templates'>Templates</Link>
        <Link to='/pro'>Pro</Link>
        {!user && <Link to='/pro'>Pro</Link>}
        {user && user.customerId && (
          <p
            tabIndex='0'
            role='button'
            onClick={() => handlePortal(user.customerId)}
            onKeyDown={(e) =>
              e.key === 'Enter' ? handlePortal(user.customerId) : null
            }
          >
            Manage
          </p>
        )}
        {user && (
          <p
            tabIndex='0'
            role='button'
            onClick={() => logout(history)}
            onKeyDown={(e) => (e.key === 'Enter' ? logout(history) : null)}
          >
            Logout
          </p>
        )}
      </MobileNavLinks>
    </MobileNavContainer>
  );
};

export default MobileNav;
