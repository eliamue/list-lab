export const fetchCreatures = () => {
  return fetch(
    'https://botw-compendium.herokuapp.com/api/v2/category/creatures'
  )
    .then((res) => res.json())
    .then((json) =>
      json.data.non_food.map((creature) => ({
        id: creature.id,
        name: creature.name,
        description: creature.description,
        image: creature.image,
        drops: creature.drops,
        common_locations: creature.common_locations,
      }))
    );
};

export const fetchOneCreature = (id) => {
  return fetch(
    `https://botw-compendium.herokuapp.com/api/v2/entry/${id}`
  )
    .then((res) => res.json())
    .then((json) => {
      return {
        id: json.data.id,
        name: json.data.name,
        description: json.data.description,
        image: json.data.image,
        drops: json.data.drops,
        locations: json.data.common_locations,
      };
    });
};
