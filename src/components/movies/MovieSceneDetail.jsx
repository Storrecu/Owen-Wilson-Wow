import { useEffect } from 'react';
import PropTypes from 'prop-types';
import localStorage from '../../services/localStorage';

const MovieSceneDetail = ({ film }) => {
  if (!film) {
    return <p>Loading...</p>;
  }

  useEffect(() => {
    localStorage.set('currentMovie', film);
  }, [film]);

  const openAudioClip = () => {
    window.open(film.audio, '_blank');
  };

  return (
    <>
      <section>
        <img className="card" src={film.poster} alt="Movie poster" />
        <h2>{film.movie}</h2>
        <p>{film.phrase}</p>
        <p>{film.year}</p>
        <p>{film.director}</p>
        <a
          href={film.audio}
          target="_blank"
          rel="noopener noreferrer"
          onClick={openAudioClip}
        >
          <span role="img" aria-label="Audio Clip">
            🎧
          </span>{' '}
          Listen audio
        </a>
      </section>
    </>
  );
};
MovieSceneDetail.propTypes = {
  film: PropTypes.shape({
    poster: PropTypes.string,
    movie: PropTypes.string,
    phrase: PropTypes.string,
    year: PropTypes.number,
    director: PropTypes.string,
    audio: PropTypes.string,
  }),
};
export default MovieSceneDetail;
