export const fetchCreatures = () => {
  return fetch('https://botw-compendium.herokuapp.com/api/v2/category/creatures')
    .then((res) => res.json())
    .then((json) => 
      json.data.non_food.map((creature) => ({
        id: creature.id,
        name: creature.name,
        description: creature.description,
        image: creature.image
      }))
    );
};
