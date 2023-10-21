import PropTypes from 'prop-types';

const MovieSceneList = ({ filmList }) => {
  const orderedFilmList = filmList.sort((a, b) =>
    a.movie.localeCompare(b.movie)
  );

  if (filmList.length === 0) {
    return <p>No matches found</p>;
  }

  const renderFilmItem = orderedFilmList.map((eachFilm, i) => (
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
