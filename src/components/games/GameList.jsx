import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game';

const GameList = ({ games }) => (
  <ul aria-label="games">
    {games.map((game) => (
      <li key={game.id}>
        <Game
          name={game.name}
          description={game.description}
          released_date={game.released_date}
        />
      </li>
    ))}
  </ul>
);

GameList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      released_date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GameList;

