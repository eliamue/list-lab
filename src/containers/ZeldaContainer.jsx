import React, { Component } from 'react';
import GameList from '../components/games/GameList';
import { findGames } from '../services/ZeldaApi';

export default class ZeldaContainer extends Component {
  state = {
    loading: true,
    games: [],
  };

  componentDidMount() {
    findGames().then((games) => this.setState({ games, loading: false }));
  }

  render() {
    const { loading, games } = this.state;

    if (loading) {
      return (
        <img
          src="https://thumbs.gfycat.com/DistantGrayFinwhale-max-1mb.gif"
          alt="Triforce loading icon"
        />
      );
    }
    return <GameList games={games} />;
  }
}
