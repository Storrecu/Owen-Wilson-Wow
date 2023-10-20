import PropTypes from 'prop-types';

const MovieSceneList = ({ filmList }) => {
  const uniqueFilmNames = new Set(filmList.map((film) => film.movie));
  const uniqueFilmList = filmList.filter((film) =>
    uniqueFilmNames.has(film.movie)
  );

  if (uniqueFilmList.length === 0) {
    return <p>No matches found</p>;
  }
  const renderFilmItem = uniqueFilmList.map((eachFilm, i) => (
    <li key={i}>
      <img className="card" src={eachFilm.poster} alt="Movie poster" />
      <h2>{eachFilm.movie}</h2>
      <p>{eachFilm.phrase}</p>
      <p>{eachFilm.year}</p>
    </li>
  ));

  return (
    <>
      <ul>{renderFilmItem}</ul>
    </>
  );
};
MovieSceneList.propTypes = {
  filmList: PropTypes.array,
};

export default MovieSceneList;
