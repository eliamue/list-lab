import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game';

const GameList = ({ creatures }) => (
  <ul aria-label="creatures">
    {creatures.map(creature => (
      <li key={creature.id}>
        <Game
          name={creature.name}
          image={creature.image}
          description={creature.description}
          cooking_effect={creature.cooking_effect}
        />
      </li>
    ))}
  </ul>
);

GameList.propTypes = {
  creatures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      cooking_effect: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default GameList;

