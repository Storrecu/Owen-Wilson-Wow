import PropTypes from 'prop-types';

const FilterByName = ({ filterValue, filterChange }) => {
  const handleInput = (ev) => {
    filterChange(ev.target.value);
  };
  return (
    <>
      <label htmlFor="">
        Search by name
        <input
          type="text"
          className="form__input-text"
          name="search_name"
          id="search_name"
          placeholder="Write the name of the movie"
          value={filterValue}
          onChange={handleInput}
        />
      </label>
    </>
  );
};
FilterByName.propTypes = {
  filterValue: PropTypes.string,
  filterChange: PropTypes.func,
};

export default FilterByName;
