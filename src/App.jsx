import React, { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import store from './redux/store';
import Admin from './routes/admin';
import Auth from './routes/auth';
import AuthPagesRoute from './routes/AuthPagesRoute';
import './style.css';
import config from './config/config';
import ProtectedRoute from './components/utilities/protectedRoute';
import 'antd/dist/antd.less';
// import SimpleReactLightbox from 'simple-react-lightbox'

const { themeColor } = config;

function ProviderConfig() {
  const { rtl, isLoggedIn, topMenu, mainContent } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      topMenu: state.ChangeLayoutMode.topMenu,
      mainContent: state.ChangeLayoutMode.mode,
      isLoggedIn: state.auth.login,
    };
  });

  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setPath(window.location.pathname);
    }
    // eslint-disable-next-line no-return-assign
    return () => (unmounted = true);
  }, [setPath]);

  return (
    <ConfigProvider direction={rtl ? 'rtl' : 'ltr'}>
      <ThemeProvider theme={{ ...themeColor, rtl, topMenu, mainContent }}>
        <Router basename={import.meta.env.BASE_URL}>
          {!isLoggedIn ? (
            <Routes>
              <Route path="/*" element={<Auth />} />{' '}
            </Routes>
          ) : (
            <Routes>
              <Route path={'/admin/*'} element={<ProtectedRoute path="/*" Component={Admin} />} />
              <Route path="/authentication/*" element={<AuthPagesRoute />} />
            </Routes>
          )}
          {isLoggedIn && (path === import.meta.env.BASE_URL || path === `${import.meta.env.BASE_URL}/`) && (
            <Routes>
              <Route path="/" element={<Navigate to="admin" />} />
            </Routes>
          )}
        </Router>
      </ThemeProvider>
    </ConfigProvider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ProviderConfig />
    </Provider>
  );
}

export default App;
