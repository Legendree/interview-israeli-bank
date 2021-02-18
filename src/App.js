import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { authorize } from './api/Authorization';
import Login from './pages/Login';

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    window.location.replace(authorize());
  }, []);

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
    </Switch>
  );
}
