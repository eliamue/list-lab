import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game';
import { Link } from 'react-router-dom';

const GameList = ({ creatures }) => (
  <ul aria-label="creatures">
    {creatures.map((creature) => (
      <li aria-label={creature.name} key={creature.id}>
        <Link to={`/${creature.id}`}>
          <Game
            name={creature.name}
            image={creature.image}
          />
        </Link>
      </li>
    ))}
  </ul>
);

GameList.propTypes = {
  creatures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default GameList;
