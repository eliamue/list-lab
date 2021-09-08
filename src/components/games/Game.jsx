import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ name, description, released_date }) => (
  <>
    <h1>{name}</h1>
    <p>{description}</p>
    <p>{released_date}</p>
  </>
);

Game.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  released_date: PropTypes.string.isRequired,
};

export default Game;
