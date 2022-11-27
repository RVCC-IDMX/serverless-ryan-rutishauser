const chalk = require('chalk');
const { DateTime } = require('luxon');

// mod.cjs
// eslint-disable-next-line no-shadow, import/no-extraneous-dependencies
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// eslint-disable-next-line func-names
exports.handler = async function (event) {
  const eventBody = JSON.parse(event.body);
  const date = DateTime.now();
  const color = eventBody.region === 'kanto' ? chalk.red : chalk.blue;

  console.log(color(`${date}: Fetching data from PokeAPI`));
  console.log(color(`\teventBody.region: ${eventBody.region}`));

  // eslint-disable-next-line prefer-template
  const POKE_API = 'https://pokeapi.co/api/v2/pokedex/' + eventBody.region;

  console.log(event);

  const response = await fetch(POKE_API);
  const data = await response.json();
  console.log(color(`\tNumber of entries: ${data.pokemon_entries.length}`));

  return {
    statusCode: 200,
    body: JSON.stringify({ pokemon: data.pokemon_entries }),
  };
};
