export const findGames = () => {
  return fetch('https://zelda-api.apius.cc/api/games')
    .then((res) => res.json())
    .then((json) =>
      json.results.map((game) => ({
        id: game.id,
        name: game.name,
        description: game.description,
        released_date: game.released_date,
      }))
    );
};
