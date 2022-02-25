const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanetsApi() {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => `Error found: ${error}`);
}

export default fetchPlanetsApi;
