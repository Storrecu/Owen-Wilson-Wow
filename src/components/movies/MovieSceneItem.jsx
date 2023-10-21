import PropTypes from 'prop-types';
import MovieSceneDetail from './MovieSceneDetail';

const MovieSceneItem = ({ film }) => {
  return (
    <>
      <li>
        <img className="card" src={film.poster} alt="Movie poster" />
        <h2>{film.movie}</h2>
        <p>{film.phrase}</p>
        <p>{film.year}</p>
        <MovieSceneDetail director={film.director} audio={film.audio} />
      </li>
    </>
  );
};
MovieSceneItem.protoTypes = {
  film: PropTypes.obj,
};

export default MovieSceneItem;
