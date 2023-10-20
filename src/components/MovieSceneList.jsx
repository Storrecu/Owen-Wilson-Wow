import PropTypes from 'prop-types';

const MovieSceneList = ({ filmList }) => {
  const renderFilmItem = filmList.map((eachFilm, i) => (
    <li key={i}>
      <img className="card" src={eachFilm.poster} alt="Each movie poster" />
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
