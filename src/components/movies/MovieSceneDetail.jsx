import PropTypes from 'prop-types';

const MovieSceneDetail = ({ film }) => {
  return (
    <>
      <section>
        <img className="card" src={film.poster} alt="Movie poster" />
        <h2>{film.movie}</h2>
        <p>{film.phrase}</p>
        <p>{film.year}</p>
        <p>{film.director}</p>
        <p>{film.audio}</p>
      </section>
    </>
  );
};
MovieSceneDetail.propTypes = {
  film: PropTypes.array,
};

export default MovieSceneDetail;
