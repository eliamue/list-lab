import React, { Component } from 'react';
import Game from '../components/games/Game';
import { fetchCreatures } from '../services/ZeldaApi';

export default class DetailContainer extends Component {
  state = {
    loading: true,
    name: '',
    description: '',
    common_locations: [],
    drops: [],
    image: ''
  };

  componentDidMount() {
    fetchCreatures().then(() =>
      this.setState({
        name,
        description,
        image,
        common_locations,
        drops,
        loading: false,
      })
    );
    const { loading, name, description, image, common_locations, drops } =
      this.state;
    if(loading) {
      return (
        <img
          src="https://thumbs.gfycat.com/DistantGrayFinwhale-max-1mb.gif"
          alt="Triforce loading icon"
        />
      );
    } else {
      return (
        <Game
          name={name}
          description={description}
          image={image}
          drops={drops}
          common_locations={common_locations}
        />
      );
    }
  }
}
