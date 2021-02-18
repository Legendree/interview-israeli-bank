import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { authorize } from './api/Authorization';
import Login from './pages/Login';
import { useSelector } from 'react-redux';

export default function App() {
  const state = useSelector((state) => state);

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
    </Switch>
  );
}
