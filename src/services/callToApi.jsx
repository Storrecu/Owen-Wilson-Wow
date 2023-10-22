// Fichero src/services/api.js
import { v4 as uuidv4 } from 'uuid';

const callToApi = () => {
  return fetch(
    'https://owen-wilson-wow-api.onrender.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((response) => {
      const result = response.map((film) => {
        return {
          id: uuidv4(),
          poster: film.poster,
          movie: film.movie,
          phrase: film.full_line,
          year: film.year,
          audio: film.audio,
          director: film.director,
        };
      });
      return result;
    });
};

export default callToApi;
