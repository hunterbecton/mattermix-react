import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Homepage from './components/Homepage/Homepage';

import StyledToast from './components/Toaster/StyledToast';

// 404
import NotFound from './components/404/NotFound';

// Purchase
import Pro from './components/Pro/Pro';

// Auth
import Verify from './components/Auth/Verify';
import Login from './components/Auth/Login';
import ProtectedRoute from './components/Routes/ProtectedRoutes';

// Social Routes
import Card01Editor from './components/SocialCards/Saas/Card01/Card01Editor';
import Card02Editor from './components/SocialCards/Saas/Card02/Card02Editor';
import Card03Editor from './components/SocialCards/Saas/Card03/Card03Editor';
import Card04Editor from './components/SocialCards/Saas/Card04/Card04Editor';
import Card05Editor from './components/SocialCards/Saas/Card05/Card05Editor';
import Card06Editor from './components/SocialCards/Saas/Card06/Card06Editor';

// Social Templates
import SocialTemplates from './components/Template/SocialTemplates';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path='/' component={Homepage} exact />
        <Route path='/verify' component={Verify} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/templates' component={SocialTemplates} exact />
        <Route path='/pro' component={Pro} exact />
        <Route path='/social/vega/1' component={Card01Editor} exact />
        <Route path='/social/vega/2' component={Card02Editor} exact />
        <ProtectedRoute path='/social/vega/3' component={Card03Editor} exact />
        <ProtectedRoute path='/social/vega/4' component={Card04Editor} exact />
        <ProtectedRoute path='/social/vega/5' component={Card05Editor} exact />
        <ProtectedRoute path='/social/vega/6' component={Card06Editor} exact />
        <Route path='/*' component={NotFound} />
      </Switch>
      <StyledToast />
    </Fragment>
  );
}

export default App;
