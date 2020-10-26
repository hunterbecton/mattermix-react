import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import Theme from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { ProvideAuth } from './hooks/useAuth';
import ScrollToTop from './components/Scroll/ScrollToTop';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Router>
      <ScrollToTop />
      <ProvideAuth>
        <App />
      </ProvideAuth>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
