import React from 'react';
import ZeldaContainer from '../../containers/ZeldaContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailContainer from '../../containers/DetailContainer';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ZeldaContainer} />
        <Route exact path="/:id" component={DetailContainer} />
      </Switch>
    </BrowserRouter>
  );
}
