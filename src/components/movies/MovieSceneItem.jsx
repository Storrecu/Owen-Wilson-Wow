/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import MovieSceneDetail from './MovieSceneDetail';

const MovieSceneItem = ({ film }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <Link to={'/movies/' + film.id} key={uuidv4()}>
        <li onClick={handleClick}>
          <img className="card" src={film.poster} alt="Movie poster" />
          <h2>{film.movie}</h2>
          <p>{film.phrase}</p>
          <p>{film.year}</p>
          {isClicked ? <MovieSceneDetail {...film} /> : ''}
        </li>
      </Link>
    </>
  );
};
MovieSceneItem.protoTypes = {
  film: PropTypes.obj,
  onClick: PropTypes.func,
};

export default MovieSceneItem;
