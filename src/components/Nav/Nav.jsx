import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import NavContainer from './NavContainer';
import DropdownContainer from './DropdownContainer';
import DropdownMenu from './DropdownMenu';
import MattermixLogo from '../../images/mattermix-logo.svg';
import { apiGetPortalSession } from '../../api/payment';

import { useAuth } from '../../hooks/useAuth';

const Nav = () => {
  const { user, logout } = useAuth();

  const history = useHistory();

  const [isDropdownOpen, setDropdownOpen] = useState(false);

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
    <NavContainer>
      <Link to='/' className='logo'>
        <img src={MattermixLogo} alt='Mattermix Logo' />
      </Link>
      <NavLink to='/templates' activeClassName='active--link'>
        Templates
      </NavLink>
      <NavLink to='/pro' activeClassName='active--link'>
        Pro
      </NavLink>
      {user && (
        <DropdownContainer>
          <p
            tabIndex='0'
            role='button'
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            onKeyDown={(e) =>
              e.key === 'Enter' ? setDropdownOpen(!isDropdownOpen) : null
            }
          >
            Account
          </p>
          <DropdownMenu
            onMouseLeave={() => setDropdownOpen(false)}
            isDropdownOpen={isDropdownOpen}
          >
            {user.customerId && (
              <p
                tabIndex='0'
                role='button'
                onClick={() => handlePortal(user.customerId)}
              >
                Manage
              </p>
            )}
            <p tabIndex='0' role='button' onClick={() => logout(history)}>
              Logout
            </p>
          </DropdownMenu>
        </DropdownContainer>
      )}
      {!user && (
        <NavLink to='/login' activeClassName='active--link'>
          Login
        </NavLink>
      )}
    </NavContainer>
  );
};

export default Nav;
