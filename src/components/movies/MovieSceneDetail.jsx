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
      <section className="details">
        <img className="details_img" src={film.poster} alt="Movie poster" />
        <div className="details_info">
          <h2 className="details_info-title">{film.movie}</h2>
          <p className="details_info-phrase">
            <span className="icon">
              <i className="fa-solid fa-quote-left"></i>
            </span>
            {film.phrase}
          </p>
          <p className="details_info-year">
            <span className="icon">
              <i className="fa-solid fa-calendar-days"></i>
            </span>
            {film.year}
          </p>
          <p className="details_info-director">
            <span className="icon">
              <i className="fa-solid fa-user"></i>
            </span>
            {film.director}
          </p>
          <a
            className="details_audio"
            href={film.audio}
            target="_blank"
            rel="noopener noreferrer"
            onClick={openAudioClip}
          >
            <span
              className="details_audio-icon"
              role="img"
              aria-label="Audio Clip"
            >
              <i className="fa-solid fa-headphones"></i>
            </span>{' '}
            Listen audio
          </a>
        </div>
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
