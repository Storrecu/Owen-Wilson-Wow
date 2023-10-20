// Fichero src/services/api.js

const callToApi = () => {
  return fetch(
    'https://owen-wilson-wow-api.onrender.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((response) => {
      const result = response.map((film) => {
        return {
          poster: film.poster,
          movie: film.movie,
          phrase: film.full_line,
          year: film.year,
          audio: film.audio,
        };
      });
      return result;
    });
};

export default callToApi;
