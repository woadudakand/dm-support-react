import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from '../container/authentication/Index';

const Login = lazy(() => import('../container/authentication/overview/SignIn'));
const SignUp = lazy(() => import('../container/authentication/overview/Signup'));
const ForgotPass = lazy(() => import('../container/authentication/overview/ForgotPassword'));

const FrontendRoutes = React.memo(() => {
  return (
    <Suspense
      fallback={
        <div className="spin">
          <Spin />
        </div>
      }
    >
      <Routes>
        <Route index element={<Login />} />
        <Route path="forgotPassword" element={<ForgotPass />} />
        <Route path="register" element={<SignUp />} />
      </Routes>
    </Suspense>
  );
});

export default AuthLayout(FrontendRoutes);
