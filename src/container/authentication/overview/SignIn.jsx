import React, { useState, useCallback } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TwitterOutlined } from '@ant-design/icons';
import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook-f';
import { Auth0Lock } from 'auth0-lock';
import { AuthWrapper } from './style';
import { login } from '../../../redux/authentication/actionCreator';
import { Checkbox } from '../../../components/checkbox/checkbox';
import Heading from '../../../components/heading/heading';
import { auth0options } from '../../../config/auth0';
import { imageUrl } from '../../../components/utilities/image';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

function SignIn() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const [form] = Form.useForm();
  const [state, setState] = useState({
    checked: null,
  });

  const lock = new Auth0Lock(clientId, domain, auth0options);

  const handleSubmit = useCallback(() => {
    dispatch(login());
    history('/admin');
  }, [history, dispatch]);

  const onChange = (checked) => {
    setState({ ...state, checked });
  };

  lock.on('authenticated', (authResult) => {
    lock.getUserInfo(authResult.accessToken, (error) => {
      if (error) {
        return;
      }

      handleSubmit();
      lock.hide();
    });
  });

  return (
    <AuthWrapper>
      <p className="auth-notice">
        Don&rsquo;t have an account? <NavLink to="/register">Sign up now</NavLink>
      </p>
      <div className="auth-contents">
        <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
          <Heading as="h3">
            Sign in to <span className="color-secondary">Admin</span>
          </Heading>
          <Form.Item
            name="username"
            rules={[{ message: 'Please input your username or Email!', required: true }]}
            initialValue="name@example.com"
            label="Username or Email Address"
          >
            <Input />
          </Form.Item>
          <Form.Item name="password" initialValue="123456" label="Password">
            <Input.Password placeholder="Password" />
          </Form.Item>
          <div className="auth-form-action">
            <Checkbox checked={state.checked} onChange={onChange}>
              Keep me logged in
            </Checkbox>
            <NavLink className="forgot-pass-link" to="/forgotPassword">
              Forgot password?
            </NavLink>
          </div>
          <Form.Item>
            <Button className="btn-signin" htmlType="submit" type="primary" size="large">
              {isLoading ? 'Loading...' : 'Sign In'}
            </Button>
          </Form.Item>
          <p className="form-divider">
            <span>Or</span>
          </p>
          <ul className="social-login">
            <li>
              <Link className="google-signup" to="#">
                <img src={imageUrl('static/img/google.png')} alt="" />
                <span>Sign in with Google</span>
              </Link>
            </li>
            <li>
              <Link className="facebook-sign" to="#">
                <UilFacebook />
              </Link>
            </li>
            <li>
              <Link className="twitter-sign" to="#">
                <TwitterOutlined />
              </Link>
            </li>
          </ul>
          <div className="auth0-login">
            <Link to="#" onClick={() => lock.show()}>
              Sign In with Auth0
            </Link>
          </div>
        </Form>
      </div>
    </AuthWrapper>
  );
}

export default SignIn;
