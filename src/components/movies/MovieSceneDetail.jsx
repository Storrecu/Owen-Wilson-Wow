import { useEffect, useState } from 'react';
import '../../styles/layout/MovieSceneDetail.scss';
import PropTypes from 'prop-types';
import localStorage from '../../services/localStorage';

const MovieSceneDetail = ({ film }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (film) {
      const storedMovieData = localStorage.get('currentMovie');
      // eslint-disable-next-line react/prop-types
      if (!storedMovieData || storedMovieData.id !== film.id) {
        localStorage.set('currentMovie', film);
      }
      setLoading(false);
    }
  }, [film]);

  const openAudioClip = () => {
    window.open(film.audio, '_blank');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section>
        <img className="" src={film.poster} alt="Movie poster" />
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
