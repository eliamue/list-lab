import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ name, description, cooking_effect, image }) => (
  <>
    <h1>{name}</h1>
    <img src={image} alt={name} />
    <p>{description}</p>
    <p>{cooking_effect}</p>
  </>
);

Game.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cooking_effect: PropTypes.string.isRequired
};

export default Game;
