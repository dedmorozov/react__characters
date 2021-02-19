const BASE_URL = 'https://swapi.dev/api';

export function request(url) {
  return fetch(`${BASE_URL}${url}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
}

export async function getApi(endpoint) {
  const characters = await request(endpoint);

  return characters;
}
