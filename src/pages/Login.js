import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import AlbumList from '../components/AlbumList';
import Layout from '../components/Layout';
import Search from '../components/Search';

export default function Login() {
  const query = useLocation();

  useEffect(() => {
    console.log(query);
  }, []);
  return (
    <Layout>
      <span>Logging you in... please wait</span>
    </Layout>
  );
}
