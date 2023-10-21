import PropTypes from 'prop-types';
const MovieSceneDetail = ({ director, audio }) => {
  return (
    <>
      <p>{director}</p>
      <p>{audio}</p>
    </>
  );
};
MovieSceneDetail.propTypes = {
  director: PropTypes.string,
  audio: PropTypes.string,
};

export default MovieSceneDetail;
