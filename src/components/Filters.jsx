import PropTypes from 'prop-types';

const Filters = ({ filterValue, filterChange }) => {
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleChangeInputMovie = (ev) => {
    filterChange(ev.target.value);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Write any movie name to start"
          name=""
          id=""
          value={filterValue}
          onChange={handleChangeInputMovie}
        />
      </form>
    </>
  );
};
Filters.propTypes = {
  filterValue: PropTypes.string,
  filterChange: PropTypes.func,
};

export default Filters;
