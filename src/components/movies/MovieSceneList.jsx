import PropTypes from 'prop-types';
import MovieSceneItem from './MovieSceneItem';

const MovieSceneList = ({ filmList }) => {
  const orderedFilmList = filmList.sort((a, b) =>
    a.movie.localeCompare(b.movie)
  );

  if (filmList.length === 0) {
    return <p>No matches found</p>;
  }

  const renderFilmItem = orderedFilmList.map((eachFilm, i) => (
    <MovieSceneItem key={i} film={eachFilm} />
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
