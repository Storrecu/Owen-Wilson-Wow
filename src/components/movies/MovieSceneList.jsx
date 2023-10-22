import { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import MovieSceneItem from './MovieSceneItem';

const MovieSceneList = ({ filmList }) => {
  // eslint-disable-next-line no-unused-vars
  const [selectedFilm, setSelectedFilm] = useState(null);

  const orderedFilmList = filmList.sort((a, b) =>
    a.movie.localeCompare(b.movie)
  );

  const handleFilmClick = (film) => {
    setSelectedFilm(film);
  };

  if (filmList.length === 0) {
    return <p>No matches found</p>;
  }

  const renderFilmItem = orderedFilmList.map((eachFilm) => (
    <Link to={`/movies/${eachFilm.id}`} key={uuidv4()}>
      <MovieSceneItem
        film={eachFilm}
        onClick={() => handleFilmClick(eachFilm)}
      />
    </Link>
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
