import React from 'react';
import ZeldaContainer from '../../containers/ZeldaContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Game from '../games/Game';
import GameList from '../games/GameList';

export default function App() {
  return (
    <BrowserRouter>
      <ZeldaContainer />;
      <Switch>
        <Route path="/creatures/:id" exact component={Game}/>
        <Route path="/creatures" exact component={GameList}/>
      </Switch>
    </BrowserRouter>
  );
}
