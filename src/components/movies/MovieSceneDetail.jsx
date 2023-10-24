import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/layout/MovieSceneDetail.scss';
import PropTypes from 'prop-types';
import localStorage from '../../services/localStorage';

const MovieSceneDetail = ({ film }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (film) {
      setLoading(false);
    } else {
      const storedMovieData = localStorage.get('currentMovie');

      if (storedMovieData) {
        const currentPathname = location.pathname;
        const storedMovieId = storedMovieData.id;

        // revisa si la película clicada coincide con la id de las películas del LS
        if (currentPathname.includes(`/movies/${storedMovieId}`)) {
          setLoading(false);
        } else {
          // en caso que no haya coincidencia te redirecciona a los detalles de la película
          window.location.href = `/movies/${storedMovieId}`;
        }
      } else {
        // en caos que no coincida te muestra Loading
        setLoading(false);
      }
    }
  }, [film, location.pathname]);

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
