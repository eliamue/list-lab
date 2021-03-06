import React, { Component } from 'react';
import Game from '../components/games/Game';
import { fetchOneCreature } from '../services/ZeldaApi';
import PropTypes from 'prop-types';
import '../styles/Detail.css';

export default class DetailContainer extends Component {
  state = {
    loading: true,
    name: '',
    description: '',
    image: ''
  };

  componentDidMount() {
    fetchOneCreature(this.props.match.params.id).then((creature) =>
      this.setState({
        name: creature.name,
        description: creature.description,
        image: creature.image,
        loading: false
      })
    );
  }

  render() {
    const { loading, name, description, image } = this.state;
    if(loading) {
      return (
        <img className="spinner"
          src="https://thumbs.gfycat.com/DistantGrayFinwhale-max-1mb.gif"
          alt="Triforce loading icon"
        />
      );
    } else {
      return (
        <div>
          <h2>Creature</h2>
          <Game
            name={name}
            description={description}
            image={image}
          />
        </div>
      );
    }
  }
}
DetailContainer.propTypes = {
  match: PropTypes.any,
  params: PropTypes.any
};
