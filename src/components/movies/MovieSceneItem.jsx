/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/layout/MovieSceneItem.scss';
import PropTypes from 'prop-types';
import MovieSceneDetail from './MovieSceneDetail';

const MovieSceneItem = ({ film }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <Link className="link" to={'/movies/' + film.id}>
      <li className="filmList-item" onClick={handleClick}>
        <img
          className="filmList-item-img"
          src={film.poster}
          alt="Movie poster"
        />
        <h2 className="filmList-item-title">{`${film.movie}-${film.year}`}</h2>
        <p className="filmList-item-text">{film.phrase}</p>
        {isClicked ? <MovieSceneDetail {...film} /> : ''}
      </li>
    </Link>
  );
};
MovieSceneItem.protoTypes = {
  film: PropTypes.obj,
  onClick: PropTypes.func,
};

export default MovieSceneItem;
