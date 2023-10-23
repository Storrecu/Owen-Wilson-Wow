import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/layout/MovieSceneList.scss';
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
    <MovieSceneItem
      key={uuidv4()}
      film={eachFilm}
      onClick={() => handleFilmClick(eachFilm)}
    />
  ));

  return (
    <>
      <ul className="filmList">{renderFilmItem}</ul>
    </>
  );
};
MovieSceneList.propTypes = {
  filmList: PropTypes.array,
};

export default MovieSceneList;
