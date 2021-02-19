import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { authorize, getToken } from '../api/Authorization';

import '../styles/pages/Login.css';

import { needAuthorize } from '../utils/Helpers';

export default function Login() {
  const query = new URLSearchParams(useLocation().search);

  const [hasCode, setHasCode] = useState(false);

  const fetchToken = async (code) => {
    const token = await getToken(code);

    console.log(token);
    if (token) {
      window.localStorage.setItem('token', token.access_token);
      window.localStorage.setItem(
        'token_experation',
        `${Date.now() + 60 * 60 * 1000}` // Setting token experation to one hour
      );

      window.location.replace('/');
    }
  };

  useEffect(() => {
    if (!needAuthorize) window.history.back();
    const code = query.get('code');
    if (code) {
      setHasCode(true);
      fetchToken(code);
    } else window.location.replace(authorize());
  }, []); // eslint-disable-line

  return (
    <div className='login_container'>
      <span className='login_label'>
        {!hasCode
          ? 'Redirecting to login via Spotify...'
          : 'Logging you in... please wait'}
      </span>
    </div>
  );
}
