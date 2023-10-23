import PropTypes from 'prop-types';

const FilterByYear = ({ selectYear, selectChange, yearsOfScenes }) => {
  const handleSelect = (ev) => {
    const selectedYear = ev.target.value;
    selectChange(selectedYear === 'All years' ? '' : selectedYear);
  };

  const renderYearsOptions = () => {
    const uniqueYears = new Set(yearsOfScenes);
    const sortedYears = Array.from(uniqueYears).sort();
    return sortedYears.map((eachYear, i) => (
      <option key={i} value={eachYear}>
        {eachYear}
      </option>
    ));
  };

  return (
    <>
      <label htmlFor="">
        Year
        <select
          className="form__input-text"
          name="selectYear"
          id="selectYear"
          value={selectYear}
          onChange={handleSelect}
        >
          <option value="">All years</option>
          {renderYearsOptions()}
        </select>
      </label>
    </>
  );
};
FilterByYear.propTypes = {
  selectYear: PropTypes.string,
  selectChange: PropTypes.func,
  yearsOfScenes: PropTypes.array,
};

export default FilterByYear;
