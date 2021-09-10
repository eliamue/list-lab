import React, { Component } from 'react';
import GameList from '../components/games/GameList';
import { fetchCreatures } from '../services/ZeldaApi';
import '../styles/List.css';

export default class ZeldaContainer extends Component {
  state = {
    loading: true,
    creatures: [],
  };

  componentDidMount() {
    fetchCreatures().then((creatures) =>
      this.setState({
        creatures,
        loading: false,
      })
    );
  }

  render() {
    const { loading, creatures } = this.state;
    if(loading) {
      return (
        <div>
          <img
            src="https://thumbs.gfycat.com/DistantGrayFinwhale-max-1mb.gif"
            alt="Triforce loading icon"
          />
        </div>
      );
    } else {
      return (
        <div>
          <h1>BREATH OF THE WILD CREATURES</h1>

          <GameList creatures={creatures} />
        </div>
      );
    }
  }
}
