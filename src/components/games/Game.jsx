import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ name, description, image }) => (
  <>
    <h1>{name}</h1>
    <img src={image} alt={name} />
    <p>{description}</p>
  </>
);

Game.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Game;
