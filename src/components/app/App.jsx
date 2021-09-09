import React from 'react';
import ZeldaContainer from '../../containers/ZeldaContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailContainer from '../../containers/DetailContainer';

export default function App() {
  return (
    <BrowserRouter>
      <ZeldaContainer />
      <Switch>
        <Route path="/:id" component={DetailContainer} />
        <Route exact path="/" component={ZeldaContainer} />
      </Switch>
    </BrowserRouter>
  );
}
