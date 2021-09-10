import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ name, description, image }) => (
  <div aria-label="creature">
    <h1>{name}</h1>
    <img className="animal" src={image} alt={name} />
    <p className="desc">{description}</p>
  </div>

);

Game.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
};

export default Game;
