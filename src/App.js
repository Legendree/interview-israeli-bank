import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Details from './pages/Detalis';
import Home from './pages/Home';
import Login from './pages/Login';

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/albums/:id' component={Details} />
    </Switch>
  );
}
