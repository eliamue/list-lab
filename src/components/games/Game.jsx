import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ name, description, image, drops, common_locations }) => (
  <div aria-label="creature">
    <h1>{name}</h1>
    <img src={image} alt={name} />
    <p>{description}</p>
    <p>{drops}</p>
    <p>{common_locations}</p>
  </div>

);

Game.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  drops: PropTypes.array,
  common_locations: PropTypes.array
};

export default Game;
