import React from 'react';
import { Route, Switch } from 'react-router';
import { Main } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Main } />
    </Switch>
  );
}

export default App;
