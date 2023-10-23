import PropTypes from 'prop-types';
import '../../styles/layout/FilterByName.scss';

const FilterByName = ({ filterValue, filterChange }) => {
  const handleInput = (ev) => {
    filterChange(ev.target.value);
  };
  return (
    <>
      <label htmlFor="" className="filter_sec-form-label">
        Name
      </label>
      <input
        type="text"
        className="filter_sec-form-label-input"
        name="search_name"
        id="search_name"
        placeholder="Write a movie name"
        value={filterValue}
        onChange={handleInput}
      />
    </>
  );
};
FilterByName.propTypes = {
  filterValue: PropTypes.string,
  filterChange: PropTypes.func,
};

export default FilterByName;
