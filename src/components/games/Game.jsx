import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ name, description, image, drops, common_locations }) => (
  <>
    <h1>{name}</h1>
    <img src={image} alt={name} />
    <p>{description}</p>
    <p>{drops}</p>
    <p>{common_locations}</p>
  </>

);

Game.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  drops: PropTypes.array,
  common_locations: PropTypes.array
};

export default Game;
