import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { authorize, getToken } from '../api/Authorization';

import Layout from '../components/Layout';
import { setLoggedIn } from '../store/actions/userActions';

export default function Login() {
  const dispatch = useDispatch();
  const query = new URLSearchParams(useLocation().search);

  const fetchToken = async (code) => {
    const token = await getToken(code);
    if (token) {
      dispatch(setLoggedIn({ isLogged: true }));

      window.localStorage.setItem('token', token.access_token);
      window.localStorage.setItem(
        'token_experation',
        `${Date.now() + 1 * 60 * 60 * 1000}`
      );

      window.location.replace('/');
    }
  };

  useEffect(() => {
    const code = query.get('code');
    if (code) fetchToken(code);
    else window.location.replace(authorize());
  }, []);

  return (
    <Layout>
      <span>Logging you in... please wait</span>
    </Layout>
  );
}
